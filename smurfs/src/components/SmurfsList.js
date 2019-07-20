import React from "react";
import Smurf from "./Smurf";

const SmurfsList = props => {
  return (
    <div>
      {props.smurfs.map((smurf, i) => {
        return (
          <div key={i}>
            <Smurf smurf={smurf} />
          </div>
        );
      })}
    </div>
  );
};

export default SmurfsList;
