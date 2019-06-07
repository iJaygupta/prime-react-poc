import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";

export default class DataTableColTogglerDemo extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        {
          vin: "Apple",
          year: "51%",
          brand: "40%",
          color: "$54,406.00"
        },
        {
          vin: "Apple",
          year: "51%",
          brand: "40%",
          color: "$54,406.00"
        }
      ],
      cols: [
        { field: "vin", header: "Vin" },
        { field: "year", header: "Year" },
        { field: "brand", header: "Brand" },
        { field: "color", header: "Color" }
      ]
    };
    let columns = [
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" }
    ];

    // this.state = {
    //   cols: columns
    // };

    this.colOptions = [];
    for (let col of columns) {
      this.colOptions.push({ label: col.header, value: col });
    }

    this.onColumnToggle = this.onColumnToggle.bind(this);
  }

  componentDidMount() {
    // this.setState({ cars: this.state.cars });
  }

  onColumnToggle(event) {
    this.setState({ cols: event.value });
  }

  export() {
    this.dt.exportCSV();
  }

  render() {
    console.log(this.states);
    let header = (
      <div style={{ textAlign: "left" }}>
        <MultiSelect
          value={this.state.cols}
          options={this.colOptions}
          onChange={this.onColumnToggle}
          style={{ width: "250px" }}
        />
      </div>
    );

    let columns = this.state.cols.map((col, i) => {
      return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
      <div>
        <div className="content-section">
          <div className="feature-intro">
            <h1>DataTable - Column Toggler</h1>
            <p>
              MultiSelect component can be used to implement column toggler
              functionality.
            </p>
          </div>
        </div>

        <div className="content-section implementation">
          <DataTable value={this.state.cars} header={header}>
            {columns}
          </DataTable>
        </div>
      </div>
    );
  }
}
