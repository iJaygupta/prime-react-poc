import React, { Component } from "react";
import "../App.css";
import { Panel } from "primereact/panel";

export default class Profile extends Component {
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-6 p-md-6 p-lg-3">
          <div class="profile">
            <div class="img">
              <img src="https://unsplash.it/200/200" />
            </div>
            <div class="profile-details">
              <h2>John Doe</h2>
              <h2>Profile Details</h2>
            </div>
          </div>
        </div>
        <div className="p-col-6 p-md-6 p-lg-3">6</div>
        <div className="p-col-6 p-md-6 p-lg-3">6</div>
        <div className="p-col-6 p-md-6 p-lg-3">6</div>
      </div>
    );
  }
}
