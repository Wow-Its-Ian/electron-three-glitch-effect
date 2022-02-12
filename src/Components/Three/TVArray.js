import React from 'react';

import TV from './GLTF/TV';

function TVArray() {
  return (
    <>
      <TV
        groupRotation={[0, Math.PI, Math.PI / 16]}
        mesh1Position={[0, 0, -2.15]}
        mesh2Position={[0, 0, -1.1]}
        mesh2Rotation={[0, 0, 0]}
      />
      <TV
        groupRotation={[0, Math.PI, Math.PI / 16]}
        mesh1Position={[4, 0, -2.15]}
        mesh2Position={[4, 0, -1.1]}
        mesh2Rotation={[0, 0, 0]}
      />
      <TV
        groupRotation={[0, Math.PI, Math.PI / 16]}
        mesh1Position={[-4, 0, -2.15]}
        mesh2Position={[-4, 0, -1.1]}
        mesh2Rotation={[0, 0, 0]}
      />
      {/* SECOND ROW */}
      <TV
        groupRotation={[0, Math.PI, Math.PI / 16]}
        mesh1Position={[0, 2.3, -2.15]}
        mesh2Position={[0, 2.3, -1.1]}
        mesh2Rotation={[0, 0, 0]}
      />
      <TV
        groupRotation={[0, Math.PI, Math.PI / 16]}
        mesh1Position={[4, 2.3, -2.15]}
        mesh2Position={[4, 2.3, -1.1]}
        mesh2Rotation={[0, 0, 0]}
      />
      <TV
        groupRotation={[0, Math.PI, Math.PI / 16]}
        mesh1Position={[-4, 2.3, -2.15]}
        mesh2Position={[-4, 2.3, -1.1]}
        mesh2Rotation={[0, 0, 0]}
      />
    </>
  );
}

export default TVArray;
