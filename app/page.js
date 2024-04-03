"use client";
import {
  Box,
  Environment,
  Fisheye,
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";

import * as THREE from "three";
// import { NodeToyMaterial, NodeToyTick } from "@nodetoy/react-nodetoy";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";
import React, { useState, useEffect, useRef } from "react";
import Experience from "./experience";

export default function Home() {
  return (
    <main className=" h-screen w-full">
      <Canvas>
        <OrbitControls />
        <fog
          attach="fog"
          color="#ffffff"
          near={10}
          far={1000}
          intensity={0.001}
        />
        <color attach="background" args={["#ffffff"]} />
        <ambientLight />
        {/* <OrbitControls /> */}
        <Environment preset="sunset" />
        {/* <ScrollControls pages={1}> */}
        <Experience />
        {/* </ScrollControls> */}

        {/* <EffectComposer multisampling={0} disableNormalPass={true}>
          <Bloom
            mipmapBlur
            levels={1}
            intensity={0.1}
            luminanceThreshold={1}
            luminanceSmoothing={1}
          />
          <Noise opacity={0.07} />
          <ChromaticAberration radialModulation={true} modulationOffset={-1} />
          <DepthOfField focusDistance={1.2} focalLength={3} bokehScale={30} />
          <Vignette offset={0.5} darkness={0.5} />
        </EffectComposer> */}
      </Canvas>
    </main>
  );
}
