import Head from "next/head";
import Link from "next/link";

export default function About() {
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

      <Link href="/paint">
        <a className="py-3 block text-center bg-black text-white rounded-md mt-10">
          Start painting
        </a>
      </Link>
    </div>
  );
}
