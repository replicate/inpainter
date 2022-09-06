import React from "react";

const prompts = [
  "an illustration of a taxi cab in the style of r crumb",
  "a painting of fruit on a table in the style of Raimonds Staprans",
];
import sample from "lodash/sample";

export default class PromptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prompt: sample(prompts) };
  }

  render() {
    return (
      <form
        onSubmit={this.props.onSubmit}
        className="py-5 animate-in fade-in duration-700"
      >
        <div className="flex">
          <input
            type="text"
            defaultValue={this.state.prompt}
            name="prompt"
            placeholder="Enter a prompt..."
            className="block w-full flex-grow rounded-l-md"
          />
          <button
            className="bg-black text-white rounded-r-md inline-block px-4 flex-none"
            type="submit"
          >
            Generate
          </button>
        </div>
      </form>
    );
  }
}
