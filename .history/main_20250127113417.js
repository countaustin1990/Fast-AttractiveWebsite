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

// Toggle social media icons
toggleIcon.addEventListener('click', () => {
  socialIcons.classList.toggle('d-none');
});

// Drag functionality
let isDragging = false;

socialButton.addEventListener('mousedown', (e) => {
  isDragging = true;
  const rect = socialButton.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const moveAt = (event) => {
    if (isDragging) {
      socialButton.style.left = ${event.clientX - offsetX}px;
      socialButton.style.top = ${event.clientY - offsetY}px;
    }
  };

  const stopDrag = () => {
    isDragging = false;
    document.removeEventListener('mousemove', moveAt);
    document.removeEventListener('mouseup', stopDrag);
  };

  document.addEventListener('mousemove', moveAt);
  document.addEventListener('mouseup', stopDrag);
});

socialButton.addEventListener('dragstart', (e) => e.preventDefault());


// Scroll Indicator Script
  // Scroll Indicator Script
  document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const heroSection = document.querySelector('#hero');
    const nextSection = heroSection.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });


document.querySelector('.scroll-indicator').addEventListener('click', () => {
  const currentSection = document.querySelector('section:target') || document.querySelector('section');
  const nextSection = currentSection.nextElementSibling;

  if (nextSection && nextSection.tagName === 'SECTION') {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
});