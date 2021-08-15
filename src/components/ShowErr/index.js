import React from "react";

const ShowErr = ({ err }) => (
  <div animate={{ opacity: 0.9 }} className="progress-backdrop" initial={{ opacity: 0 }}>
    <p style={{ margin: `auto` }}>Error: {err}</p>
  </div>
);

export default ShowErr;
