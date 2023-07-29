import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Heart } from "./Heart";
import { Earth } from "./Earth";
import { useControls } from "leva";

export const Experience = () => {
  const { item } = useControls({
    item: {
      value: "heart",
      options: ["heart", "earth"],
    },
  });
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={2} speed={3}>
        <Heart scale={6} visible={item === "heart"} />
        <Earth scale={0.1} visible={item === "earth"} />
      </Float>
      <Environment preset="sunset" background blur={0.4} />
    </>
  );
};
