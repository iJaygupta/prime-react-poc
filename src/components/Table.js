import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      brand: null,
      colors: null,
      cars: [
        {
          brand: "Audi",
          vin: "Jay",
          year: "1995",
          color: "Brown"
        },
        {
          brand: "BMW",
          vin: "Ashish",
          year: "1996",
          color: "White"
        },
        {
          brand: "Fiat",
          vin: "Deepansh",
          year: "1997",
          color: "Black"
        },
        {
          brand: "Honda",
          vin: "Dikshit",
          year: "1995",
          color: "Green"
        }
      ],
      cols: [
        { field: "vin", header: "Vin" },
        { field: "year", header: "Year" },
        {
          field: "brand",
          header: "Brand",
          sortable: true,
          filter: true
        },
        { field: "color", header: "Color", sortable: true, filter: true }
      ],
      columns: [
        { field: "vin", header: "Vin" },
        { field: "year", header: "Year" },
        {
          field: "brand",
          header: "Brand",
          sortable: true,
          filter: true
        },
        { field: "color", header: "Color", sortable: true, filter: true }
      ]
    };
    let columns = [
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      {
        field: "brand",
        header: "Brand",
        sortable: true,
        filter: true
      },
      { field: "color", header: "Color", sortable: true, filter: true }
    ];
    console.log("in constructor", this.state.cars);
    // this.state = {
    //   cols: columns
    // };

    this.colOptions = [];
    for (let col of columns) {
      this.colOptions.push({ label: col.header, value: col });
    }

    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.onCarSelect = this.onCarSelect.bind(this);
    this.addNew = this.addNew.bind(this);
    this.onBrandChange = this.onBrandChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onColumnToggle = this.onColumnToggle.bind(this);
  }

  componentDidMount() {
    console.log(this.state.cars);
    // this.setState({ cars: this.state.cars });
  }

  componentDidUpdate() {
    console.log("from Update", this.state.cars);
    // this.setState({ cars: this.state.cars });
  }

  onBrandChange(event) {
    this.dt.filter(event.value, "brand", "equals");
    this.setState({ brand: event.value });
  }

  onColorChange(event) {
    this.dt.filter(event.value, "color", "in");
    this.setState({ colors: event.value });
  }

  save() {
    let cars = [...this.state.cars];
    if (this.newCar) cars.push(this.state.car);
    else cars[this.findSelectedCarIndex()] = this.state.car;

    this.setState({
      cars: cars,
      selectedCar: null,
      car: null,
      displayDialog: false
    });
  }

  delete() {
    let index = this.findSelectedCarIndex();
    this.setState({
      cars: this.state.cars.filter((val, i) => i !== index),
      selectedCar: null,
      car: null,
      displayDialog: false
    });
  }

  findSelectedCarIndex() {
    return this.state.cars.indexOf(this.state.selectedCar);
  }

  updateProperty(property, value) {
    let car = this.state.car;
    car[property] = value;
    this.setState({ car: car });
  }

  onCarSelect(e) {
    this.newCar = false;
    this.setState({
      displayDialog: true,
      car: Object.assign({}, e.data)
    });
  }

  addNew() {
    this.newCar = true;
    this.setState({
      car: { vin: "", year: "", brand: "", color: "" },
      displayDialog: true
    });
  }

  onColumnToggle(event) {
    this.setState({ cols: event.value });
  }

  render() {
    let header = (
      <div className="p-clearfix" style={{ lineHeight: "1.87em" }}>
        CRUD for Cars{" "}
        <i className="pi pi-search" style={{ margin: "4px 4px 0 0" }} />
        <InputText
          type="search"
          onInput={e => this.setState({ globalFilter: e.target.value })}
          placeholder="Global Search"
          size="50"
        />
        <div style={{ textAlign: "left" }}>
          <MultiSelect
            value={this.state.cols}
            options={this.colOptions}
            onChange={this.onColumnToggle}
            style={{ width: "250px" }}
          />
        </div>
      </div>
    );

    let footer = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <Button
          style={{ float: "left" }}
          label="Add"
          icon="pi pi-plus"
          onClick={this.addNew}
        />
      </div>
    );

    let dialogFooter = (
      <div className="ui-dialog-buttonpane p-clearfix">
        <Button label="Delete" icon="pi pi-times" onClick={this.delete} />
        <Button label="Save" icon="pi pi-check" onClick={this.save} />
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

    let columns = this.state.cols.map((col, i) => {
      console.log(col);
      if (col.filter && col.header === "Brand") {
        return (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            filter={col.filter}
            filterElement={brandFilter}
          />
        );
      }
      if (col.filter && col.header === "Color") {
        return (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            filter={col.filter}
            filterElement={colorFilter}
          />
        );
      }
      return (
        <Column
          key={col.field}
          field={col.field}
          header={col.header}
          filter={true}
        />
      );
    });

    let paginatorLeft = <Button icon="pi pi-refresh" />;
    let paginatorRight = <Button icon="pi pi-cloud-upload" />;
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>DataTable</h1>
            <p>
              This samples demonstrates a CRUD implementation using various
              PrimeReact components.
            </p>
          </div>
        </div>

        <div className="content-section implementation">
          <DataTable
            paginator={true}
            paginatorLeft={paginatorLeft}
            paginatorRight={paginatorRight}
            rowsPerPageOptions={[5, 10, 20]}
            ref={el => (this.dt = el)}
            value={this.state.cars}
            paginator={true}
            rows={15}
            header={header}
            footer={footer}
            globalFilter={this.state.globalFilter}
            selectionMode="single"
            selection={this.state.selectedCar}
            onSelectionChange={e => this.setState({ selectedCar: e.value })}
            onRowSelect={this.onCarSelect}
          >
            {/* <Column field="vin" header="Vin" sortable={true} filter={true} />
            <Column field="year" header="Year" sortable={true} filter={true} />
            <Column
              field="brand"
              header="Brand"
              sortable={true}
              filter={true}
              filterElement={brandFilter}
            />
            <Column
              field="color"
              header="Color"
              sortable={true}
              filter={true}
              filterElement={colorFilter}
            /> */}
            {columns}
          </DataTable>

          <Dialog
            visible={this.state.displayDialog}
            width="300px"
            header="Car Details"
            modal={true}
            footer={dialogFooter}
            onHide={() => this.setState({ displayDialog: false })}
          >
            {this.state.car && (
              <div className="p-grid p-fluid">
                <div className="p-col-4" style={{ padding: ".75em" }}>
                  <label htmlFor="vin">Vin</label>
                </div>
                <div className="p-col-8" style={{ padding: ".5em" }}>
                  <InputText
                    id="vin"
                    onChange={e => {
                      this.updateProperty("vin", e.target.value);
                    }}
                    value={this.state.car.vin}
                  />
                </div>

                <div className="p-col-4" style={{ padding: ".75em" }}>
                  <label htmlFor="year">Year</label>
                </div>
                <div className="p-col-8" style={{ padding: ".5em" }}>
                  <InputText
                    id="year"
                    onChange={e => {
                      this.updateProperty("year", e.target.value);
                    }}
                    value={this.state.car.year}
                  />
                </div>

                <div className="p-col-4" style={{ padding: ".75em" }}>
                  <label htmlFor="brand">Brand</label>
                </div>
                <div className="p-col-8" style={{ padding: ".5em" }}>
                  <InputText
                    id="brand"
                    onChange={e => {
                      this.updateProperty("brand", e.target.value);
                    }}
                    value={this.state.car.brand}
                  />
                </div>

                <div className="p-col-4" style={{ padding: ".75em" }}>
                  <label htmlFor="color">Color</label>
                </div>
                <div className="p-col-8" style={{ padding: ".5em" }}>
                  <InputText
                    id="color"
                    onChange={e => {
                      this.updateProperty("color", e.target.value);
                    }}
                    value={this.state.car.color}
                  />
                </div>
              </div>
            )}
          </Dialog>
        </div>
      </div>
    );
  }
}
