 // Mobile Menu Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active') ? '&times;' : '&#9776;';
        });
        
        // Project Filtering
        const projectTabs = document.querySelectorAll('.project-tab');
        const projectCards = document.querySelectorAll('.project-card');
        
        projectTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                projectTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Filter projects
                const filter = tab.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                setTimeout(() => {
                    projectCards.forEach(card => {
                        card.style.overflowY = 'auto';
                    });
                }, 10);
                
            });
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    menuBtn.innerHTML = '&#9776;';
                }
            });
        });
