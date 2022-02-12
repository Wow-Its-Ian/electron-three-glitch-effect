import React, { Suspense } from 'react';
import { Canvas, extend } from 'react-three-fiber';
import { OrbitControls, Effects } from '@react-three/drei';

import Lights from './Lights';

import Floor from './Floor';

import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import TVArray from './TVArray';

extend({ BloomPass, GlitchPass });

export default function Game() {
  return (
    <Canvas>
      <Effects>
        <bloomPass attachArray="passes" />
        <glitchPass attachArray="passes" />
      </Effects>
      <color attach="background" args={['black']} />
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
      <Suspense fallback={null}>
        <TVArray />
        <Floor />
      </Suspense>
      <Lights />
    </Canvas>
  );
}
