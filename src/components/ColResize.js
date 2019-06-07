import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default class ColResizeDemo extends Component {
  constructor() {
    super();
    this.state = {
      cars1: [
        {
          brand: "My Poc Brand",
          color: "White",
          vin: "Null Vin",
          year: "Full Year"
        },
        {
          brand: "Samsung",
          color: "Green",
          vin: "Data2",
          year: "Year2"
        }
      ],
      cars2: [
        {
          brand: "My Poc Brand",
          color: "White",
          vin: "Null Vin",
          year: "Full Year"
        },
        {
          brand: "Samsung",
          color: "Green",
          vin: "Data2",
          year: "Year2"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h3>Fit Mode</h3>
        <DataTable
          value={this.state.cars1}
          resizableColumns={true}
          columnResizeMode="fit"
        >
          <Column field="vin" header="Vin" style={{ width: "20%" }} />
          <Column field="year" header="Year" style={{ width: "40%" }} />
          <Column field="brand" header="Brand" style={{ width: "20%" }} />
          <Column field="color" header="Color" style={{ width: "20%" }} />
        </DataTable>

        <h3>Expand Mode</h3>
        <DataTable
          value={this.state.cars1}
          resizableColumns={true}
          columnResizeMode="expand"
        >
          <Column field="vin" header="Vin" />
          <Column field="year" header="Year" />
          <Column field="brand" header="Brand" />
          <Column field="color" header="Color" />
        </DataTable>

        <h3>Scrollable Mode</h3>
        <DataTable
          value={this.state.cars2}
          resizableColumns={true}
          scrollable={true}
          scrollHeight="200px"
        >
          <Column field="vin" header="Vin" style={{ width: "20%" }} />
          <Column field="year" header="Year" style={{ width: "40%" }} />
          <Column field="brand" header="Brand" style={{ width: "20%" }} />
          <Column field="color" header="Color" style={{ width: "20%" }} />
        </DataTable>
      </div>
    );
  }
}
