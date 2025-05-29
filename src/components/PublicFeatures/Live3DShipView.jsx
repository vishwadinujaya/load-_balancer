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
    // Enable alpha transparency in the engine
    const engine = new BABYLON.Engine(canvasRef.current, true, { preserveDrawingBuffer: true, stencil: true, alpha: true });
    engineRef.current = engine;

    const createScene = () => {
      console.log("Creating scene...");
      const scene = new BABYLON.Scene(engine);
      // Set scene clear color to black (or transparent)
      scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

      // Remove background plane and use CSS background image instead
      // const backgroundPlane = BABYLON.MeshBuilder.CreatePlane("backgroundPlane", { size: 1000 }, scene);
      // backgroundPlane.position = new BABYLON.Vector3(0, 0, -50);
      // backgroundPlane.isPickable = false;
      // backgroundPlane.isBlocker = true;

      // const backgroundMaterial = new BABYLON.StandardMaterial("backgroundMaterial", scene);
      // backgroundMaterial.diffuseTexture = new BABYLON.Texture("C:\\Users\\vishw\\load-balance-system\\src\\assets\\the-sea-3d-model-animated-rigged-blend.jpg", scene);
      // backgroundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      // backgroundMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
      // backgroundMaterial.backFaceCulling = false;

      // backgroundPlane.material = backgroundMaterial;

      const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 50, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvasRef.current, true);

      const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
      light.intensity = 1;

BABYLON.SceneLoader.ImportMesh("", "models/", "shipnew8.babylon", scene, function (meshes) {
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
        console.log("Rendering frame...");
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

  // Remove background image from section style
  const backgroundStyle = {
    position: 'relative',
    padding: '2rem',
    color: 'white',
    fontFamily: 'Segoe UI, sans-serif',
    height: '60vh',
    minHeight: '400px',
  };

  // New style for background image div behind canvas
  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/src/assets/the-sea-3d-model-animated-rigged-blend.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: 0,
    border: '2px solid red', // temporary border for debugging
  };

  return (
    <section id="live-3d-ship-view" className="live-3d-ship-view" style={backgroundStyle}>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, width: '600px' }}>
        <LiveStatsPreview />
      </div>
      <h2>Live 3D Ship View</h2>
      <p className="subtitle">Explore the real-time 3D model of the ship with interactive controls.</p>
      {/* Background image div behind canvas */}
      <div style={backgroundImageStyle}></div>
<canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.1)', border: '3px solid yellow', zIndex: 1 }}></canvas>
      {loadError && (
        <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
          Failed to load 3D model. Please check console for errors.
        </div>
      )}
    </section>
  );
};

export default Live3DShipView;
