// Smooth Scroll for Navbar Links
    document.querySelectorAll('.scroll-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#hero h1', {
      y: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 80%',
      },
    });
    gsap.from('#contact h1', {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#section1',
        start: 'top 80%',
      },
    });

    // Three.js Background Animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('#hero').appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 30;

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
    
    
    // Draggable Social Button
const socialButton = document.getElementById('socialButton');
const toggleIcon = document.querySelector('.toggle-icon');
const socialIcons = document.querySelector('.social-icons');

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Toggle social icons
  const socialButton = document.getElementById("socialButton");
  const socialIcons = socialButton.querySelector(".social-icons");
  const toggleIcon = socialButton.querySelector(".toggle-icon");

  socialButton.addEventListener("click", () => {
    socialIcons.classList.toggle("d-none");
    toggleIcon.classList.toggle("fa-share-alt");
    toggleIcon.classList.toggle("fa-times");
  });
});

// Scroll Indicator Script
 document.addEventListener("DOMContentLoaded", () => {
  const scrollIndicator = document.querySelector(".scroll-indicator");

  scrollIndicator.addEventListener("click", () => {
    const targetId = scrollIndicator.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
