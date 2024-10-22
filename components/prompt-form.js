import { useState } from "react";
import sample from "lodash/sample";

const samplePrompts = [
  "a gentleman otter in a 19th century portrait",
  "bowl of ramen in the style of a comic book",
  "flower field drawn by Jean-Jacques Sempé",
  "illustration of a taxi cab in the style of r crumb",
  "multicolor hyperspace",
  "painting of fruit on a table in the style of Raimonds Staprans",
  "pencil sketch of robots playing poker",
  "photo of an astronaut riding a horse",
];

export default function PromptForm(props) {
  const [prompt] = useState(sample(samplePrompts));

  return (
    <form
      onSubmit={props.onSubmit}
      className="py-5 animate-in fade-in duration-700"
    >
      <div className="flex max-w-[1024px]">
        <input
          type="text"
          defaultValue={prompt}
          name="prompt"
          placeholder="Enter a prompt..."
          className="block w-full flex-grow rounded-l-md border-r-0"
        />
        <select
          name="model"
          className="bg-white border border-gray-300 border-l border-r-0 px-3 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300"
        >
          <option value="ideogram-ai/ideogram-v2-turbo">Ideogram v2 Turbo (Fast)</option>
          <option value="ideogram-ai/ideogram-v2">Ideogram v2 (High Quality)</option>
        </select>
        <button
          className="bg-black text-white rounded-r-md text-sm font-medium px-4 py-2 flex-none"
          type="submit"
        >
          Generate
        </button>
      </div>
    </form>
  );
}
