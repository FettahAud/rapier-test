import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Leva />
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 75,
        near: 0.001,
        far: 100,
      }}
    >
      <App />
    </Canvas>
  </>
);
