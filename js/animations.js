// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup GSAP Animations for sections
    const sections = document.querySelectorAll('.section, .card, .step-card, .value-card');
    sections.forEach((sec) => {
        gsap.fromTo(sec, 
            { opacity: 0, y: 50 },
            { 
                scrollTrigger: {
                    trigger: sec,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }
        );
    });

    // 2. Setup tsParticles (if div exists)
    if(document.getElementById('tsparticles')) {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            fullScreen: { enable: true, zIndex: -1 },
            particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: ["#B7D95B", "#1F8A5B"] },
                shape: { type: "circle" },
                opacity: { value: 0.4, random: true },
                size: { value: 4, random: true },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "top",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                }
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "bubble" },
                },
                modes: {
                    bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 }
                }
            },
            retina_detect: true
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            // Toggle body scroll lock
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});
