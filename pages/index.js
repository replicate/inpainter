import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[512px] mx-auto p-10 bg-white rounded-lg">
      <Head>
        <title>Inpainting with Stable Diffusion &amp; Replicate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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

      <Link href="/paint">
        <a className="py-3 block text-center bg-black text-white rounded-md mt-10">
          Start painting
        </a>
      </Link>
    </div>
  );
}
