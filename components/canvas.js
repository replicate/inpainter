import React from "react";
import Image from "next/image";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Spinner from "components/spinner";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  onChange = async () => {
    const paths = await this.canvas.current.exportPaths();

    // only respond if there are paths to draw (don't want to send a blank canvas)
    if (paths.length) {
      const data = await this.canvas.current.exportImage("svg");
      this.props.onDraw(data);
    }
  };

  render() {
    // if (!this.props.predictions.length) return null;

    const predictions = this.props.predictions.map((prediction) => {
      prediction.lastImage = prediction.output
        ? prediction.output[prediction.output.length - 1]
        : null;
      return prediction;
    });

    const predicting = predictions.some((prediction) => !prediction.output);
    const lastPrediction = predictions[predictions.length - 1];

    return (
      <div className="border border-hairline max-w-[512px] mx-auto">
        <div
          className="bg-gray-100 relative max-h-[512px] w-full"
          style={{ height: 0, paddingBottom: "100%" }}
        >
          <div className="relative" style={{ width: 512, height: 512 }}>
            {predictions
              .filter((prediction) => prediction.output)
              .map((prediction, index) => (
                <Image
                  alt={"prediction" + index}
                  key={"prediction" + index}
                  layout="fill"
                  onLoad={(event) => {
                    console.log("image loaded", event);
                    event.target.style.display = "block";
                    event.target.classList.add(
                      "animate-in",
                      "fade-in",
                      "duration-5000"
                    );
                  }}
                  className={`absolute opacity-0`}
                  style={{ zIndex: index, display: "none" }}
                  src={prediction.lastImage}
                />
              ))}

            {predictions.length === 0 && (
              <div className="flex h-full">
                <div className="m-auto">
                  <div className="py-4 px-8 rounded-lg animate-in zoom-in">
                    <p className="pb-5">
                      <strong>Inpainting</strong> is a conservation process
                      where damaged, deteriorated, or missing parts of an
                      artwork are filled in to present a complete image. This is
                      a browser-based inpainting demo using the Stable Diffusion
                      generative machine learning model.
                    </p>

                    <p className="pb-5">To get started:</p>

                    <ol className="list-decimal pl-5">
                      <li className="mb-3">
                        Enter a prompt below and hit &quot;Generate&quot;.
                      </li>
                      <li className="mb-3">
                        After a few seconds, you'll see a generated image. Click
                        and drag to erase unwanted parts of the image.
                      </li>
                      <li className="mb-3">
                        Refine your prompt or leave it as-is, and Generate again
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {predicting && (
              <div className="flex h-full">
                <div className="m-auto">
                  <div className="p-4 bg-white text-center rounded-lg animate-in zoom-in">
                    <Spinner />
                    <p className="pt-3 opacity-30 text-center text-sm">
                      {lastPrediction.status}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {predictions.length > 0 && !predicting && (
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{ zIndex: predictions.length + 100 }}
              >
                <ReactSketchCanvas
                  ref={this.canvas}
                  strokeWidth={60}
                  strokeColor="black"
                  canvasColor="transparent"
                  onChange={this.onChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
