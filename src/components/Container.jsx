import React from "react";

function Container({ children, ...props }) {
  return <div className="max-w-full mt-2 max-xl:mx-3" {...props}>{children}</div>;
}

export default Container;