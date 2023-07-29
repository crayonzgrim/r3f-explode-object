/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/earth.glb -o src/components/Earth.jsx -r public -k 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useExplode } from "../hooks/useExplode";

export function Earth(props) {
  const { nodes, materials } = useGLTF("/models/earth.glb");
  const group = useRef();

  useExplode(group, { distance: 200 });

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        name="origin"
        geometry={nodes.origin.geometry}
        material={materials["Material__44.001"]}
        position={[7.159, 0, -16.397]}
      />
      <mesh
        name="Sphere001_cell"
        geometry={nodes.Sphere001_cell.geometry}
        material={materials["Material__44.001"]}
        position={[6.038, -23.173, 21.488]}
      />
      <mesh
        name="Sphere001_cell001"
        geometry={nodes.Sphere001_cell001.geometry}
        material={materials["Material__44.001"]}
        position={[45.535, -13.459, -27.214]}
      />
      <mesh
        name="Sphere001_cell002"
        geometry={nodes.Sphere001_cell002.geometry}
        material={materials["Material__44.001"]}
        position={[-14.075, -26.26, -43.983]}
      />
      <mesh
        name="Sphere001_cell003"
        geometry={nodes.Sphere001_cell003.geometry}
        material={materials["Material__44.001"]}
        position={[7.414, -19.18, -56.779]}
      />
      <mesh
        name="Sphere001_cell004"
        geometry={nodes.Sphere001_cell004.geometry}
        material={materials["Material__44.001"]}
        position={[-19.299, -20.517, 13.425]}
      />
      <mesh
        name="Sphere001_cell005"
        geometry={nodes.Sphere001_cell005.geometry}
        material={materials["Material__44.001"]}
        position={[0.077, 43.53, -6.804]}
      />
      <mesh
        name="Sphere001_cell006"
        geometry={nodes.Sphere001_cell006.geometry}
        material={materials["Material__44.001"]}
        position={[39.009, 30.675, -24.186]}
      />
      <mesh
        name="Sphere001_cell007"
        geometry={nodes.Sphere001_cell007.geometry}
        material={materials["Material__44.001"]}
        position={[-6.385, -6.712, 25.252]}
      />
      <mesh
        name="Sphere001_cell008"
        geometry={nodes.Sphere001_cell008.geometry}
        material={materials["Material__44.001"]}
        position={[-28.474, -12.042, -0.535]}
      />
      <mesh
        name="Sphere001_cell010"
        geometry={nodes.Sphere001_cell010.geometry}
        material={materials["Material__44.001"]}
        position={[-32.62, -19.04, -11.741]}
      />
      <mesh
        name="Sphere001_cell012"
        geometry={nodes.Sphere001_cell012.geometry}
        material={materials["Material__44.001"]}
        position={[5.738, 46.881, -15.959]}
      />
      <mesh
        name="Sphere001_cell013"
        geometry={nodes.Sphere001_cell013.geometry}
        material={materials["Material__44.001"]}
        position={[-15.992, -37.975, -24.533]}
      />
      <mesh
        name="Sphere001_cell014"
        geometry={nodes.Sphere001_cell014.geometry}
        material={materials["Material__44.001"]}
        position={[22.786, 35.96, 6.74]}
      />
      <mesh
        name="Sphere001_cell015"
        geometry={nodes.Sphere001_cell015.geometry}
        material={materials["Material__44.001"]}
        position={[-6.136, -41.292, -31.428]}
      />
      <mesh
        name="Sphere001_cell016"
        geometry={nodes.Sphere001_cell016.geometry}
        material={materials["Material__44.001"]}
        position={[21.58, 5.128, -58.252]}
      />
      <mesh
        name="Sphere001_cell017"
        geometry={nodes.Sphere001_cell017.geometry}
        material={materials["Material__44.001"]}
        position={[46.591, -17.911, -7.311]}
      />
      <mesh
        name="Sphere001_cell018"
        geometry={nodes.Sphere001_cell018.geometry}
        material={materials["Material__44.001"]}
        position={[-8.201, -25.307, 17.624]}
      />
      <mesh
        name="Sphere001_cell019"
        geometry={nodes.Sphere001_cell019.geometry}
        material={materials["Material__44.001"]}
        position={[9.534, 40.45, -8.324]}
      />
      <mesh
        name="Sphere001_cell020"
        geometry={nodes.Sphere001_cell020.geometry}
        material={materials["Material__44.001"]}
        position={[32.001, 34.165, -16.937]}
      />
      <mesh
        name="Sphere001_cell021"
        geometry={nodes.Sphere001_cell021.geometry}
        material={materials["Material__44.001"]}
        position={[12.753, -44.968, -23.153]}
      />
      <mesh
        name="Sphere001_cell022"
        geometry={nodes.Sphere001_cell022.geometry}
        material={materials["Material__44.001"]}
        position={[-17.166, -33.614, -4.629]}
      />
      <mesh
        name="Sphere001_cell023"
        geometry={nodes.Sphere001_cell023.geometry}
        material={materials["Material__44.001"]}
        position={[-1.048, -45.735, -18.304]}
      />
      <mesh
        name="Sphere001_cell024"
        geometry={nodes.Sphere001_cell024.geometry}
        material={materials["Material__44.001"]}
        position={[-5.6, 5.88, 25.891]}
      />
      <mesh
        name="Sphere001_cell025"
        geometry={nodes.Sphere001_cell025.geometry}
        material={materials["Material__44.001"]}
        position={[9.05, 34.463, 8.216]}
      />
      <mesh
        name="Sphere001_cell026"
        geometry={nodes.Sphere001_cell026.geometry}
        material={materials["Material__44.001"]}
        position={[-20.454, 28.621, -3.213]}
      />
      <mesh
        name="Sphere001_cell027"
        geometry={nodes.Sphere001_cell027.geometry}
        material={materials["Material__44.001"]}
        position={[6.591, -35.512, -44.598]}
      />
      <mesh
        name="Sphere001_cell028"
        geometry={nodes.Sphere001_cell028.geometry}
        material={materials["Material__44.001"]}
        position={[49.676, 2.062, -15.906]}
      />
      <mesh
        name="Sphere001_cell029"
        geometry={nodes.Sphere001_cell029.geometry}
        material={materials["Material__44.001"]}
        position={[-9.163, -39.885, -11.053]}
      />
      <mesh
        name="Sphere001_cell030"
        geometry={nodes.Sphere001_cell030.geometry}
        material={materials["Material__44.001"]}
        position={[9.649, -43.479, -5.505]}
      />
      <mesh
        name="Sphere001_cell031"
        geometry={nodes.Sphere001_cell031.geometry}
        material={materials["Material__44.001"]}
        position={[15.848, -39.568, -17.827]}
      />
      <mesh
        name="Sphere001_cell032"
        geometry={nodes.Sphere001_cell032.geometry}
        material={materials["Material__44.001"]}
        position={[-23.344, 32.123, -19.816]}
      />
      <mesh
        name="Sphere001_cell033"
        geometry={nodes.Sphere001_cell033.geometry}
        material={materials["Material__44.001"]}
        position={[5.764, -45.957, -15.064]}
      />
      <mesh
        name="Sphere001_cell034"
        geometry={nodes.Sphere001_cell034.geometry}
        material={materials["Material__44.001"]}
        position={[13.311, 39.714, -10.888]}
      />
      <mesh
        name="Sphere001_cell035"
        geometry={nodes.Sphere001_cell035.geometry}
        material={materials["Material__44.001"]}
        position={[30.762, 13.747, -47.901]}
      />
      <mesh
        name="Sphere001_cell036"
        geometry={nodes.Sphere001_cell036.geometry}
        material={materials["Material__44.001"]}
        position={[31.527, 26.153, 9.862]}
      />
      <mesh
        name="Sphere001_cell037"
        geometry={nodes.Sphere001_cell037.geometry}
        material={materials["Material__44.001"]}
        position={[-7.476, -0.143, -53.789]}
      />
      <mesh
        name="Sphere001_cell038"
        geometry={nodes.Sphere001_cell038.geometry}
        material={materials["Material__44.001"]}
        position={[21.938, -42.231, -24.51]}
      />
      <mesh
        name="Sphere001_cell039"
        geometry={nodes.Sphere001_cell039.geometry}
        material={materials["Material__44.001"]}
        position={[19.486, -8.968, 25.537]}
      />
      <mesh
        name="Sphere001_cell040"
        geometry={nodes.Sphere001_cell040.geometry}
        material={materials["Material__44.001"]}
        position={[32.435, 35.075, -3.674]}
      />
      <mesh
        name="Sphere001_cell041"
        geometry={nodes.Sphere001_cell041.geometry}
        material={materials["Material__44.001"]}
        position={[8.813, 42.563, -29.949]}
      />
      <mesh
        name="Sphere001_cell042"
        geometry={nodes.Sphere001_cell042.geometry}
        material={materials["Material__44.001"]}
        position={[24.197, -36.313, 1.483]}
      />
      <mesh
        name="Sphere001_cell043"
        geometry={nodes.Sphere001_cell043.geometry}
        material={materials["Material__44.001"]}
        position={[46.934, 16.254, -4.208]}
      />
      <mesh
        name="Sphere001_cell044"
        geometry={nodes.Sphere001_cell044.geometry}
        material={materials["Material__44.001"]}
        position={[22.647, 39.443, -13.667]}
      />
      <mesh
        name="Sphere001_cell045"
        geometry={nodes.Sphere001_cell045.geometry}
        material={materials["Material__44.001"]}
        position={[36.386, 24.547, -40.043]}
      />
      <mesh
        name="Sphere001_cell046"
        geometry={nodes.Sphere001_cell046.geometry}
        material={materials["Material__44.001"]}
        position={[37.82, -30.357, -21.274]}
      />
      <mesh
        name="Sphere001_cell047"
        geometry={nodes.Sphere001_cell047.geometry}
        material={materials["Material__44.001"]}
        position={[-1.355, 44.227, -26.218]}
      />
      <mesh
        name="Sphere001_cell048"
        geometry={nodes.Sphere001_cell048.geometry}
        material={materials["Material__44.001"]}
        position={[15.914, -38.728, -33.576]}
      />
      <mesh
        name="Sphere001_cell049"
        geometry={nodes.Sphere001_cell049.geometry}
        material={materials["Material__44.001"]}
        position={[15.794, 39.605, -3.308]}
      />
      <mesh
        name="Sphere001_cell050"
        geometry={nodes.Sphere001_cell050.geometry}
        material={materials["Material__44.001"]}
        position={[-15.481, -6.275, 18.377]}
      />
      <mesh
        name="Sphere001_cell051"
        geometry={nodes.Sphere001_cell051.geometry}
        material={materials["Material__44.001"]}
        position={[20.884, -21.735, 19.292]}
      />
      <mesh
        name="Sphere001_cell052"
        geometry={nodes.Sphere001_cell052.geometry}
        material={materials["Material__44.001"]}
        position={[39.799, -13.394, 7.324]}
      />
      <mesh
        name="Sphere001_cell053"
        geometry={nodes.Sphere001_cell053.geometry}
        material={materials["Material__44.001"]}
        position={[-25.603, -27.173, -20.744]}
      />
      <mesh
        name="Sphere001_cell054"
        geometry={nodes.Sphere001_cell054.geometry}
        material={materials["Material__44.001"]}
        position={[10.938, 14.452, -56.616]}
      />
      <mesh
        name="Sphere001_cell055"
        geometry={nodes.Sphere001_cell055.geometry}
        material={materials["Material__44.001"]}
        position={[41.579, -23.264, -33.326]}
      />
      <mesh
        name="Sphere001_cell056"
        geometry={nodes.Sphere001_cell056.geometry}
        material={materials["Material__44.001"]}
        position={[15.364, 45.212, -17.976]}
      />
      <mesh
        name="Sphere001_cell057"
        geometry={nodes.Sphere001_cell057.geometry}
        material={materials["Material__44.001"]}
        position={[10.909, -34.276, 10.371]}
      />
      <mesh
        name="Sphere001_cell058"
        geometry={nodes.Sphere001_cell058.geometry}
        material={materials["Material__44.001"]}
        position={[42.325, -0.515, -43.847]}
      />
      <mesh
        name="Sphere001_cell059"
        geometry={nodes.Sphere001_cell059.geometry}
        material={materials["Material__44.001"]}
        position={[28.981, -36.514, -32.807]}
      />
      <mesh
        name="Sphere001_cell060"
        geometry={nodes.Sphere001_cell060.geometry}
        material={materials["Material__44.001"]}
        position={[-26.052, -25.284, -31.19]}
      />
      <mesh
        name="Sphere001_cell061"
        geometry={nodes.Sphere001_cell061.geometry}
        material={materials["Material__44.001"]}
        position={[-1.982, 30, -47.188]}
      />
      <mesh
        name="Sphere001_cell062"
        geometry={nodes.Sphere001_cell062.geometry}
        material={materials["Material__44.001"]}
        position={[27.731, -4.214, -52.299]}
      />
      <mesh
        name="Sphere001_cell064"
        geometry={nodes.Sphere001_cell064.geometry}
        material={materials["Material__44.001"]}
        position={[-26.278, 12.105, 7.423]}
      />
      <mesh
        name="Sphere001_cell065"
        geometry={nodes.Sphere001_cell065.geometry}
        material={materials["Material__44.001"]}
        position={[-27.571, -3.709, 11.116]}
      />
      <mesh
        name="Sphere001_cell066"
        geometry={nodes.Sphere001_cell066.geometry}
        material={materials["Material__44.001"]}
        position={[28.887, -22.145, 13.172]}
      />
      <mesh
        name="Sphere001_cell068"
        geometry={nodes.Sphere001_cell068.geometry}
        material={materials["Material__44.001"]}
        position={[0.976, -40.595, 0.043]}
      />
      <mesh
        name="Sphere001_cell069"
        geometry={nodes.Sphere001_cell069.geometry}
        material={materials["Material__44.001"]}
        position={[17.858, 23.423, -48.222]}
      />
      <mesh
        name="Sphere001_cell070"
        geometry={nodes.Sphere001_cell070.geometry}
        material={materials["Material__44.001"]}
        position={[-2.523, 36.579, 8.589]}
      />
      <mesh
        name="Sphere001_cell071"
        geometry={nodes.Sphere001_cell071.geometry}
        material={materials["Material__44.001"]}
        position={[26.729, -25.194, -48.167]}
      />
      <mesh
        name="Sphere001_cell072"
        geometry={nodes.Sphere001_cell072.geometry}
        material={materials["Material__44.001"]}
        position={[-0.62, 18.184, 19.697]}
      />
      <mesh
        name="Sphere001_cell073"
        geometry={nodes.Sphere001_cell073.geometry}
        material={materials["Material__44.001"]}
        position={[17.474, -42.141, -11.444]}
      />
      <mesh
        name="Sphere001_cell074"
        geometry={nodes.Sphere001_cell074.geometry}
        material={materials["Material__44.001"]}
        position={[13.006, 24.205, 19.362]}
      />
      <mesh
        name="Sphere001_cell075"
        geometry={nodes.Sphere001_cell075.geometry}
        material={materials["Material__44.001"]}
        position={[32.938, 11.449, 17.992]}
      />
      <mesh
        name="Sphere001_cell076"
        geometry={nodes.Sphere001_cell076.geometry}
        material={materials["Material__44.001"]}
        position={[-8.133, -32.078, 4.281]}
      />
      <mesh
        name="Sphere001_cell077"
        geometry={nodes.Sphere001_cell077.geometry}
        material={materials["Material__44.001"]}
        position={[7.284, 8.56, 27.062]}
      />
      <mesh
        name="Sphere001_cell078"
        geometry={nodes.Sphere001_cell078.geometry}
        material={materials["Material__44.001"]}
        position={[-22.775, 0.617, -48.247]}
      />
      <mesh
        name="Sphere001_cell079"
        geometry={nodes.Sphere001_cell079.geometry}
        material={materials["Material__44.001"]}
        position={[5.39, -41.079, -33.109]}
      />
      <mesh
        name="Sphere001_cell080"
        geometry={nodes.Sphere001_cell080.geometry}
        material={materials["Material__44.001"]}
        position={[19.15, 8.238, 24.882]}
      />
      <mesh
        name="Sphere001_cell081"
        geometry={nodes.Sphere001_cell081.geometry}
        material={materials["Material__44.001"]}
        position={[7.202, 40.409, -4.517]}
      />
      <mesh
        name="Sphere001_cell082"
        geometry={nodes.Sphere001_cell082.geometry}
        material={materials["Material__44.001"]}
        position={[30.689, -36.822, -11.759]}
      />
      <mesh
        name="Sphere001_cell083"
        geometry={nodes.Sphere001_cell083.geometry}
        material={materials["Material__44.001"]}
        position={[15.37, 35.461, -43.299]}
      />
      <mesh
        name="Sphere001_cell084"
        geometry={nodes.Sphere001_cell084.geometry}
        material={materials["Material__44.001"]}
        position={[-33.079, 2.58, -30.073]}
      />
      <mesh
        name="Sphere001_cell085"
        geometry={nodes.Sphere001_cell085.geometry}
        material={materials["Material__44.001"]}
        position={[-3.059, -10.022, -58.419]}
      />
      <mesh
        name="Sphere001_cell086"
        geometry={nodes.Sphere001_cell086.geometry}
        material={materials["Material__44.001"]}
        position={[45.419, 22.832, -18.949]}
      />
      <mesh
        name="Sphere001_cell087"
        geometry={nodes.Sphere001_cell087.geometry}
        material={materials["Material__44.001"]}
        position={[-20.732, 24.351, 6.959]}
      />
      <mesh
        name="Sphere001_cell088"
        geometry={nodes.Sphere001_cell088.geometry}
        material={materials["Material__44.001"]}
        position={[-12.728, 17.957, -48.868]}
      />
      <mesh
        name="Sphere001_cell089"
        geometry={nodes.Sphere001_cell089.geometry}
        material={materials["Material__44.001"]}
        position={[5.523, -43.248, -24.332]}
      />
      <mesh
        name="Sphere001_cell090"
        geometry={nodes.Sphere001_cell090.geometry}
        material={materials["Material__44.001"]}
        position={[-11.762, -41.311, -18.846]}
      />
      <mesh
        name="Sphere001_cell091"
        geometry={nodes.Sphere001_cell091.geometry}
        material={materials["Material__44.001"]}
        position={[48.575, -16.864, -16.375]}
      />
    </group>
  );
}

useGLTF.preload("/models/earth.glb");