import React from "react";
import ChartsBar from "./ChartsBar";
import "./Charts.scss";

const Charts = (props) => {
  const dataPointsValues = props.dataPoints.map(
    (dataPoints) => dataPoints.value
  );
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => {
        return (
          <ChartsBar
            key={dataPoints.id}
            value={dataPoints.value}
            maxValue={totalMaximum}
            label={dataPoints.label}
          />
        );
      })}
    </div>
  );
};
export default Charts;
