import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
//import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
//sore_throat
class Symptoms extends Component {
  state = {};
  weightDefault() {
    if (
      this.props &&
      this.props.symptom["weight"] &&
      this.props.symptom["weight"].length > 0
    ) {
      return this.props.symptom["weight"][this.props.value - 1];
    }
  }
  temperatureDefault() {
    if (
      this.props &&
      this.props.symptom.temperature &&
      this.props.symptom.temperature.length > 0
    ) {
      return this.props.symptom.temperature[this.props.value - 1];
    }
  }
  coughDefault() {
    if (
      this.props &&
      this.props.symptom.cough &&
      this.props.symptom.cough.length > 0
    ) {
      return this.props.symptom.cough[this.props.value - 1] === 1;
    }
  }
  breathDefault() {
    if (
      this.props &&
      this.props.symptom.shortness_of_breath &&
      this.props.symptom.shortness_of_breath.length > 0
    ) {
      return this.props.symptom.shortness_of_breath[this.props.value - 1] === 1;
    }
  }
  headacheDefault() {
    if (
      this.props &&
      this.props.symptom.headache &&
      this.props.symptom.headache.length > 0
    ) {
      return this.props.symptom.headache[this.props.value - 1] === 1;
    }
  }
  acheDefault() {
    if (
      this.props &&
      this.props.symptom.ache &&
      this.props.symptom.ache.length > 0
    ) {
      return this.props.symptom.ache[this.props.value - 1] === 1;
    }
  }
  soar_throatDefault() {
    if (
      this.props &&
      this.props.symptom.soar_throat &&
      this.props.symptom.soar_throat.length > 0
    ) {
      return this.props.symptom.soar_throat[this.props.value - 1] === 1;
    }
  }

  fatigueDefault() {
    if (
      this.props &&
      this.props.symptom.fatigue &&
      this.props.symptom.fatigue.length > 0
    ) {
      return this.props.symptom.fatigue[this.props.value - 1] === 1;
    }
  }
  diarrheaDefault() {
    if (
      this.props &&
      this.props.symptom.diarrhea &&
      this.props.symptom.diarrhea.length > 0
    ) {
      return this.props.symptom.diarrhea[this.props.value - 1] === 1;
    }
  }
  runny_noseDefault() {
    if (
      this.props &&
      this.props.symptom.runny_nose &&
      this.props.symptom.runny_nose.length > 0
    ) {
      return this.props.symptom.runny_nose[this.props.value - 1] === 1;
    }
  }
  sneezingDefault() {
    if (
      this.props &&
      this.props.symptom.sneezing &&
      this.props.symptom.sneezing.length > 0
    ) {
      return this.props.symptom.sneezing[this.props.value - 1] === 1;
    }
  }

  render() {
    console.log(this.props.value, this.props.symptom);
    //console.log(this.props.symptom["weight"]);
    return (
      <div>
        <br />
        <h5 style={{ marginLeft: "20px" }}>SYMPTOMS</h5>
        <form align="right" style={{ marginRight: "40px" }}>
          <TableContainer>
            {/* component={Paper}> */}
            <Table aria-label="simple table" height="25%" size="small">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <label htmlFor="inlineFormWeight">Weight</label>
                    <input
                      style={{ backgroundSize: "10px 10px" }}
                      type="number"
                      className="form-control"
                      id="Weight"
                      name="weight"
                      placeholder="Weight"
                      value={this.weightDefault() || ""}
                      onChange={this.props.handleChange}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="inlineFormTemp">Temperature</label>
                    <input
                      type="number"
                      className="form-control"
                      id="Temperature"
                      name="temperature"
                      placeholder="Temperature"
                      value={this.temperatureDefault() || ""}
                      onChange={this.props.handleChange}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="inlineFormCough">Dry Cough</label>
                    <br />
                    <Switch
                      id="Cough"
                      checked={this.coughDefault() || false}
                      onChange={() => this.props.handleChanges("cough")}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="inlineFormBreath">
                      Shortness of Breath
                    </label>
                    <br />
                    <Switch
                      checked={this.breathDefault() || false}
                      onChange={() =>
                        this.props.handleChanges("shortness_of_breath")
                      }
                      id="Breath"
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <label htmlFor="inlineFormHeadache">Headache</label>
                    <br />
                    <Switch
                      id="Headache"
                      checked={this.headacheDefault() || false}
                      onChange={() => this.props.handleChanges("headache")}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="inlineFormAche">Aches and pain</label>
                    <br />
                    <Switch
                      id="Ache"
                      checked={this.acheDefault() || false}
                      onChange={() => this.props.handleChanges("ache")}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="inlineFormThroat">Soar Throat</label>
                    <br />
                    <Switch
                      id="Throat"
                      checked={this.soar_throatDefault() || false}
                      onChange={() => this.props.handleChanges("soar_throat")}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="inlineFormFatigue">Fatigue</label>
                    <br />
                    <Switch
                      id="Fatigue"
                      checked={this.fatigueDefault() || false}
                      onChange={() => this.props.handleChanges("fatigue")}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <label htmlFor="inlineFormDiarrhea">Diarrhea</label>
                    <br />
                    <Switch
                      id="Diarrhea"
                      checked={this.diarrheaDefault() || false}
                      onChange={() => this.props.handleChanges("diarrhea")}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="inlineFormRunnyNose">Runny Nose</label>
                    <br />
                    <Switch
                      id="RunnyNose"
                      checked={this.runny_noseDefault() || false}
                      onChange={() => this.props.handleChanges("runny_nose")}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="inlineFormSneezing">Sneezing</label>
                    <br />
                    <Switch
                      id="Sneezing"
                      checked={this.sneezingDefault() || false}
                      onChange={() => this.props.handleChanges("sneezing")}
                    />
                  </TableCell>
                  <TableCell>
                    <button
                      type="button"
                      align="right"
                      className="btn btn-primary bg-dark btn-dark"
                      onClick={this.props.handleSubmit}
                    >
                      SUBMIT
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </form>
      </div>
    );
  }
}

export default Symptoms;
