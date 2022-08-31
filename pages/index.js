import { useState } from "react";
import Head from "next/head";
import Canvas from "components/canvas";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [canvasImage, setCanvasImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      prompt: e.target.prompt.value,
    }

    if (prediction) {
      body.init_image = prediction.output[prediction.output.length - 1]
      if (canvasImage) {
        body.mask = canvasImage;
      }
    }

    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });
    prediction = await response.json();

    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      setPrediction(prediction);
    }
  };

  return (
    <div>
      <Head>
        <title>Inpainter</title>
      </Head>

      <main className="my-20 container mx-auto" style={{width: 512}}>

      {error && <div>{error}</div>}

      <div className="border border-hairline mb-5 bg-gray-200" style={{width: 512, height: 512}}>
      <Canvas prediction={prediction} onDraw={setCanvasImage} />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input type="text" name="prompt" placeholder="Enter a prompt..." className="block w-full flex-grow rounded-l-md" />
          <button className="bg-black text-white rounded-r-md inline-block px-4 flex-none" type="submit">Generate</button>
        </div>
      </form>

      </main>
    </div>
  );
}

