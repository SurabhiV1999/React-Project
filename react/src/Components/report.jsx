import React, { Component } from "react";

class Report extends Component {
  state = {
    COVID_19: {
      temperature: 10,
      cough: 10,
      shortness_of_breath: 10,
      headache: 6,
      ache: 6,
      soar_throat: 6,
      fatigue: 6,
      diarrhea: 3,
      runny_nose: 3,
      sneezing: 0,
    },
    sum_covid: 60,
    cold: {
      temperature: 3,
      cough: 6,
      shortness_of_breath: 0,
      headache: 3,
      ache: 10,
      soar_throat: 10,
      fatigue: 6,
      diarrhea: 0,
      runny_nose: 10,
      sneezing: 10,
    },
    sum_cold: 58,
    flu: {
      temperature: 10,
      cough: 10,
      shortness_of_breath: 0,
      headache: 10,
      ache: 10,
      soar_throat: 10,
      fatigue: 10,
      diarrhea: 6,
      runny_nose: 6,
      sneezing: 0,
    },
    sum_flu: 72,
    allergies: {
      temperature: 6,
      cough: 6,
      shortness_of_breath: 10,
      headache: 6,
      ache: 0,
      soar_throat: 0,
      fatigue: 6,
      diarrhea: 0,
      runny_nose: 10,
      sneezing: 10,
    },
    sum_allergies: 54,
  };

  calcScore = (a) => {
    const hasFever = [];
    this.props.symptom.temperature.map(
      (a) => (hasFever[hasFever.length] = a > 99.5)
    );

    var temp_total = 0;
    var cough_total = 0;
    var shortness_of_breath_total = 0;
    var headache_total = 0;
    var ache_total = 0;
    var soar_throat_total = 0;
    var fatigue_total = 0;
    var diarrhea_total = 0;
    var runny_nose_total = 0;
    var sneezing_total = 0;

    for (var i = 0; i < hasFever.length; i++) {
      temp_total += hasFever[i];
      cough_total += this.props.symptom.cough[i];
      shortness_of_breath_total += this.props.symptom.shortness_of_breath[i];
      headache_total += this.props.symptom.headache[i];
      ache_total += this.props.symptom.ache[i];
      soar_throat_total += this.props.symptom.soar_throat[i];
      fatigue_total += this.props.symptom.fatigue[i];
      diarrhea_total += this.props.symptom.diarrhea[i];
      runny_nose_total += this.props.symptom.runny_nose[i];
      sneezing_total += this.props.symptom.sneezing[i];
    }

    var COVID_score =
      ((this.state.COVID_19.temperature * temp_total +
        this.state.COVID_19.cough * cough_total +
        this.state.COVID_19.shortness_of_breath * shortness_of_breath_total +
        this.state.COVID_19.headache * headache_total +
        this.state.COVID_19.ache * ache_total +
        this.state.COVID_19.soar_throat * soar_throat_total +
        this.state.COVID_19.fatigue * fatigue_total +
        this.state.COVID_19.diarrhea * diarrhea_total +
        this.state.COVID_19.runny_nose * runny_nose_total +
        this.state.COVID_19.sneezing * sneezing_total) *
        100) /
      (this.props.inputLen * this.state.sum_covid);

    var cold_score =
      ((this.state.cold.temperature * temp_total +
        this.state.cold.cough * cough_total +
        this.state.cold.shortness_of_breath * shortness_of_breath_total +
        this.state.cold.headache * headache_total +
        this.state.cold.ache * ache_total +
        this.state.cold.soar_throat * soar_throat_total +
        this.state.cold.fatigue * fatigue_total +
        this.state.cold.diarrhea * diarrhea_total +
        this.state.cold.runny_nose * runny_nose_total +
        this.state.cold.sneezing * sneezing_total) *
        100) /
      (this.props.inputLen * this.state.sum_cold);

    var flu_score =
      ((this.state.flu.temperature * temp_total +
        this.state.flu.cough * cough_total +
        this.state.flu.shortness_of_breath * shortness_of_breath_total +
        this.state.flu.headache * headache_total +
        this.state.flu.ache * ache_total +
        this.state.flu.soar_throat * soar_throat_total +
        this.state.flu.fatigue * fatigue_total +
        this.state.flu.diarrhea * diarrhea_total +
        this.state.flu.runny_nose * runny_nose_total +
        this.state.flu.sneezing * sneezing_total) *
        100) /
      (this.props.inputLen * this.state.sum_flu);

    var allergies_score =
      ((this.state.allergies.temperature * temp_total +
        this.state.allergies.cough * cough_total +
        this.state.allergies.shortness_of_breath * shortness_of_breath_total +
        this.state.allergies.headache * headache_total +
        this.state.allergies.ache * ache_total +
        this.state.allergies.soar_throat * soar_throat_total +
        this.state.allergies.fatigue * fatigue_total +
        this.state.allergies.diarrhea * diarrhea_total +
        this.state.allergies.runny_nose * runny_nose_total +
        this.state.allergies.sneezing * sneezing_total) *
        100) /
      (this.props.inputLen * this.state.sum_allergies);
    var Score = [COVID_score, cold_score, flu_score, allergies_score];

    return Math.round(Score[a] || 0) + " %";
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <br />
        <h4>REPORT</h4>
        <br />
        <h5>The probability of you having</h5>
        <div className="form-row align-items-center">
          <div className="col-sm-3 my-1">
            <label>COVID-19 is:</label>
          </div>
          <div className="col-sm-3 my-1">
            <input
              type="text"
              className="form-control"
              value={this.calcScore(0)}
              readOnly={true}
            />
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="col-sm-3 my-1">
            <label>Common Cold is:</label>
          </div>
          <div className="col-sm-3 my-1">
            <input
              type="text"
              className="form-control"
              value={this.calcScore(1)}
              readOnly={true}
            />
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="col-sm-3 my-1">
            <label>FLU is:</label>
          </div>
          <div className="col-sm-3 my-1">
            <input
              type="text"
              className="form-control"
              value={this.calcScore(2)}
              readOnly={true}
            />
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="col-sm-3 my-1">
            <label>Allergies is:</label>
          </div>
          <div className="col-sm-3 my-1">
            <input
              type="text"
              className="form-control"
              value={this.calcScore(3)}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
