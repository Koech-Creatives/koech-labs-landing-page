document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button[href^="#"]');

    // Function to set active navigation link
    const setActiveLink = (clickedLink) => {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to clicked link
        clickedLink.classList.add('active');
    };

    // Handle navigation link clicks for both scrolling and active state
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Set this link as active
            setActiveLink(this);
            
            // Handle Home link (# href)
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set active link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    const setActiveNavOnScroll = () => {
        let scrollPosition = window.scrollY;
        
        // First check if we're at the top (or near top) of the page
        if (scrollPosition < 200) {
            // We're at the top, set "Home" as active
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '#') {
                    setActiveLink(link);
                }
            });
            return;
        }
        
        // Otherwise check which section we're in
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Add some offset for better UX
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Find the corresponding nav link and activate it
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === '#' + sectionId) {
                        setActiveLink(link);
                    }
                });
            }
        });
    };
    
    // Call on scroll and on page load
    window.addEventListener('scroll', setActiveNavOnScroll);
    window.addEventListener('load', setActiveNavOnScroll);

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
    
    // Function to ensure icons are not clustered in the center
    const redistributeIcons = () => {
        // Get hero content dimensions to create buffer zone
        const heroContent = document.querySelector('.hero-content h1');
        const subHeadline = document.querySelector('.hero-content .subheadline');
        
        if (!heroContent || !heroSection) return;
        
        const heroRect = heroSection.getBoundingClientRect();
        const heroContentRect = heroContent.getBoundingClientRect();
        
        // Calculate the center and buffer zone
        const centerX = 50; // Center of the container (percentage)
        const centerY = 50; // Center of the container (percentage)
        const bufferRadiusX = 25; // Horizontal buffer percentage
        const bufferRadiusY = 30; // Vertical buffer percentage (slightly larger to account for headline)
        
        // Adjust each icon position to avoid the center
        socialIcons.forEach(icon => {
            let xPercent = parseInt(icon.getAttribute('data-x'));
            let yPercent = parseInt(icon.getAttribute('data-y'));
            
            // Check if icon is in the buffer zone
            const distanceX = Math.abs(xPercent - centerX);
            const distanceY = Math.abs(yPercent - centerY);
            
            // If icon is too close to center horizontally
            if (distanceX < bufferRadiusX) {
                // Push it away from center
                if (xPercent < centerX) {
                    xPercent = centerX - bufferRadiusX - Math.random() * 10;
                } else {
                    xPercent = centerX + bufferRadiusX + Math.random() * 10;
                }
            }
            
            // If icon is too close to center vertically
            if (distanceY < bufferRadiusY) {
                // Push it away from center
                if (yPercent < centerY) {
                    yPercent = centerY - bufferRadiusY - Math.random() * 10;
                } else {
                    yPercent = centerY + bufferRadiusY + Math.random() * 10;
                }
            }
            
            // Ensure values stay within bounds (5-95%)
            xPercent = Math.max(5, Math.min(95, xPercent));
            yPercent = Math.max(5, Math.min(95, yPercent));
            
            // Apply updated positions
            icon.setAttribute('data-x', xPercent.toString());
            icon.setAttribute('data-y', yPercent.toString());
            
            // More varied random rotation between -45 and 45 degrees
            const randomRotation = Math.floor(Math.random() * 90) - 45;
            
            icon.style.left = `${xPercent}%`;
            icon.style.top = `${yPercent}%`;
            icon.style.transform = `scale(0.9) rotate(${randomRotation}deg)`;
        });
    };
    
    // Call the redistribution function
    redistributeIcons();
    
    // Handle mouse movement for icon hover effect
    heroSection.addEventListener('mousemove', (e) => {
        const heroRect = heroSection.getBoundingClientRect();
        const mouseX = e.clientX - heroRect.left;
        const mouseY = e.clientY - heroRect.top;
        
        // Get center of hero content for buffer calculation
        const heroContent = document.querySelector('.hero-content h1');
        const heroContentRect = heroContent.getBoundingClientRect();
        const centerX = (heroContentRect.left + heroContentRect.right) / 2 - heroRect.left;
        const centerY = (heroContentRect.top + heroContentRect.bottom) / 2 - heroRect.top;
        
        socialIcons.forEach(icon => {
            const iconRect = icon.getBoundingClientRect();
            const iconX = (iconRect.left - heroRect.left) + iconRect.width / 2;
            const iconY = (iconRect.top - heroRect.top) + iconRect.height / 2;
            
            // Calculate distance between mouse and icon
            const distanceToMouse = Math.sqrt(
                Math.pow(mouseX - iconX, 2) + 
                Math.pow(mouseY - iconY, 2)
            );
            
            // Calculate distance to hero text center to create a buffer zone
            const distanceToCenter = Math.sqrt(
                Math.pow(centerX - iconX, 2) + 
                Math.pow(centerY - iconY, 2)
            );
            
            // Set maximum distance for hover effect (in pixels)
            const maxDistance = 200;
            const minDistanceToCenter = 150; // Buffer around center
            
            // Skip icons that are too close to the hero text
            if (distanceToCenter < minDistanceToCenter) {
                icon.style.opacity = 0;
                return;
            }
            
            if (distanceToMouse < maxDistance) {
                // Calculate intensity based on distance (closer = more intense)
                const intensity = 1 - (distanceToMouse / maxDistance);
                
                // Get the current rotation from transform style
                const currentTransform = icon.style.transform;
                const rotationMatch = currentTransform.match(/rotate\(([^)]+)\)/);
                const currentRotation = rotationMatch ? rotationMatch[1] : "0deg";
                
                // Add hovered class when close enough
                if (intensity > 0.3) {
                    icon.classList.add('hovered');
                } else {
                    icon.classList.remove('hovered');
                    // Set opacity based on distance
                    icon.style.opacity = 0.15 + (intensity * 0.65);
                }
                
                // Scale based on proximity
                const scale = 0.9 + (intensity * 0.5);
                icon.style.transform = `scale(${scale}) rotate(${currentRotation})`;
                
            } else {
                // Reset icon when mouse is far away
                icon.classList.remove('hovered');
                icon.style.opacity = 0.15;
                
                // Get the current rotation to preserve it
                const currentTransform = icon.style.transform;
                const rotationMatch = currentTransform.match(/rotate\(([^)]+)\)/);
                const currentRotation = rotationMatch ? rotationMatch[1] : "0deg";
                
                icon.style.transform = `scale(0.9) rotate(${currentRotation})`;
            }
        });
    });
    
    // Reset icons when mouse leaves hero section
    heroSection.addEventListener('mouseleave', () => {
        socialIcons.forEach(icon => {
            icon.classList.remove('hovered');
            icon.style.opacity = 0.15;
            
            // Get the current rotation to preserve it
            const currentTransform = icon.style.transform;
            const rotationMatch = currentTransform.match(/rotate\(([^)]+)\)/);
            const currentRotation = rotationMatch ? rotationMatch[1] : "0deg";
            
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
            // Skip hover effects on mobile
            if (window.innerWidth <= 768) return;
            
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
            // Skip reset on mobile
            if (window.innerWidth <= 768) return;
            
            mockupCards.forEach(c => {
                c.style.opacity = '1';
                // Reset to original transform
                c.style.transform = originalTransforms[c.id];
            });
        });
        
        // Add touch events for mobile
        card.addEventListener('touchstart', () => {
            if (window.innerWidth > 768) return;
            
            // Add active class to the touched card
            card.classList.add('touch-active');
            
            // Slightly reduce opacity of other cards
            mockupCards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('touchend', () => {
            if (window.innerWidth > 768) return;
            
            // Remove active class after a short delay
            setTimeout(() => {
                card.classList.remove('touch-active');
            }, 300);
            
            // Reset opacity of all cards
            mockupCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });

    // Function to update card positions based on screen size
    const updateCardPositions = () => {
        const container = document.querySelector('.mockup-container');
        if (!container) return;
        
        const containerWidth = container.offsetWidth;
        
        if (window.innerWidth <= 768) {
            // Mobile view - reset all position styles and let CSS flexbox handle it
            const cards = document.querySelectorAll('.mockup-card');
            cards.forEach(card => {
                card.style.position = "relative";
                card.style.top = "auto";
                card.style.left = "auto";
                card.style.transform = "none";
            });
        } else if (window.innerWidth > 1400) {
            // Adjust card positions for extra large screens
            const cards = document.querySelectorAll('.mockup-card');
            cards.forEach(card => {
                card.style.position = "absolute";
            });
            document.getElementById('card1').style.left = '15%';
            document.getElementById('card1').style.top = '25%';
            document.getElementById('card2').style.left = '35%';
            document.getElementById('card2').style.top = '25%';
            document.getElementById('card3').style.left = '55%';
            document.getElementById('card3').style.top = '50%';
            document.getElementById('card4').style.left = '75%';
            document.getElementById('card4').style.top = '50%';
            document.getElementById('card5').style.left = '90%';
            document.getElementById('card5').style.top = '75%';
        } else if (window.innerWidth > 992) {
            // Adjust card positions for large screens
            const cards = document.querySelectorAll('.mockup-card');
            cards.forEach(card => {
                card.style.position = "absolute";
            });
            document.getElementById('card1').style.left = '20%';
            document.getElementById('card1').style.top = '25%';
            document.getElementById('card2').style.left = '40%';
            document.getElementById('card2').style.top = '25%';
            document.getElementById('card3').style.left = '60%';
            document.getElementById('card3').style.top = '50%';
            document.getElementById('card4').style.left = '80%';
            document.getElementById('card4').style.top = '50%';
            document.getElementById('card5').style.left = '85%';
            document.getElementById('card5').style.top = '25%';
        } else {
            // Default for medium screens
            const cards = document.querySelectorAll('.mockup-card');
            cards.forEach(card => {
                card.style.position = "absolute";
            });
            document.getElementById('card1').style.left = '30%';
            document.getElementById('card1').style.top = '25%';
            document.getElementById('card2').style.left = '70%';
            document.getElementById('card2').style.top = '25%';
            document.getElementById('card3').style.left = '30%';
            document.getElementById('card3').style.top = '50%';
            document.getElementById('card4').style.left = '70%';
            document.getElementById('card4').style.top = '50%';
            document.getElementById('card5').style.left = '50%';
            document.getElementById('card5').style.top = '75%';
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