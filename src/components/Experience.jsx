import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Heart } from "./Heart";
import { Earth } from "./Earth";
import { useControls } from "leva";
import { BlueBird } from "./BlueBird";

export const Experience = () => {
  const { item } = useControls({
    item: {
      value: "heart",
      options: ["heart", "earth", "bluebird"],
    },
  });
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={2} speed={3}>
        <Heart scale={6} visible={item === "heart"} />
        <Earth scale={0.1} visible={item === "earth"} />
        <BlueBird scale={6} visible={item === "bluebird"} />
      </Float>
      <Environment preset="sunset" background blur={0.4} />
    </>
  );
};
