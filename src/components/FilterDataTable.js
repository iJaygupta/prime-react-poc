import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
// import { CarService } from "../service/CarService";

export default class DataTableFilterDemo extends Component {
  constructor() {
    super();
    this.state = {
      brand: null,
      colors: null,
      sales: [
        {
          brand: "Audi",
          color: "White",
          vin: "Data1",
          year: "Year1"
        },
        {
          brand: "BMW",
          color: "Green",
          vin: "Data2",
          year: "Year2"
        },
        {
          brand: "Fiat",
          color: "Silver",
          vin: "Data12",
          year: "Year21"
        },
        {
          brand: "Honda",
          color: "Black",
          vin: "Data111",
          year: "Year33"
        },
        {
          brand: "Song",
          color: "Red",
          vin: "Data4",
          year: "Year44"
        },
        {
          brand: "LG",
          color: "Maroon",
          vin: "Data7",
          year: "Year"
        },
        {
          brand: "Honda",
          color: "Brown",
          vin: "DataNo",
          year: "YearEmpty"
        },
        {
          brand: "Fiat",
          color: "Orange",
          vin: "adsj",
          year: 2019
        },
        {
          brand: "BMW",
          color: "Blue",
          vin: "kg1",
          year: 1999
        },
        {
          brand: "Audi",
          color: "White",
          vin: "khad",
          year: 1824
        }
      ]
    };
    // this.carservice = new CarService();
    this.onBrandChange = this.onBrandChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  componentDidMount() {
    // this.carservice.getCarsLarge().then(data => this.setState({ cars: data }));
  }

  onBrandChange(event) {
    this.dt.filter(event.value, "brand", "equals");
    this.setState({ brand: event.value });
  }

  onColorChange(event) {
    this.dt.filter(event.value, "color", "in");
    this.setState({ colors: event.value });
  }

  render() {
    var header = (
      <div style={{ textAlign: "left" }}>
        <i className="pi pi-search" style={{ margin: "4px 4px 0 0" }} />
        <InputText
          type="search"
          onInput={e => this.setState({ globalFilter: e.target.value })}
          placeholder="Global Search"
          size="50"
        />
      </div>
    );

    let brands = [
      { label: "All Brands", value: null },
      { label: "Audi", value: "Audi" },
      { label: "BMW", value: "BMW" },
      { label: "Fiat", value: "Fiat" },
      { label: "Honda", value: "Honda" },
      { label: "Jaguar", value: "Jaguar" },
      { label: "Mercedes", value: "Mercedes" },
      { label: "Renault", value: "Renault" },
      { label: "VW", value: "VW" },
      { label: "Volvo", value: "Volvo" }
    ];

    let brandFilter = (
      <Dropdown
        style={{ width: "100%" }}
        value={this.state.brand}
        options={brands}
        onChange={this.onBrandChange}
      />
    );

    let colors = [
      { label: "White", value: "White" },
      { label: "Green", value: "Green" },
      { label: "Silver", value: "Silver" },
      { label: "Black", value: "Black" },
      { label: "Red", value: "Red" },
      { label: "Maroon", value: "Maroon" },
      { label: "Brown", value: "Brown" },
      { label: "Orange", value: "Orange" },
      { label: "Blue", value: "Blue" }
    ];

    let colorFilter = (
      <MultiSelect
        style={{ width: "100%" }}
        value={this.state.colors}
        options={colors}
        onChange={this.onColorChange}
      />
    );

    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>DataTable - Filter</h1>
          </div>
        </div>

        <div className="content-section implementation">
          <DataTable
            ref={el => (this.dt = el)}
            value={this.state.sales}
            paginator={true}
            rows={10}
            header={header}
            globalFilter={this.state.globalFilter}
            emptyMessage="No records found"
          >
            <Column field="vin" header="Vin" filter={true} />
            <Column field="year" header="Year" filter={true} />
            <Column
              field="brand"
              header="Brand"
              filter={true}
              filterElement={brandFilter}
            />
            <Column
              field="color"
              header="Color"
              filter={true}
              filterElement={colorFilter}
            />
          </DataTable>
        </div>
      </div>
    );
  }
}
