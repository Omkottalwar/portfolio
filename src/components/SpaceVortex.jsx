import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SpaceVortex({ activeTab, isDarkMode }) {
  const containerRef = useRef(null);
  const activeTabRef = useRef(activeTab);
  const isDarkModeRef = useRef(isDarkMode);

  // Sync activeTab to ref so the animation loop can access it without restarting the WebGL context
  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  // Sync isDarkMode to ref so the animation loop can access it without restarting the WebGL context
  useEffect(() => {
    isDarkModeRef.current = isDarkMode;
  }, [isDarkMode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfaf7f6, 0.002);

    // --- Camera Setup ---
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.set(0, 0, 300);

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xfaf7f6, 1);
    
    // Clean container to eliminate stale/frozen canvas duplicates from React Strict Mode mounts
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // --- Background Color Tracking for Dynamic Morphing ---
    const currentBgColor = new THREE.Color(0xfaf7f6);

    // --- Mouse Parallax Tracking ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xfaf7f6, 1.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x5c7b8f, 4.0, 600);
    pointLight.position.set(120, 100, 100);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xa36a75, 3.0, 500);
    pointLight2.position.set(-150, -80, 50);
    scene.add(pointLight2);

    // --- Materials ---
    const primaryGlowMat = new THREE.MeshPhysicalMaterial({
      color: 0x5c7b8f,
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.85
    });

    const darkMetallicMat = new THREE.MeshPhysicalMaterial({
      color: 0x864f59,
      roughness: 0.3,
      metalness: 0.9,
    });

    const secondaryWireframeMat = new THREE.MeshBasicMaterial({
      color: 0xa36a75,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    // --- Core Holographic Reactor Core (Torus Knot) ---
    const coreGeometry = new THREE.TorusKnotGeometry(22, 5.5, 240, 24);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xa36a75,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.NormalBlending
    });
    const reactorCore = new THREE.Mesh(coreGeometry, coreMaterial);
    reactorCore.position.set(0, 0, -20);
    scene.add(reactorCore);

    // --- Gyroscopic Outer Ring around Reactor Core ---
    const ringGeometry = new THREE.TorusGeometry(37, 1.3, 24, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x5c7b8f,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.NormalBlending
    });
    const coreOuterRing = new THREE.Mesh(ringGeometry, ringMaterial);
    reactorCore.add(coreOuterRing);

    // --- Floating Sci-Fi Cubes ---
    const cubes = [];
    const cubeData = [
      { size: 24, pos: [160, 60, -30], speed: 0.008, material: primaryGlowMat, floatType: 'float' },
      { size: 18, pos: [-150, -50, -60], speed: 0.006, material: primaryGlowMat, floatType: 'float-slow' },
      { size: 14, pos: [100, -100, -20], speed: 0.01, material: primaryGlowMat, floatType: 'float-reverse' },
      { size: 30, pos: [-90, 100, -80], speed: 0.004, material: darkMetallicMat, floatType: 'float' },
      { size: 12, pos: [50, 140, -40], speed: 0.012, material: primaryGlowMat, floatType: 'float-slow' },
      { size: 20, pos: [-180, 30, -30], speed: 0.007, material: darkMetallicMat, floatType: 'float-reverse' },
      { size: 10, pos: [180, -30, -70], speed: 0.015, material: primaryGlowMat, floatType: 'float' },
      { size: 16, pos: [-40, -140, -40], speed: 0.009, material: darkMetallicMat, floatType: 'float-slow' },
    ];

    cubeData.forEach((data) => {
      const geometry = new THREE.BoxGeometry(data.size, data.size, data.size);
      const mesh = new THREE.Mesh(geometry, data.material);
      mesh.position.set(...data.pos);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      cubes.push({ mesh, ...data, initialY: data.pos[1] });
    });

    // --- Futuristic Floating Wireframe Spheres (Perfect Spherical/Circular Geometries) ---
    const wireSphere1 = new THREE.Mesh(new THREE.SphereGeometry(45, 32, 32), secondaryWireframeMat);
    wireSphere1.position.set(160, -60, -100);
    scene.add(wireSphere1);

    const wireSphere2 = new THREE.Mesh(new THREE.SphereGeometry(35, 32, 32), secondaryWireframeMat);
    wireSphere2.position.set(-140, 90, -80);
    scene.add(wireSphere2);

    // --- Glowing Tron Holographic Grid Floor ---
    const gridHelper = new THREE.GridHelper(900, 36, 0xa36a75, 0xa36a75);
    gridHelper.position.y = -120;
    gridHelper.position.z = -100;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.08;
    gridHelper.material.blending = THREE.NormalBlending;
    scene.add(gridHelper);

    // --- Dynamic Space Dust Particles ---
    const dustCount = 350;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 800;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 500;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 400;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      color: 0x5c7b8f,
      size: 1.8,
      transparent: true,
      opacity: 0.3,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // --- Tab-based Camera, Lighting, and Material States ---
    const tabConfigs = {
      welcome: {
        camZ: 300,
        camXOffset: 0,
        camYOffset: 0,
        light1Color: 0xa36a75, // Dusty Mauve
        light2Color: 0x5c7b8f, // Muted Slate-Blue
        dustSpeed: 0.012,
        coreScale: 1.0,
        coreOpacity: 0.45,
        gridOpacity: 0.08,
        gridY: -120
      },
      about: {
        camZ: 240,
        camXOffset: -60,
        camYOffset: 20,
        light1Color: 0x864f59, // Rich Deep Burgundy
        light2Color: 0x5c7b8f, // Muted Slate-Blue
        dustSpeed: 0.015,
        coreScale: 1.25,
        coreOpacity: 0.5,
        gridOpacity: 0.12,
        gridY: -100
      },
      projects: {
        camZ: 210,
        camXOffset: 70,
        camYOffset: -30,
        light1Color: 0x425c6f, // Deep Ocean Slate
        light2Color: 0xa36a75, // Dusty Mauve
        dustSpeed: 0.02,
        coreScale: 1.45,
        coreOpacity: 0.6,
        gridOpacity: 0.18,
        gridY: -80
      },
      skills: {
        camZ: 190,
        camXOffset: -40,
        camYOffset: 50,
        light1Color: 0x5c7b8f, // Muted Slate-Blue
        light2Color: 0xbe8a94, // Softer Rose-Gold
        dustSpeed: 0.025,
        coreScale: 1.6,
        coreOpacity: 0.65,
        gridOpacity: 0.14,
        gridY: -90
      },
      contact: {
        camZ: 270,
        camXOffset: 30,
        camYOffset: -10,
        light1Color: 0x864f59, // Rich Deep Burgundy
        light2Color: 0x7796aa, // Soft Muted Steel Blue
        dustSpeed: 0.018,
        coreScale: 1.15,
        coreOpacity: 0.45,
        gridOpacity: 0.15,
        gridY: -110
      }
    };

    // --- Animation Loop ---
    let isMounted = true;
    let animationFrameId;
    let lastTime = performance.now();
    let time = 0;

    const animate = () => {
      if (!isMounted) return;
      animationFrameId = requestAnimationFrame(animate);

      try {
        const now = performance.now();
        const delta = Math.min((now - lastTime) * 0.001, 0.1);
        lastTime = now;
        time += delta;

        // Retrieve current configuration targets
        const currentTab = activeTabRef.current || 'welcome';
        const config = tabConfigs[currentTab] || tabConfigs.welcome;

        // Determine if viewport is mobile/tablet to dynamically adjust positioning offsets
        const isMobile = window.innerWidth <= 992;
        let camXOffset = config.camXOffset;
        let camYOffset = config.camYOffset;
        let camZ = config.camZ;
        let coreScale = config.coreScale;

        if (isMobile) {
          if (currentTab === 'welcome') {
            // Shift reactor core upwards so it sits behind the frame header, shrink it, and push camera back
            camXOffset = 0;
            camYOffset = 65;
            camZ = 350;
            coreScale = 0.75;
          } else if (currentTab === 'about') {
            camXOffset = 0;
            camYOffset = 80;
            camZ = 280;
            coreScale = 0.85;
          } else if (currentTab === 'projects') {
            camXOffset = 0;
            camYOffset = 90;
            camZ = 260;
            coreScale = 0.85;
          } else if (currentTab === 'skills') {
            camXOffset = 0;
            camYOffset = 85;
            camZ = 240;
            coreScale = 0.85;
          } else if (currentTab === 'contact') {
            camXOffset = 0;
            camYOffset = 80;
            camZ = 300;
            coreScale = 0.8;
          }
        }

        // Mouse easing (dampened)
        mouse.x += (mouse.targetX - mouse.x) * 0.06;
        mouse.y += (mouse.targetY - mouse.y) * 0.06;

        // Camera lerp: dynamic target matching + mouse parallax
        const targetCamX = (mouse.x * 45) + camXOffset;
        const targetCamY = (-mouse.y * 45) + camYOffset;
        
        if (camera) {
          camera.position.x += (targetCamX - camera.position.x) * 0.04;
          camera.position.y += (targetCamY - camera.position.y) * 0.04;
          camera.position.z += (camZ - camera.position.z) * 0.04;
          camera.lookAt(0, 0, 0);
        }

        // Dynamic Ambient & Background clearColor and fog color lerping
        const targetBgColor = new THREE.Color();
        if (isDarkModeRef.current) {
          targetBgColor.setHex(0x080b10); // Deep Dark Slate space background
        } else {
          // Pastel light mode shades based on active page!
          if (currentTab === 'about') targetBgColor.setHex(0xf5ebe6);       // Beige
          else if (currentTab === 'projects') targetBgColor.setHex(0xe8f0e8); // Pista Green
          else if (currentTab === 'skills') targetBgColor.setHex(0xe6f0fa);   // Light Blue
          else targetBgColor.setHex(0xfff0f2);                               // Welcome & Contact Pink
        }

        // Fluid linear interpolation (lerp) of the background colors and fog
        currentBgColor.lerp(targetBgColor, 0.04);
        renderer.setClearColor(currentBgColor, 1);
        if (scene.fog) {
          scene.fog.color.copy(currentBgColor);
        }
        if (ambientLight) {
          ambientLight.color.copy(currentBgColor);
          const targetAmbientIntensity = isDarkModeRef.current ? 0.6 : 1.3;
          ambientLight.intensity += (targetAmbientIntensity - ambientLight.intensity) * 0.04;
        }

        // Compute Point Lights & Materials colors and opacities
        let targetColor1, targetColor2;
        let targetCoreOpacity, targetGridOpacity;

        if (isDarkModeRef.current) {
          // Highly premium energetic cyber neon colors in dark mode!
          targetColor1 = new THREE.Color(0xf35588); // Cyber Violet
          targetColor2 = new THREE.Color(0x00f2fe); // Electric Cyan
          targetCoreOpacity = 0.65;
          targetGridOpacity = 0.18;
          if (darkMetallicMat) {
            darkMetallicMat.color.lerp(new THREE.Color(0xff7eb3), 0.04);
          }
        } else {
          // Curated sophisticated dusty desaturated colors in light mode!
          targetColor1 = new THREE.Color(config.light1Color);
          targetColor2 = new THREE.Color(config.light2Color);
          targetCoreOpacity = config.coreOpacity;
          targetGridOpacity = config.gridOpacity;
          if (darkMetallicMat) {
            darkMetallicMat.color.lerp(new THREE.Color(0x864f59), 0.04);
          }
        }

        if (pointLight) pointLight.color.lerp(targetColor1, 0.04);
        if (pointLight2) pointLight2.color.lerp(targetColor2, 0.04);

        // Reactor Core (Torus Knot) animations
        if (reactorCore) {
          reactorCore.rotation.x = time * 0.45;
          reactorCore.rotation.y = time * 0.65;
          reactorCore.rotation.z = time * 0.25;
        }

        // Gyroscopic outer ring counter-rotation
        if (coreOuterRing) {
          coreOuterRing.rotation.x = -time * 0.8;
          coreOuterRing.rotation.y = time * 0.5;
        }
        
        // Active Lissajous floating curves in 3D
        const coreDriftX = Math.sin(time * 0.4) * 22;
        const coreDriftY = Math.cos(time * 0.3) * 16;
        const coreDriftZ = Math.sin(time * 0.2) * 12;
        
        // Combined layout shifting + Lissajous drift + mouse-follow parallax
        const targetCoreX = (camXOffset * 0.35) + coreDriftX + (mouse.x * 25);
        const targetCoreY = (camYOffset * 0.35) + coreDriftY + (mouse.y * 15);
        const targetCoreZ = -20 + coreDriftZ;
        
        if (reactorCore) {
          reactorCore.position.x += (targetCoreX - reactorCore.position.x) * 0.05;
          reactorCore.position.y += (targetCoreY - reactorCore.position.y) * 0.05;
          reactorCore.position.z += (targetCoreZ - reactorCore.position.z) * 0.05;

          // Beating reactor core pulsing scale
          const corePulse = Math.sin(time * 2.8) * 0.08;
          const targetScale = coreScale + corePulse;
          reactorCore.scale.x += (targetScale - reactorCore.scale.x) * 0.05;
          reactorCore.scale.y += (targetScale - reactorCore.scale.y) * 0.05;
          reactorCore.scale.z += (targetScale - reactorCore.scale.z) * 0.05;
        }

        // Reactor core color & opacity lerp
        if (coreMaterial) {
          coreMaterial.color.lerp(targetColor1, 0.04);
          coreMaterial.opacity += (targetCoreOpacity - coreMaterial.opacity) * 0.04;
        }

        // Cube animations
        if (cubes && cubes.length > 0) {
          cubes.forEach((cube) => {
            if (cube && cube.mesh) {
              cube.mesh.rotation.x += cube.speed;
              cube.mesh.rotation.y += cube.speed * 0.8;

              // Floating motion on multiple axes
              const floatOffset = cube.floatType === 'float' ? Math.sin(time * 0.7) * 14 :
                                 cube.floatType === 'float-slow' ? Math.sin(time * 0.4) * 18 :
                                 Math.cos(time * 0.5) * 10;
              cube.mesh.position.y = cube.initialY + floatOffset;

              // Continuous horizontal swaying
              const swayOffset = Math.sin(time * cube.speed * 8) * 10;
              const targetX = cube.pos[0] + swayOffset + (mouse.x * 10);
              cube.mesh.position.x += (targetX - cube.mesh.position.x) * 0.02;

              // Smoothly lerp material colors
              if (cube.mesh.material === primaryGlowMat) {
                primaryGlowMat.color.lerp(targetColor1, 0.01);
              }
            }
          });
        }

        // Orbiting planetary wireframe spheres
        if (wireSphere1 && reactorCore) {
          const orbit1Speed = time * 0.12;
          const orbit1X = reactorCore.position.x + Math.cos(orbit1Speed) * 170;
          const orbit1Z = reactorCore.position.z + Math.sin(orbit1Speed) * 130;
          const orbit1Y = reactorCore.position.y + Math.sin(orbit1Speed * 0.5) * 45;
          wireSphere1.position.set(orbit1X, orbit1Y, orbit1Z);
          wireSphere1.rotation.x = time * 0.1;
          wireSphere1.rotation.y = time * 0.15;
        }
        if (secondaryWireframeMat) {
          secondaryWireframeMat.color.lerp(targetColor2, 0.04);
        }

        if (wireSphere2 && reactorCore) {
          const orbit2Speed = -time * 0.16;
          const orbit2X = reactorCore.position.x + Math.cos(orbit2Speed) * 150;
          const orbit2Z = reactorCore.position.z + Math.sin(orbit2Speed) * 110;
          const orbit2Y = reactorCore.position.y + Math.cos(orbit2Speed * 0.5) * 35;
          wireSphere2.position.set(orbit2X, orbit2Y, orbit2Z);
          wireSphere2.rotation.x = -time * 0.08;
          wireSphere2.rotation.y = time * 0.12;
        }

        // Dust speeds & colors
        if (dust && dustMaterial) {
          dust.rotation.y = time * (config.dustSpeed * 1.5);
          dustMaterial.color.lerp(targetColor1, 0.04);
        }

        // Grid floor dynamics (continuous wobbling + shift)
        if (gridHelper && gridHelper.material) {
          gridHelper.position.y += (config.gridY - gridHelper.position.y) * 0.04;
          gridHelper.material.opacity += (targetGridOpacity - gridHelper.material.opacity) * 0.04;
          gridHelper.material.color.lerp(targetColor1, 0.04);
          
          // Continuous grid floating wobble even when mouse is still
          gridHelper.rotation.z = (mouse.x * 0.04) + Math.sin(time * 0.25) * 0.02;
          gridHelper.rotation.x = (mouse.y * 0.03) + Math.cos(time * 0.2) * 0.015;
        }

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      } catch (e) {
        console.error("Three.js render loop animation error:", e);
      }
    };

    animate();

    // Responsive Resizing
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
