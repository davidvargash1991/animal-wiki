import React from "react";
import "./loading.css";

export const Loading = () => {
  return (
    <div className="col-12 loading">
      <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
      <p>Loading . . .</p>
    </div>
  );
};
