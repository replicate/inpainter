import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[512px] mx-auto my-10 p-10 bg-white rounded-lg">
      <h1 className="text-center text-7xl pb-3">🎨</h1>
      <p className="py-5">
        <strong>Inpainting</strong> is a process where missing parts of an
        artwork are filled in to present a complete image. This demo uses the{" "}
        <a
          className="underline"
          href="https://replicate.com/stability-a/stable-diffusion"
        >
          Stable Diffusion
        </a>{" "}
        machine learning model and the{" "}
        <a className="underline" href="https://replicate.com/docs">
          Replicate API
        </a>{" "}
        to inpaint images right in your browser.
      </p>

      <video autoPlay loop muted style={{ width: "500px", height: "500px" }}>
        <source src="/cherries-oranges-bananas.mp4" />
      </video>

      {/* <ol className="list-decimal pl-5">
        <li className="mb-2">
          Enter a text prompt to generate an image, or upload your own starting
          image.
        </li>
        <li className="mb-2">
          Click and drag with your mouse to erase unwanted parts of the image.
        </li>
        <li className="mb-2">
          Refine your text prompt (or leave it untouched) and let the model
          generate a new inpainted image.
        </li>
      </ol> */}

      <Link href="/paint">
        <a className="py-3 block text-center bg-black text-white rounded-md mt-10">
          Try it out
        </a>
      </Link>
    </div>
  );
}
