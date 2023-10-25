import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[512px] mx-auto p-10 bg-white rounded-lg">
      <Head>
        <title>Inpainting with Stable Diffusion &amp; Replicate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <h1 className="text-center text-7xl pb-3">🎨</h1> */}
      <p className="pb-5 text-lg">
        <strong>Inpainting</strong> is a process where missing parts of an
        artwork are filled in to present a complete image. This{" "}
        <a className="underline" href="https://github.com/zeke/inpainter">
          open-source demo
        </a>{" "}
        uses the{" "}
        <a
          className="underline"
          href="https://replicate.com/stability-ai/stable-diffusion"
        >
          Stable Diffusion
        </a>{" "}
        machine learning model and{" "}
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
          Start painting
        </a>
      </Link>
    </div>
  );
}
