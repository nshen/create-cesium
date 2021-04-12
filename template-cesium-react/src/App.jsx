import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Viewer } from "cesium";

function App() {
  const divRef = useRef(null);

  useEffect(() => {
    const map = new Viewer(divRef.current);
    return () => map.destroy();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Cesium!</p>
        <div className="cesium" ref={divRef} />
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://cesium.com/docs/cesiumjs-ref-doc/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cesium Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
