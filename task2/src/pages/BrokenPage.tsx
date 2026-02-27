import type { JSX } from "react";

function BrokenPage(): JSX.Element {
  throw new Error("Simulated crash in lazy component");
}

export default BrokenPage;