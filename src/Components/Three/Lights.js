import React from 'react';

function Lights() {
  return (
    <>
      <fog attach="fog" args={['black', 1, 7]} />
      <directionalLight intensity={0.05} />
      <pointLight intensity={0.2} position={[50, 5, 20]} color="red" />
    </>
  );
}

export default Lights;
