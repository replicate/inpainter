import { useState } from "react";

const samplePrompts = [
  "an illustration of a taxi cab in the style of r crumb",
  "a painting of fruit on a table in the style of Raimonds Staprans",
  "a painting by Helen Frankenthaler",
  "a painting by Alice Neels",
  "a painting by Richard Diebenkorn",
  "a painting by Cassi Namoda",
  "a painting by Raimonds Staprans",
  "a painting by Joseph Yoakum",
];
import sample from "lodash/sample";

export default function PromptForm(props) {
  const [prompt] = useState(sample(samplePrompts));
  const [image, setImage] = useState(null);

  return (
    <form
      onSubmit={props.onSubmit}
      className="py-5 animate-in fade-in duration-700"
    >
      <div className="flex max-w-[512px]">
        <input
          type="text"
          defaultValue={prompt}
          name="prompt"
          placeholder="Enter a prompt..."
          className="block w-full flex-grow rounded-l-md"
        />

        <button
          className="bg-black text-white rounded-r-md text-small inline-block px-3 flex-none"
          type="submit"
        >
          Generate
        </button>
      </div>
    </form>
  );
}
