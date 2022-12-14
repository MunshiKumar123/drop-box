import React, { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "vli3b09eml97esj";

const DropBox = () => {
  const [url, setUrl] = useState("");
  function handleSuccess(files) {
    setUrl(files[0].thumbnailLink);
    console.log(url);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Upload Or Choose Files to DropBox</h1>
      <br />
      <br />
      <div className="container">
        <DropboxChooser
          appKey={APP_KEY}
          success={handleSuccess}
          cancel={() => console.log("closed")}
          multiselect={true}
        >
          <button>Upload or Choose Files</button>
          <div className="dropbox"></div>
          <br />
          <br />
          <img src={url} width="200" height="200" alt="" />
        </DropboxChooser>
      </div>
    </div>
  );
};

export default DropBox;
