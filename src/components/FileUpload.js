import React from "react";
import { Growl } from "primereact/growl";
import { FileUpload } from "primereact/fileupload";

export default class Example extends React.Component {
  constructor() {
    super();
    this.onUpload = this.onUpload.bind(this);
    this.onFileSelect = this.onFileSelect.bind(this);
    this.onBeforeUpload = this.onBeforeUpload.bind(this);
  }

  onBeforeUpload(event) {
    console.log("response from onBeforeUpload", event.xhr);
  }
  onFileSelect(event) {
    console.log("onFileSelect called");
    console.log(event);
  }
  onUpload(event) {
    console.log(event);
    this.growl.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded"
    });
  }

  render() {
    return (
      <div className="content-section implementation">
        <h3>Advanced</h3>
        <FileUpload
          name="demo"
          url="https://cors-anywhere.herokuapp.com/https://m92xmba86c.execute-api.ap-southeast-1.amazonaws.com/Demo/multipart"
          onUpload={this.onUpload}
          onFileSelect={this.onFileSelect}
          multiple={true}
          onBeforeUpload={this.onBeforeUpload}
          accept="all"
          maxFileSize={1000000}
        />
        <Growl
          ref={el => {
            this.growl = el;
          }}
        />
      </div>
    );
  }
}
