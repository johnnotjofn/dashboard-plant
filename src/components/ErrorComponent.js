import React from "react";

function ErrorComponent({ error }) {
   return (
      <div className="text-white bg-danger border border-red p-3">{error.message}</div>
   )
}

export default ErrorComponent