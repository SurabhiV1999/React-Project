import React, { Component } from "react";
import Chart from "chart.js";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableRow from "@material-ui/core/TableRow";

class chartComponent extends Component {
  	componentDidUpdate() {
    	var i;
    	var labels = [];
    	for (i = 1; i <= this.props.temperature.length; i++) {
      		labels[i - 1] = "Day " + i;
    	}
    	const c1 = document.getElementById("tempChart").getContext("2d");
		new Chart(c1, {
			type: "line",
			data: {
				labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
				datasets: [{
					label: "Temperature",
					data: this.props.temperature,
					backgroundColor: "rgba(153, 102, 255, 0.6)",
				}]
			},
			options: {
				maintainAspectRatio: true,
				title: {
					display: true,
					text: "Temperature",
					fontSize: 25,
				},
				legend: {
					display: true,
					position: "top",
				},
				scales: {
					yAxes: [{
						ticks: {
							min: 97,
							max: 105,
						}
					}]
				}
			}
    	});
    	const c2 = document.getElementById("weightChart").getContext("2d");
    	new Chart(c2, {
      		type: "bar",
      		data: {
        		//Bring in data
        		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        		datasets: [{
            		label: "Weight",
					data: this.props.weight,
					backgroundColor: "rgba(244, 179, 80, 0.6)",
          		}]
      		},
			options: {
				title: {
					display: true,
					text: "Weight",
					fontSize: 25,
				},
				legend: {
					display: true,
					position: "top",
				},
				scales: {
					yAxes: [{
						ticks: {
							min: 10,
							max: 100,
						}
					}]
				}
			}
    	});
  	}

  	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-6">
						<canvas id="tempChart" />
					</div>
					<div className="col-6">
						<canvas id="weightChart" />
					</div>
				</div>
			</div>
		);
  	}
}

export default chartComponent;
