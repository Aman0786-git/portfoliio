import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
// import cursor from "./cursor";

const mainglEl = document.querySelector(".maingl");
// Scene
const scene = new THREE.Scene();

// Create Sphere
const geometry = new THREE.ConeGeometry(7, 7, 3, 1);

const material = new THREE.MeshStandardMaterial({
  color: "red",
  roughness: 0.5,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth / 2.5,
  height: window.innerHeight / 1.5,
};

//Light
// const light = new THREE.PointLight(0xffffff, 1, 100);
// light.position.set(10, 0, 10);
// light.intensity = 1.25;
// scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(
  30,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 30;
scene.add(camera);

//Renderer

const canvas = document.querySelector(".maingl");
const renderer = new THREE.WebGLRenderer({ canvas }, { alpha: true });
renderer.setClearColor(0x00, 0);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(1);
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;

// Resize
window.addEventListener("resize", () => {
  // Update Sizes
  sizes.width = window.innerWidth / 2;
  sizes.height = window.innerHeight / 2;

  // Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});
const t1 = gsap.timeline({ defaults: { duration: 1 } });
t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
export const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};

let mouseDown = false;
let rgb = [];
mainglEl.addEventListener("mousedown", () => (mouseDown = true));
mainglEl.addEventListener("mouseup", () => (mouseDown = false));
const ColChange = (e) => {
  rgb = [
    Math.round(((e.pageX / sizes.width) * 258) / 2),
    Math.round(((e.pageY / sizes.width) * 258) / 2),
    258 / 2,
  ];

  //  Animate
  let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
  //   gsap.to(mesh.material.color, {
  //     r: newColor.r,
  //     g: newColor.g,
  //     b: newColor.b,
  //   });

  gsap.to(".spin_msg", {
    color: `rgb(${rgb.join(",")})`,
  });
};

mainglEl.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    ColChange(e);
  }
});
mainglEl.addEventListener("touchstart", (e) => {
  const [el] = e.touches;
  ColChange(el);
});

mainglEl.addEventListener("mouseover", (e) => {
  //   console.log(e.target);
  // console.log(cursor);
  if (!mouseDown) mainglEl.setAttribute("data-cursor-text", "Drag");
  else mainglEl.removeAttribute("data-cursor-text");
});
