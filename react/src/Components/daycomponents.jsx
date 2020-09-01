import React, { Component } from "react";
import DayComp from "./daycomp";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

class DayComponents extends Component {
  state = {
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  };
  render() {
    console.log("day comps:", this.props.inputLen);
    return (
      <div style={{ marginTop: "20px" }}>
        <h5 style={{ marginLeft: "20px" }}>DAYS</h5>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                {this.state.value.map((a) => (
                  <TableCell>
                    <DayComp
                      key={a}
                      value={a}
                      handleDisplay={this.props.handleDisplay}
                      inputLen={this.props.inputLen}
                      val={this.props.val}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default DayComponents;
