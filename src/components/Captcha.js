import React, { Component } from "react";
import { Captcha } from "primereact/captcha";
import { Growl } from "primereact/growl";

export default class CaptchaDemo extends Component {
  constructor() {
    super();
    this.showResponse = this.showResponse.bind(this);
  }

  showResponse() {
    this.growl.show({
      severity: "info",
      summary: "Success",
      detail: "User Responded"
    });
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Captcha</h1>
          </div>
        </div>

        <div className="content-section implementation button-demo">
          <Growl ref={el => (this.growl = el)} />

          <Captcha
            siteKey="http://localhost:3000/captcha"
            onResponse={this.showResponse}
          />
        </div>
      </div>
    );
  }
}
