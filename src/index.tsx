import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app/App";

const root = createRoot(document.getElementById("root") as Element);
root.render(<App />);
