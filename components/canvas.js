import React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Spinner from 'components/spinner';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  onChange = async () => {
    const data = await this.canvas.current.exportImage("png")
    this.props.onDraw(data)
  }
  
  render() {
    const prediction = this.props.prediction

    if (!prediction) return null;

    if (!prediction.output || !prediction.output.length) {
      return (
        <div className="flex h-full">
          <div className="m-auto text-center">
            <Spinner />
            <p className="p-4 opacity-30">{prediction.status}</p>
          </div>
        </div>
      )
    }

    return (
        <div style={{width: 512, height: 512}}>
          <ReactSketchCanvas
            ref={this.canvas}
            strokeWidth={60}
            strokeColor="black"
            onChange={this.onChange}
            backgroundImage={prediction.output[prediction.output.length - 1]}
          />
        </div>
    );
  }
};
