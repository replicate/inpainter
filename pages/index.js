import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function About() {
  const [apiToken, setApiToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("replicateApiToken");
    if (token) {
      setApiToken(token);
    }
  }, []);

  const handleTokenSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const token = formData.get('token').trim();
    if (token) {
      localStorage.setItem("replicateApiToken", token);
      setApiToken(token);
    }
  };

  const hasToken = apiToken !== "";

  return (
    <div className="max-w-[512px] mx-auto p-10 bg-white rounded-lg">
      <Head>
        <title>Inpainting with AI, powered by Replicate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="pb-5 text-lg">
        <strong>Inpainting</strong> is the process of using AI image generation models to erase and repaint parts of existing images. This{" "}
        <a className="underline" href="https://github.com/replicate/inpainter">
          open-source demo
        </a>{" "}
        uses the{" "}
        <a
          className="underline"
          href="https://replicate.com/ideogram-ai/ideogram-v2"
        >
          Ideogram v2
        </a>{" "}
        and{" "}
        <a
          className="underline"
          href="https://replicate.com/ideogram-ai/ideogram-v2-turbo"
        >
          Ideogram v2 Turbo
        </a>{" "}
        machine learning models and{" "}
        <a className="underline" href="https://replicate.com">
          Replicate&apos;s API
        </a>{" "}
        to inpaint images right in your browser.
      </p>

      <Link href="/paint">
        <video autoPlay loop muted playsInline className="w-full cursor-pointer">
          <source src="/cherries-oranges-bananas.mp4" />
        </video>
      </Link>

      {!hasToken ? (
        <form onSubmit={handleTokenSubmit} className="mt-10">
          <div className="mb-4">
            <input
              type="text"
              id="token"
              name="token"
              placeholder="Enter your Replicate API token"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            <p className="mt-2 text-sm text-gray-500">
              Get your API token from{" "}
              <a href="https://replicate.com/account/api-tokens" className="underline" target="_blank" rel="noopener noreferrer">
                Replicate
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-md"
          >
            Save Token
          </button>
        </form>
      ) : (
        <Link href="/paint">
          <button type="button" className="w-full py-3 bg-black text-white rounded-md mt-10">
            Start painting
          </button>
        </Link>
      )}
    </div>
  );
}
