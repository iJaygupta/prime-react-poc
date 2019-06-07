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
        <a href="http://localhost:3000/datatable">
          <Button label="DataTable" className="p-button-rounded" />
        </a>
        <a href="http://localhost:3000/crud">
          <Button
            label="CrudDataTable"
            className="p-button-rounded p-button-success"
          />
        </a>
        <a href="http://localhost:3000/messages">
          <Button label="Messages" className="p-button-warning" />
        </a>
        <a href="http://localhost:3000/toggler">
          <Button label="ColumnToggler" className="p-button-danger" />
        </a>
        <a href="http://localhost:3000/filter">
          <Button label="FilterDataTable" icon="pi pi-check" />
        </a>
        <a href="http://localhost:3000/resize">
          <Button label="ColResize" className="p-button-secondary" />
        </a>
        <a href="http://localhost:3000/final">
          <Button
            label="FinalTable"
            className="p-button-rounded p-button-danger"
          />
        </a>

        <div>
          <Switch>
            <Route path="/datatable" exact component={DataTableDemo} />
            <Route path="/crud" exact component={CrudDataTable} />
            <Route path="/messages" exact component={MessageDemo} />
            <Route path="/toggler" exact component={ColumnToggler} />
            <Route path="/filter" exact component={FilterDataTable} />
            <Route path="/resize" exact component={ColResizeDemo} />
            <Route path="/final" exact component={Table} />
          </Switch>
        </div>
      </div>
    );
  }
}
