// Project Data
        const projectData = [
            {
                id: 1,
                title: "Project 1 - Web App",
                category: "web",
                tags: ["React", "Node.js", "MongoDB"],
                description: `
                    <p>This full-stack web application was built to solve a specific problem in the industry. It features a React frontend with a clean, intuitive UI design, paired with a robust Node.js backend and MongoDB database.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>User authentication and authorization</li>
                        <li>Real-time data updates</li>
                        <li>Responsive design for all devices</li>
                        <li>RESTful API architecture</li>
                        <li>Cloud deployment</li>
                    </ul>
                    <p>The project was developed using modern development practices including CI/CD, automated testing, and code quality tools. It demonstrates my abilities in creating complete, production-ready applications.</p>
                `,
                image: "/api/placeholder/800/500",
                github: "https://github.com/harshnevse/project1"
            },
            {
                id: 2,
                title: "Project 2 - Mobile App",
                category: "mobile",
                tags: ["Flutter", "Firebase"],
                description: `
                    <p>A cross-platform mobile application built with Flutter and Firebase. This app was designed to provide users with a seamless experience across both iOS and Android devices.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Cross-platform compatibility</li>
                        <li>Offline-first architecture</li>
                        <li>Real-time data synchronization</li>
                        <li>Push notifications</li>
                        <li>Elegant UI animations</li>
                    </ul>
                    <p>The app leverages Firebase's robust backend services for authentication, database, and hosting, allowing for rapid development and reliable performance.</p>
                `,
                image: "/api/placeholder/800/500",
                github: "https://github.com/harshnevse/project2"
            },
            {
                id: 3,
                title: "Project 3 - AI Solution",
                category: "ai",
                tags: ["Python", "TensorFlow", "Data Science"],
                description: `
                    <p>An AI-powered solution that leverages machine learning algorithms to analyze and predict patterns in complex datasets. This project demonstrates my skills in data science and artificial intelligence.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Neural network architecture</li>
                        <li>Data preprocessing pipeline</li>
                        <li>Model training and evaluation</li>
                        <li>Visualization of results</li>
                        <li>Deployment as a scalable service</li>
                    </ul>
                    <p>The solution achieved significant performance improvements over traditional methods, with accuracy rates exceeding industry benchmarks by 15%.</p>
                `,
                image: "/api/placeholder/800/500",
                github: "https://github.com/harshnevse/project3"
            },
            {
                id: 4,
                title: "Project 4 - Dynamic Web App",
                category: "web",
                tags: ["Vue.js", "Express", "PostgreSQL"],
                description: `
                    <p>A dynamic web application built with Vue.js, Express, and PostgreSQL. This project showcases my ability to create responsive, interactive web applications with a strong focus on user experience.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Component-based architecture</li>
                        <li>State management with Vuex</li>
                        <li>RESTful API integration</li>
                        <li>Data visualization</li>
                        <li>Performance optimization</li>
                    </ul>
                    <p>The application features a clean, intuitive interface that makes complex data interactions simple for end users, while maintaining robust backend processing.</p>
                `,
                image: "/api/placeholder/800/500",
                github: "https://github.com/harshnevse/project4"
            },
            {
                id: 5,
                title: "Project 5 - Native Mobile App",
                category: "mobile",
                tags: ["React Native", "GraphQL"],
                description: `
                    <p>A native mobile application developed with React Native and GraphQL. This project demonstrates my skills in creating high-performance mobile experiences with efficient data handling.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Native UI components</li>
                        <li>Efficient data fetching with GraphQL</li>
                        <li>Offline support</li>
                        <li>Custom animations</li>
                        <li>Deep linking</li>
                    </ul>
                    <p>The app provides users with a seamless experience that feels truly native, while maintaining a single codebase for both iOS and Android platforms.</p>
                `,
                image: "/api/placeholder/800/500",
                github: "https://github.com/harshnevse/project5"
            },
            {
                id: 6,
                title: "Project 6 - Computer Vision System",
                category: "ai",
                tags: ["PyTorch", "Computer Vision"],
                description: `
                    <p>An image recognition system built with PyTorch that uses deep learning to classify and analyze visual data. This project showcases my abilities in computer vision and deep learning.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Convolutional neural networks</li>
                        <li>Transfer learning from pre-trained models</li>
                        <li>Data augmentation techniques</li>
                        <li>Real-time processing</li>
                        <li>Model optimization for edge devices</li>
                    </ul>
                    <p>The system achieves high accuracy rates while maintaining processing speeds suitable for real-time applications, even on devices with limited computational resources.</p>
                `,
                image: "/api/placeholder/800/500",
                github: "https://github.com/harshnevse/project6"
            },
            {
                id: 7,
                title: "Project 7 - Enterprise Application",
                category: "web",
                tags: ["Angular", "Spring Boot", "MySQL"],
                description: `
                    <p>A robust enterprise application built with Angular, Spring Boot, and MySQL. This project demonstrates my ability to create secure, scalable solutions for business needs.</p>
                    <p>Key features include:</p>
                    <ul>
                        <li>Role-based access control</li>
                        <li>Advanced data visualization</li>
                        <li>Workflow automation</li>
                        <li>Report generation</li>
                        <li>Integration with third-party services</li>
                    </ul>
                    <p>The application follows enterprise-grade architectural patterns and security best practices, making it suitable for deployment in organizations with strict compliance requirements.</p>
                `,
                image: "/api/placeholder/800/500",
                github: "https://github.com/harshnevse/project7"
            }
        ];
        
        // DOM Elements
        const projectTabs = document.querySelectorAll('.project-tab');
        const projectCards = document.querySelectorAll('.project-card');
        const projectsGrid = document.querySelector('.projects-grid');
        const projectSpotlight = document.getElementById('projectSpotlight');
        const spotlightTitle = document.getElementById('spotlightTitle');
        const spotlightImg = document.getElementById('spotlightImg');
        const spotlightTags = document.getElementById('spotlightTags');
        const spotlightDesc = document.getElementById('spotlightDesc');
        const spotlightGithub = document.getElementById('spotlightGithub');
        const spotlightClose = document.getElementById('spotlightClose');
        const viewDetailsButtons = document.querySelectorAll('.view-details');
        const progressBar = document.getElementById('progressBar');
        const header = document.getElementById('header');
        const cursor = document.querySelector('.cursor');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        // Project Filtering
        projectTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                projectTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Get filter value
                const filter = tab.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Add animation to visible cards
                const visibleCards = document.querySelectorAll('.project-card[style="display: block"]');
                visibleCards.forEach((card, index) => {
                    card.style.animationDelay = `${0.1 * index}s`;
                });
            });
        });
        
        // Project Spotlight
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get project ID
                const projectId = button.getAttribute('data-project');
                
                // Find project data
                const project = projectData.find(p => p.id === parseInt(projectId));
                
                if (project) {
                    // Set spotlight content
                    spotlightTitle.textContent = project.title;
                    spotlightImg.src = project.image;
                    spotlightImg.alt = project.title;
                    
                    // Clear and populate tags
                    spotlightTags.innerHTML = '';
                    project.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.classList.add('spotlight-tag');
                        tagElement.textContent = tag;
                        spotlightTags.appendChild(tagElement);
                    });
                    
                    // Set description
                    spotlightDesc.innerHTML = project.description;
                    
                    // Set GitHub link
                    spotlightGithub.href = project.github;
                    
                    // Show spotlight
                    projectSpotlight.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close spotlight
        spotlightClose.addEventListener('click', () => {
            projectSpotlight.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close spotlight when clicking outside
        projectSpotlight.addEventListener('click', (e) => {
            if (e.target === projectSpotlight) {
                projectSpotlight.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Scroll Progress
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrolled + '%';
            
            // Header scroll effect
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Add fadeUp animation to elements as they come into view
            const fadeElements = document.querySelectorAll('.fadeUp');
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Custom Cursor
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
        
        // Add hover effect for links and buttons
        const hoverElements = document.querySelectorAll('a, button, .project-card');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.mixBlendMode = 'difference';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.mixBlendMode = 'difference';
            });
        });
        
        // Mobile Navigation
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile nav when clicking links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Initialize animations on load
        window.addEventListener('load', () => {
            document.querySelectorAll('.fadeUp').forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
            });
            
            setTimeout(() => {
                document.querySelectorAll('.hero .fadeUp').forEach(element => {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                });
            }, 500);
        });