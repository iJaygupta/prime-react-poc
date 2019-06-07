import React, { Component } from "react";
import { Messages } from "primereact/messages";
import { Button } from "primereact/button";

export default class MessageDemo extends Component {
  constructor() {
    super();
    this.showSuccess = this.showSuccess.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.showWarn = this.showWarn.bind(this);
    this.showError = this.showError.bind(this);
    this.showMultiple = this.showMultiple.bind(this);
    this.showSticky = this.showSticky.bind(this);
    this.clear = this.clear.bind(this);
  }
  showSuccess() {
    this.messages.show({
      severity: "success",
      summary: "Success Message",
      detail: "Order submitted"
    });
  }

  showInfo() {
    this.messages.show({
      severity: "info",
      summary: "Info Message",
      detail: "PrimeReact rocks"
    });
  }

  showWarn() {
    this.messages.show({
      severity: "warn",
      summary: "Warn Message",
      detail: "There are unsaved changes"
    });
  }

  showError() {
    this.messages.show({
      severity: "error",
      summary: "Error Message",
      detail: "Validation failed"
    });
  }

  showSticky() {
    this.messages.show({
      severity: "info",
      summary: "Sticky Message",
      detail: "You need to close Me",
      sticky: true
    });
  }

  showMultiple() {
    this.messages.show([
      { severity: "info", summary: "Message 1", detail: "PrimeReact rocks" },
      { severity: "info", summary: "Message 2", detail: "PrimeReact rocks" },
      { severity: "info", summary: "Message 3", detail: "PrimeFaces rocks" }
    ]);
  }

  clear() {
    this.messages.clear();
  }

  render() {
    return (
      <div>
        <h1>Message Example</h1>
        <div>
          <div className="content-section implementation">
            <Messages ref={el => (this.messages = el)} />

            <h3>Severities</h3>
            <div className="p-grid p-fluid">
              <div className="p-col-12 p-md-3">
                <Button
                  onClick={this.showSuccess}
                  label="Success"
                  className="p-button-success"
                />
              </div>
              <div className="p-col-12 p-md-3">
                <Button
                  onClick={this.showInfo}
                  label="Info"
                  className="p-button-info"
                />
              </div>
              <div className="p-col-12 p-md-3">
                <Button
                  onClick={this.showWarn}
                  label="Warn"
                  className="p-button-warning"
                />
              </div>
              <div className="p-col-12 p-md-3">
                <Button
                  onClick={this.showError}
                  label="Error"
                  className="p-button-danger"
                />
              </div>
            </div>

            <h3>Options</h3>
            <div className="p-grid p-fluid">
              <div className="p-col-12 p-md-4">
                <Button onClick={this.showMultiple} label="Multiple" />
              </div>
              <div className="p-col-12 p-md-4">
                <Button onClick={this.showSticky} label="Sticky" />
              </div>
              <div className="p-col-12 p-md-4">
                <Button
                  onClick={this.clear}
                  icon="pi pi-times"
                  style={{ float: "right" }}
                  label="Clear"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
