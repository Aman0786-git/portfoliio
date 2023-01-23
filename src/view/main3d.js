import * as THREE from "three";
// import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

// const listEl = document.querySelector(".list");
const spinEl = document.querySelector(".spin_msg");
// Scene
const scene = new THREE.Scene();

// Create Sphere
const geometry = new THREE.ConeGeometry(9, 8, 3, 1);

const material = new THREE.MeshStandardMaterial({
  color: "#869cca",
  roughness: 0.5,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
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
camera.position.z = 40;
scene.add(camera);

//Renderer

const canvas = document.querySelector(".maingl");
const renderer = new THREE.WebGLRenderer({ canvas }, { alpha: true });
renderer.setClearColor(0x00, 0);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(3);
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
  //   console.log(window.innerHeight, window.innerWidth);
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

export const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
// loop();

// const hoverChange = function () {
//   spinEl.addEventListener("mouseenter", () => {
//     spinEl.style.color = "whitesmoke";
//   });
//   spinEl.addEventListener("mouseout", () => {
//     spinEl.style.color = `rgb(${rgb.join(",")})`;
//   });
// };

let mouseDown = false;
let rgb = [];
window.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));
const ColChange = (e) => {
  rgb = [
    Math.round(1 + ((e.pageX / sizes.width) * 258) / 2),
    Math.round(1 + ((e.pageY / sizes.width) * 258) / 2),
    1 + 258 / 2,
  ];

  //  Animate
  let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
  gsap.to(mesh.material.color, {
    r: newColor.r,
    g: newColor.g,
    b: newColor.b,
  });

  gsap.to(".spin_msg", {
    color: `rgb(${rgb.join(",")})`,
  });
};

window.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    ColChange(e);
    hoverChange();
  }
});
window.addEventListener("touchstart", (e) => {
  const [el] = e.touches;
  ColChange(el);
});
