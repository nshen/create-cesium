/**
 * You can also import Cesium Object like this
 *
 * import * as Cesium from 'cesium';
 * const viewer = new Cesium.Viewer('cesiumContainer');
 */
import { Viewer } from "cesium";
import React, { useEffect, useRef } from "react";
import "./App.css";
import logo from "./logo.svg";

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
          {" | "}
          <a
            className="App-link"
            href="https://github.com/nshen/create-cesium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create-cesium
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
