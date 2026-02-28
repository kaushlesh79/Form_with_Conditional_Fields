import "./styles.css";

import Form from "./form";

import CompanyForm from "./companyform";

import { useState } from "react";

export default function App() {
  const [showStudent, setShowStudent] = useState(null);

  return (
    <div className="App">
      <h1>Form With Conditional Fields </h1>
      <div className="checkboxfields">
        <div className="field1">
          <label>Student</label>
          <input
            type="checkbox"
            checked={showStudent === true}
            onChange={() => setShowStudent(showStudent === true ? null : true)}
          />
        </div>

        <div className="field1">
          <label>Company</label>
          <input
            type="checkbox"
            checked={showStudent === false}
            onChange={() =>
              setShowStudent(showStudent === false ? null : false)
            }
          />
        </div>
      </div>
      {showStudent === true && <Form />}
      {showStudent === false && <CompanyForm />}
    </div>
  );
}
