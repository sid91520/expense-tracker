import React from "react";
import "./chart.css";
import Chartbar from "./chartbar";

function Chart(props) {
  const datapontsvalue=props.datapoints.map(datapoint=>datapoint.value)
  const toalmaximum=Math.max(...datapontsvalue)
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <Chartbar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={toalmaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
