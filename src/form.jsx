import React, { useState } from "react";

import "./formstyle.css";

export default function Form() {
  const [user, setUser] = useState("");

  return (
    <div className="studentform">
      <div className="field1">
        <label>Name</label>
        <input />
      </div>

      <div className="field1">
        <label>Class</label>
        <input />
      </div>

      <div className="field1">
        <label>Roll No</label>
        <input />
      </div>

      <div className="field1">
        <label>School</label>
        <input />
      </div>
    </div>
  );
}
