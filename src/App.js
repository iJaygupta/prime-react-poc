import React, { Component } from "react";
import { Button } from "primereact/button";
import { Switch, Route, Link } from "react-router-dom";
import CrudDataTable from "./components/CrudDataTable";
import DataTableDemo from "./components/DataTable";
import MessageDemo from "./components/Messages";
import ColumnToggler from "./components/ColumnToggler";
import FilterDataTable from "./components/FilterDataTable";
import ColResizeDemo from "./components/ColResize";
import Table from "./components/Table";
import FileUpload from "./components/FileUpload";
import Test from "./components/Test";

export default class DataTableColGroupDemo extends Component {
  constructor() {
    super();
    this.state = {
      sales: []
    };
  }

  render() {
    return (
      <div>
        <h1> Prime React POC</h1>

        <Link to="/datatable">
          <Button label="DataTable" className="p-button-rounded" />
        </Link>

        <Link to="/crud">
          <Button
            label="CrudDataTable"
            className="p-button-rounded p-button-success"
          />
        </Link>

        <Link to="/messages">
          <Button label="Messages" className="p-button-warning" />
        </Link>

        <Link to="/toggler">
          <Button label="ColumnToggler" className="p-button-danger" />
        </Link>

        <Link to="/filter">
          <Button label="FilterDataTable" icon="pi pi-check" />
        </Link>

        <Link to="/resize">
          <Button label="ColResize" className="p-button-secondary" />
        </Link>

        <Link to="/final">
          <Button
            label="FinalTable"
            className="p-button-rounded p-button-danger"
          />
        </Link>

        <Link to="/fileupload">
          <Button
            label="FileUpload"
            className="p-button-rounded p-button-success"
          />
        </Link>

        <div>
          <Switch>
            <Route path="/datatable" exact component={DataTableDemo} />
            <Route path="/crud" exact component={CrudDataTable} />
            <Route path="/messages" exact component={MessageDemo} />
            <Route path="/toggler" exact component={ColumnToggler} />
            <Route path="/filter" exact component={FilterDataTable} />
            <Route path="/resize" exact component={ColResizeDemo} />
            <Route path="/final" exact component={Table} />
            <Route path="/fileupload" exact component={FileUpload} />
          </Switch>
          <Test name={"Demo App"} />
        </div>
      </div>
    );
  }
}
