import React, { useEffect, useRef, useState } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import LiveStatsPreview from './LiveStatsPreview';

const Live3DShipView = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const sceneRef = useRef(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    console.log("Initializing Babylon.js engine...");
    const engine = new BABYLON.Engine(canvasRef.current, true);
    engineRef.current = engine;

    const createScene = () => {
      console.log("Creating scene...");
      const scene = new BABYLON.Scene(engine);

      const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 50, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvasRef.current, true);

      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
      light.intensity = 1;

      BABYLON.SceneLoader.ImportMesh("", "models/", "shipnew3.babylon", scene, function (meshes) {
        console.log("Model loaded successfully:", meshes);
        meshes.forEach(mesh => {
          mesh.isPickable = true;
        });
        setLoadError(false);
      }, null, function (scene, message, exception) {
        console.error("Error loading model:", message, exception);
        setLoadError(true);
      });

      return scene;
    };

    const scene = createScene();
    sceneRef.current = scene;

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    return () => {
      console.log("Disposing scene and engine...");
      scene.dispose();
      engine.dispose();
      window.removeEventListener("resize", () => engine.resize());
    };
  }, []);

  const backgroundStyle = {
    position: 'relative',
    padding: '2rem',
    color: 'white',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.7), rgba(71, 85, 105, 0.7)), url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <section id="live-3d-ship-view" className="live-3d-ship-view" style={backgroundStyle}>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, width: '600px' }}>
        <LiveStatsPreview />
      </div>
      <h2>Live 3D Ship View</h2>
      <p className="subtitle">Explore the real-time 3D model of the ship with interactive controls.</p>
      <canvas ref={canvasRef} style={{ width: '100%', height: '60vh', minHeight: '400px', backgroundColor: '#222' }}></canvas>
      {loadError && (
        <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
          Failed to load 3D model. Please check console for errors.
        </div>
      )}
    </section>
  );
};

export default Live3DShipView;
