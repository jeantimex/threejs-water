/**
 * ThreeJS Water - A Real-Time Water Simulation with Three.js
 * https://github.com/jeantimex/threejs-water
 *
 * Original WebGL Water Demo by Evan Wallace: http://madebyevan.com/webgl-water/
 * Three.js Port by Yong Su (jeantimex): https://github.com/jeantimex
 *
 * =============================================================================
 * PROJECT OVERVIEW
 * =============================================================================
 *
 * This project is a complete port of Evan Wallace's groundbreaking WebGL Water
 * demo to Three.js. The original demo (2011) showcased state-of-the-art real-time
 * water rendering techniques that were revolutionary for browser-based graphics.
 *
 * WHY THREE.JS?
 * - Better code organization with Three.js abstractions (Scene, Camera, Mesh)
 * - Easier integration with existing Three.js projects
 * - Access to Three.js ecosystem (loaders, geometries, controls)
 * - Modern TypeScript support for type safety
 * - Simplified shader management with vite-plugin-glsl
 *
 * =============================================================================
 * FEATURES ADDED BY JEANTIMEX
 * =============================================================================
 *
 * 1. MULTIPLE INTERACTIVE OBJECTS
 *    - Sphere: Classic sphere with analytical ray intersection
 *    - Cube: Box geometry with face-based normal calculation
 *    - Torus Knot: Complex Three.js geometry with compound sphere displacement
 *    - Duck: GLTF model demonstrating external asset support
 *
 * 2. CUSTOMIZABLE POOL SHAPES
 *    - Standard rectangular pool (original behavior)
 *    - Rounded box pool with configurable corner radius
 *    - Adjustable dimensions (width, height, length)
 *    - Seamless UV mapping around curved corners
 *
 * 3. PHYSICS SIMULATION
 *    - Gravity toggle for realistic falling
 *    - Buoyancy based on configurable density
 *    - Velocity-based water displacement
 *
 * 4. ENHANCED CONTROLS
 *    - lil-gui panel for real-time parameter adjustment
 *    - Object selection dropdown
 *    - Pool shape and dimension sliders
 *    - Physics enable/disable toggles
 *
 * 5. RESPONSIVE DESIGN
 *    - Mobile-friendly collapsible info panel
 *    - Touch support for water interaction
 *    - Adaptive canvas sizing
 *
 * =============================================================================
 * TECHNICAL IMPLEMENTATION
 * =============================================================================
 *
 * WAVE SIMULATION (Water.ts):
 * Uses the 2D wave equation: ∂²h/∂t² = c² * ∇²h
 * - Double-buffered (ping-pong) render targets for GPU simulation
 * - Discrete Laplacian computed via 4-neighbor stencil
 * - Velocity-based integration with damping for stability
 *
 * CAUSTICS (CausticsPass.ts, caustics.vert/frag):
 * Real-time caustic generation using differential area method:
 * - Project light rays through wavy water surface
 * - Compare projected areas before/after refraction
 * - Bright caustics where rays converge (area ratio increases)
 *
 * WATER SURFACE (waterAbove.frag, waterBelow.frag):
 * - Fresnel-based reflection/refraction blending (Schlick's approximation)
 * - Parallax displacement for accurate wave alignment
 * - Ray tracing against pool geometry and objects
 * - Sky cubemap reflections with sun spot highlight
 *
 * POOL RENDERING (cube.frag, roundedbox.frag):
 * - Triplanar texture mapping for seamless tile projection
 * - Proximity-based ambient occlusion from objects
 * - Caustic texture sampling with light direction projection
 *
 * OBJECT WATER DISPLACEMENT (sphere.frag, moveCube.frag):
 * - Volume-based displacement using smooth exponential falloff
 * - Super-Gaussian profiles to avoid sharp boundary artifacts
 * - Compound sphere approximation for complex shapes (Torus Knot)
 *
 * =============================================================================
 * FILE STRUCTURE
 * =============================================================================
 *
 * src/
 * ├── main.ts              - Application entry point (this file)
 * ├── Water.ts             - Wave simulation with ping-pong buffers
 * ├── Renderer.ts          - Multi-pass rendering orchestration
 * ├── app/
 * │   ├── WaterApp.ts      - Main application coordinator
 * │   ├── SimulationControls.ts - lil-gui control panel
 * │   ├── InteractionController.ts - Mouse/touch input handling
 * │   └── LoadSceneAssets.ts - Texture and cubemap loading
 * ├── camera/
 * │   └── CameraController.ts - Orbit camera with zoom
 * ├── objects/
 * │   ├── SimulationObject.ts - Object interface definition
 * │   ├── SphereObject.ts  - Sphere implementation
 * │   ├── CubeObject.ts    - Cube implementation
 * │   ├── TorusKnotObject.ts - Torus knot with compound displacement
 * │   ├── DuckObject.ts    - GLTF model implementation
 * │   ├── SimulationObjectRegistry.ts - Active object registration/selection
 * │   ├── SimulationObjectUtils.ts - Shared physics and bounds helpers
 * │   └── CreateSimulationObjects.ts - Object factory
 * ├── rendering/
 * │   ├── CausticsPass.ts  - Caustic texture generation
 * │   ├── PoolPass.ts      - Pool wall/floor rendering
 * │   ├── WaterSurfacePass.ts - Water surface rendering
 * │   ├── ObjectTexturePass.ts - Reflection/refraction textures
 * │   ├── WaterOpticsState.ts - Shared water optics uniforms
 * │   ├── SimulationObjectRendering.ts - Object render resource types
 * │   └── CreateRoundedBoxPoolGeometry.ts - Rounded pool mesh generation
 * ├── shaders/
 * │   ├── WaveSimulation.vert/frag - Wave equation solver
 * │   ├── WaterNormal.vert/frag - Surface normal computation
 * │   ├── WaterRipple.vert/frag - Interactive ripple injection
 * │   ├── Caustics.vert/frag - Caustic generation
 * │   ├── WaterAbove.vert/frag - Water surface (above view)
 * │   ├── WaterBelow.vert/frag - Water surface (below view)
 * │   ├── Cube.vert/frag    - Pool walls (rectangular)
 * │   ├── RoundedBox.vert/frag - Pool walls (rounded corners)
 * │   ├── RoundedBoxWater*.frag - Rounded-pool water optics
 * │   ├── Sphere*.vert/frag - Sphere displacement and rendering
 * │   ├── ObjectCubeRender.vert/frag - Cube object rendering
 * │   ├── TorusKnotRender.vert/frag - Torus knot rendering
 * │   ├── DuckRender.vert/frag - Duck model rendering
 * │   ├── BoxDisplacement.frag - Cube water displacement
 * │   └── ...              - Object-specific shaders
 * └── water/
 *     ├── WaterOptics.ts   - Optical property descriptors
 *     └── WaterDisplacement.ts - Displacement strategies
 *
 * =============================================================================
 * ACKNOWLEDGMENTS
 * =============================================================================
 *
 * - Evan Wallace for the original WebGL Water demo and caustics technique
 * - Three.js team for the excellent 3D library
 * - The WebGL/graphics community for shader techniques and inspiration
 *
 * =============================================================================
 */

import './styles.css'
import { WaterApp } from './app/WaterApp'

// Application entry point
// Instantiates the main WaterApp and starts the initialization lifecycle.
// The init() method loads assets, sets up the scene, and begins the render loop.
void new WaterApp().init()
