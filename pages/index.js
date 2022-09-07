import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[512px] mx-auto my-10 p-10 bg-white rounded-lg">
      <h1 className="text-center text-7xl pb-3">🎨</h1>
      <p className="pb-5">
        <strong>Inpainting</strong> is a process where missing parts of an
        artwork are filled in to present a complete image. This demo uses the{" "}
        <a
          className="underline"
          href="https://replicate.com/stability-a/stable-diffusion"
        >
          Stable Diffusion
        </a>{" "}
        machine learning model to inpaint images.
      </p>

      <ol className="list-decimal pl-5">
        <li className="mb-2">
          Enter a text prompt below and hit &quot;Generate&quot;.
        </li>
        <li className="mb-2">
          After a few seconds, you&apos;ll see a generated image. Click and drag
          to erase unwanted parts of the image.
        </li>
        <li className="mb-2">
          Refine your prompt (or leave it) and hit &quot;Generate&quot; again
        </li>
      </ol>

      <Link href="/paint">
        <a className="py-3 block text-center bg-black text-white rounded-md mt-10">
          Try it out
        </a>
      </Link>
    </div>
  );
}
