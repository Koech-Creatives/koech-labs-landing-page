document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks2 = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks2.classList.toggle('active');
        });
    }

    // Social icons animation
    const socialIcons = document.querySelectorAll('.social-icons .icon');
    const heroSection = document.querySelector('.hero-section');
    
    // Position icons randomly with random rotation
    socialIcons.forEach(icon => {
        const xPercent = icon.getAttribute('data-x');
        const yPercent = icon.getAttribute('data-y');
        const randomRotation = Math.floor(Math.random() * 60) - 30; // Random rotation between -30 and 30 degrees
        
        icon.style.left = `${xPercent}%`;
        icon.style.top = `${yPercent}%`;
        icon.style.transform = `scale(0.9) rotate(${randomRotation}deg)`;
    });
    
    // Handle mouse movement for icon hover effect
    heroSection.addEventListener('mousemove', (e) => {
        const heroRect = heroSection.getBoundingClientRect();
        const mouseX = e.clientX - heroRect.left;
        const mouseY = e.clientY - heroRect.top;
        
        socialIcons.forEach(icon => {
            const iconRect = icon.getBoundingClientRect();
            const iconX = (iconRect.left - heroRect.left) + iconRect.width / 2;
            const iconY = (iconRect.top - heroRect.top) + iconRect.height / 2;
            
            // Calculate distance between mouse and icon
            const distance = Math.sqrt(
                Math.pow(mouseX - iconX, 2) + 
                Math.pow(mouseY - iconY, 2)
            );
            
            // Set maximum distance for hover effect (in pixels)
            const maxDistance = 150;
            
            if (distance < maxDistance) {
                // Calculate opacity based on distance (closer = more opaque)
                const opacity = Math.min(0.8, (1 - distance / maxDistance) * 0.8);
                icon.style.opacity = opacity;
                
                // Scale up slightly when closer
                const scale = 0.9 + ((1 - distance / maxDistance) * 0.3);
                const currentRotation = icon.style.transform.match(/rotate\(([^)]+)\)/)[1];
                icon.style.transform = `scale(${scale}) rotate(${currentRotation})`;
                
                // Change color based on proximity
                if (opacity > 0.5) {
                    icon.style.color = `rgba(255, 73, 64, ${opacity})`;
                } else {
                    icon.style.color = `rgba(255, 255, 255, ${opacity})`;
                }
            } else {
                // Hide icon when mouse is far away
                icon.style.opacity = 0;
                icon.style.transform = `scale(0.9) rotate(${icon.style.transform.match(/rotate\(([^)]+)\)/)[1]})`;
            }
        });
    });
    
    // Reset icons when mouse leaves hero section
    heroSection.addEventListener('mouseleave', () => {
        socialIcons.forEach(icon => {
            icon.style.opacity = 0;
            const currentRotation = icon.style.transform.match(/rotate\(([^)]+)\)/)[1];
            icon.style.transform = `scale(0.9) rotate(${currentRotation})`;
        });
    });

    // Mockup cards hover effect
    const mockupCards = document.querySelectorAll('.mockup-card');
    
    // Store original transforms for each card
    const originalTransforms = {};
    mockupCards.forEach(card => {
        originalTransforms[card.id] = card.style.transform;
    });
    
    mockupCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            mockupCards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                    // Move other cards slightly away from the hovered card
                    const cardRect = card.getBoundingClientRect();
                    const cRect = c.getBoundingClientRect();
                    
                    const cardCenterX = cardRect.left + cardRect.width / 2;
                    const cardCenterY = cardRect.top + cardRect.height / 2;
                    const cCenterX = cRect.left + cRect.width / 2;
                    const cCenterY = cRect.top + cRect.height / 2;
                    
                    // Calculate direction vector from hovered card to this card
                    const dirX = cCenterX - cardCenterX;
                    const dirY = cCenterY - cardCenterY;
                    
                    // Normalize and scale the push effect
                    const length = Math.sqrt(dirX * dirX + dirY * dirY);
                    const normalizedX = dirX / length;
                    const normalizedY = dirY / length;
                    
                    // Apply a small push effect (5-10px)
                    const pushDistance = 8;
                    const translateX = normalizedX * pushDistance;
                    const translateY = normalizedY * pushDistance;
                    
                    // Get current transform and add the push effect
                    const currentTransform = c.style.transform;
                    c.style.transform = `${currentTransform} translate(${translateX}px, ${translateY}px)`;
                }
            });
        });
        
        card.addEventListener('mouseout', () => {
            mockupCards.forEach(c => {
                c.style.opacity = '1';
                // Reset to original transform
                c.style.transform = originalTransforms[c.id];
            });
        });
    });

    // Function to update card positions based on screen size
    const updateCardPositions = () => {
        const container = document.querySelector('.mockup-container');
        if (!container) return;
        
        const containerWidth = container.offsetWidth;
        
        // Only adjust if we're on larger screens
        if (window.innerWidth > 1400) {
            // Adjust card positions for extra large screens
            document.getElementById('card1').style.left = '15%';
            document.getElementById('card2').style.left = '35%';
            document.getElementById('card3').style.left = '55%';
            document.getElementById('card4').style.left = '75%';
            document.getElementById('card5').style.left = '90%';
        } else if (window.innerWidth > 992) {
            // Adjust card positions for large screens
            document.getElementById('card1').style.left = '20%';
            document.getElementById('card2').style.left = '40%';
            document.getElementById('card3').style.left = '60%';
            document.getElementById('card4').style.left = '80%';
            document.getElementById('card5').style.left = '85%';
            document.getElementById('card5').style.top = '25%';
        }
    };
    
    // Call once on load and then on window resize
    window.addEventListener('load', updateCardPositions);
    window.addEventListener('resize', updateCardPositions);

    // Animate elements on page load
    const animateOnLoad = () => {
        const heroContent = document.querySelector('.hero-content');
        const waitlistBadge = document.querySelector('.waitlist-badge');
        const mockupContainer = document.querySelector('.mockup-container');
        
        setTimeout(() => {
            waitlistBadge.style.opacity = '1';
            waitlistBadge.style.transform = 'translateY(0)';
        }, 300);
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 600);
        
        setTimeout(() => {
            mockupContainer.style.opacity = '1';
            mockupContainer.style.transform = 'translateY(0)';
        }, 900);
        
        // Animate dots in waitlist badge
        const dots = document.querySelectorAll('.badge-dots .dot');
        let activeDotIndex = 0;
        
        setInterval(() => {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[activeDotIndex].classList.add('active');
            activeDotIndex = (activeDotIndex + 1) % dots.length;
        }, 2000);
    };
    
    // Add initial styles for animation
    const setupAnimations = () => {
        const heroContent = document.querySelector('.hero-content');
        const waitlistBadge = document.querySelector('.waitlist-badge');
        const mockupContainer = document.querySelector('.mockup-container');
        
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(20px)';
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
        
        if (waitlistBadge) {
            waitlistBadge.style.opacity = '0';
            waitlistBadge.style.transform = 'translateY(20px)';
            waitlistBadge.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
        
        if (mockupContainer) {
            mockupContainer.style.opacity = '0';
            mockupContainer.style.transform = 'translateY(20px)';
            mockupContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    };
    
    setupAnimations();
    window.addEventListener('load', animateOnLoad);

    // Hero icons hover effect
    const heroSection = document.querySelector('.hero-section');
    const icons = document.querySelectorAll('.hero-icons .icon');
    const maxDistance = 200; // The maximum distance to react to the mouse

    // Position icons randomly within the hero section
    icons.forEach(icon => {
        const heroRect = heroSection.getBoundingClientRect();
        const iconSize = 30; // Approximate size of the icon
        
        // Avoid placing icons directly over the central text content
        const centralTextArea = {
            top: heroRect.height * 0.3,
            bottom: heroRect.height * 0.7,
            left: heroRect.width * 0.2,
            right: heroRect.width * 0.8
        };

        let top, left;
        do {
            top = Math.random() * (heroRect.height - iconSize);
            left = Math.random() * (heroRect.width - iconSize);
        } while (
            top > centralTextArea.top && top < centralTextArea.bottom &&
            left > centralTextArea.left && left < centralTextArea.right
        );

        icon.style.top = `${top}px`;
        icon.style.left = `${left}px`;
    });


    heroSection.addEventListener('mousemove', (e) => {
        const heroRect = heroSection.getBoundingClientRect();
        // Mouse coordinates relative to the hero section
        const mouseX = e.clientX - heroRect.left;
        const mouseY = e.clientY - heroRect.top;

        icons.forEach(icon => {
            const iconRect = icon.getBoundingClientRect();
            // Icon center coordinates relative to the hero section
            const iconX = (iconRect.left - heroRect.left) + iconRect.width / 2;
            const iconY = (iconRect.top - heroRect.top) + iconRect.height / 2;

            const distance = Math.sqrt(Math.pow(mouseX - iconX, 2) + Math.pow(mouseY - iconY, 2));

            if (distance < maxDistance) {
                const opacity = 0.8 * (1 - distance / maxDistance);
                icon.style.opacity = opacity;
            } else {
                icon.style.opacity = 0;
            }
        });
    });

    // Navigation active state handling
    document.addEventListener('DOMContentLoaded', function() {
        // Get all nav links
        const navLinks = document.querySelectorAll('.nav-links a');
        
        // Add click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // If this is just a page anchor, don't do a page refresh
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    navLinks.forEach(item => item.classList.remove('active'));
                    
                    // Add active class to the clicked link
                    this.classList.add('active');
                    
                    // If the href has a hash, scroll to that section
                    const hash = this.getAttribute('href');
                    if (hash !== '#') {
                        const targetElement = document.querySelector(hash);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }
            });
        });
    });
}); 