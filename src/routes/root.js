import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./root.css";

function Root() {
  const [hasError, setHasError] = useState(false);

  const triggerError = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error("An error occurred somewhere in the React tree.");
  }

  return (
    <div className="root-container">
      <h2 className="root-heading"> Counter App</h2>
      <p className="root-paragraph">
        Navigate to the{" "}
        <Link to="/counter" className="link-button">
          Counter App
        </Link>
      </p>
      <div>
        <h3 className="root-subheading">Test Error Boundary</h3>
        <button onClick={triggerError} className="root-button">
          Trigger an Error
        </button>
      </div>
    </div>
  );
}

export default Root;
