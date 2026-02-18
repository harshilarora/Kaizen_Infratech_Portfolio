import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "924eb0675b649338";

function Notebook() {
  const container1Ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "container1") return new Inspector(container1Ref.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={container1Ref} />
    </>
  );
}

export default Notebook;