import React from 'react';

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -3, 0]}>
      <planeBufferGeometry args={[100, 100, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default Floor;
