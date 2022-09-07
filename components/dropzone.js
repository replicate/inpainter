import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone(props) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log({ acceptedFiles });
    props.onImageDropped(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="text-center border border-gray-300 text-gray-400 border-dashed px-4 py-8 text-sm cursor-pointer rounded-md select-none">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here ...</p>
        ) : (
          <p>Optional: Drop a starting image here</p>
        )}
      </div>
    </div>
  );
}
