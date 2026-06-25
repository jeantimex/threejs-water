# ThreeJS Water

A real-time water simulation with Three.js, featuring raytraced reflections, refractions, caustics, and interactive objects.

This project is a complete port of [Evan Wallace's WebGL Water](http://madebyevan.com/webgl-water/) demo to Three.js, with significant enhancements including support for Three.js geometries, customizable pool shapes, and GLTF model loading.

https://github.com/user-attachments/assets/254421b7-46d9-4c5f-816a-c56abbf91bd3

## Live Demo

[https://jeantimex.github.io/threejs-water/](https://jeantimex.github.io/threejs-water/)

## Credits

- Original WebGL Water by [Evan Wallace](http://madebyevan.com/)
- Three.js port by [Yong Su (jeantimex)](https://github.com/jeantimex)

## Key Features

- **Three.js Geometry Support** - Use any Three.js geometry (`SphereGeometry`, `BoxGeometry`, `TorusKnotGeometry`, etc.) to create interactive objects with water displacement, caustic shadows, and raytraced reflections/refractions.

- **GLTF Model Support** - Load external 3D models with custom shader materials integrated into the water simulation.

- **Customizable Pool Shapes** - Rectangular and rounded box pools with configurable dimensions.

- **Physics Simulation** - Gravity, buoyancy, and density-based floating.

- **Real-time Caustics** - Dynamic caustic patterns using the differential area method.

- **Raytraced Water Optics** - Fresnel-based reflection/refraction blending.

## Three.js Geometry Support: Torus Knot Example

The `TorusKnotObject` demonstrates how to integrate any Three.js geometry into the water simulation.

**Geometry Creation** - Uses `THREE.TorusKnotGeometry` directly:
```typescript
const geometry = new THREE.TorusKnotGeometry(0.17, 0.045, 64, 8)
```

**Water Displacement** - Complex shapes use `CompoundSphereWaterDisplacement`, which approximates the geometry with multiple overlapping spheres. The torus knot samples 24 points along its parametric curve, placing displacement spheres at each point.

**Ray Intersection** - For reflections/refractions, the water shaders use a bounding sphere approximation rather than exact torus knot intersection (which would be expensive). The `optics` descriptor specifies `kind: 'mesh'` with a `boundingRadius`.

**Hit Testing** - Mouse interaction uses Three.js's built-in `Raycaster` against the actual mesh geometry for accurate picking.

**Extending** - To add new geometries, implement `SimulationObject` interface, choose a displacement strategy, define an optics descriptor, create render shaders, and register in `CreateSimulationObjects.ts`.

## Customizable Pool Shapes: Rounded Box Example

The rounded box pool extends the original rectangular pool with configurable corner radius.

**Geometry** - Uses a custom `RoundedBoxGeometry` with adjustable width, depth, length, and corner radius.

**Shaders** - The rounded pool requires its own shader set:
- `RoundedBox.vert/frag` - Pool wall rendering with triplanar UV mapping around curves
- `RoundedBoxCaustics.vert/frag` - Caustic projection onto rounded surfaces
- `RoundedBoxWaterAbove/Below.frag` - Ray-pool intersection for reflections/refractions

**SDF-based Intersection** - The water shaders use a Signed Distance Function (SDF) to find ray intersections with the rounded box, enabling accurate reflections off curved corners.

**Extending** - To add new pool shapes, create the corresponding shader set (walls, caustics, water surface), implement ray-pool intersection in GLSL, and update `Renderer.ts` to switch between pool passes.

## Technical Concepts

**Wave Simulation** - 2D wave equation solved on GPU using discrete Laplacian with ping-pong buffers.

**Caustics** - Differential area method: project light rays through water, brightness = originalArea / projectedArea.

**Fresnel Effect** - Schlick's approximation for reflection/refraction blending based on view angle.

**Ray Intersection** - Each object type needs GLSL intersection code (quadratic formula for spheres, slab method for boxes).

## Common Pitfalls

- **Coordinate Systems** - Water mesh is XY, rendered as XZ. Use `.xzy` swizzle.
- **Shader Uniforms** - All shaders receiving object uniforms need matching declarations.
- **Displacement Scale** - Too strong causes instability. Tune `displacementScale`.
- **Frustum Culling** - Set `mesh.frustumCulled = false` for off-screen render targets.

## License

MIT License - See [LICENSE](LICENSE) for details.

Original work Copyright (c) 2011 Evan Wallace
Modified work Copyright (c) 2026 Yong Su
