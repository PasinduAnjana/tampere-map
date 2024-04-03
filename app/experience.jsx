import { useLayoutEffect } from "react";
import React, { useState, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { City } from "./city";
import {
  Box,
  Environment,
  Fisheye,
  OrbitControls,
  ScrollControls,
  Svg,
  Text,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import { NodeToyMaterial, NodeToyTick } from "@nodetoy/react-nodetoy";
import { data } from "./shaderData";
import gsap from "gsap";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
// import logo from "@/public/next.svg";
const Experience = () => {
  return (
    // <mesh>
    //   <boxGeometry />
    //   <meshBasicMaterial color="red" />
    // </mesh>
    <City />
  );
};

export default Experience;
