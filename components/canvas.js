import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Spinner from "components/spinner";
import html2canvas from "html2canvas";
import Image from "next/image";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  onChange = async () => {
    const paths = await this.canvas.current.exportPaths();

    const $wrapper = document.getElementById("canvas-wrapper");
    const options = { useCORS: true, allowTaint: true, backgroundColor: null };
    const screenshot = await (await html2canvas($wrapper, options)).toDataURL();
    console.log(screenshot);

    // only respond if there are paths to draw (don't want to send a blank canvas)
    if (paths.length) {
      const data = await this.canvas.current.exportImage("svg");
      this.props.onDraw(data);
    }
  };

  render() {
    const prediction = this.props.prediction;

    if (!prediction) return null;

    if (!prediction.output || !prediction.output.length) {
      return (
        <div className="flex h-full">
          <div className="m-auto text-center">
            <Spinner />
            <p className="p-4 opacity-30">{prediction.status}</p>
          </div>
        </div>
      );
    }

    return (
      <div id="canvas-wrapper" style={{ width: 512, height: 512 }}>
        <Image src="/marta.jpg" alt="Marta" width="100%" height="100%" />
        <ReactSketchCanvas
          ref={this.canvas}
          strokeWidth={60}
          strokeColor="black"
          canvasColor="red"
          onChange={this.onChange}
          backgroundImage={prediction.output[prediction.output.length - 1]}
          exportWithBackgroundImage={false}
        />
      </div>
    );
  }
}
