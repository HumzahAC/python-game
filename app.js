// UNEMPLOYED Python Game Showcase Application Logic

// Game data and configuration
const gameData = {
    ascii_frames: [
        `    UNEMPLOYED
    ═══════════
    Loading...
    [░░░░░░░░░░] 0%`,
        `    UNEMPLOYED
    ═══════════
    Loading...
    [██░░░░░░░░] 20%`,
        `    UNEMPLOYED
    ═══════════
    Loading...
    [████░░░░░░] 40%`,
        `    UNEMPLOYED
    ═══════════
    Loading...
    [██████░░░░] 60%`,
        `    UNEMPLOYED
    ═══════════
    Loading...
    [████████░░] 80%`,
        `    UNEMPLOYED
    ═══════════
    System Ready!
    [██████████] 100%`,
        `    UNEMPLOYED
    ═══════════
    Press START to begin
    your adventure...`,
        `    UNEMPLOYED
    ═══════════
    🎮 GAME READY 🎮
    Welcome, Player!`
    ],
    
    quiz_questions: {
        astronaut: {
            question: "What is the largest volcano in our solar system?",
            options: [
                { text: "Olympus Mons (Mars)", correct: true },
                { text: "Mount Vesuvius (Earth)", correct: false },
                { text: "Io Volcano (Jupiter's Moon)", correct: false }
            ]
        },
        scroller: {
            question: "Which social media platform was launched first?",
            options: [
                { text: "Facebook", correct: false },
                { text: "Friendster", correct: true },
                { text: "MySpace", correct: false }
            ]
        },
        consultant: {
            question: "What is the time complexity of binary search?",
            options: [
                { text: "O(n)", correct: false },
                { text: "O(log n)", correct: true },
                { text: "O(n²)", correct: false }
            ]
        },
        whisperer: {
            question: "Which animal has the longest pregnancy period?",
            options: [
                { text: "Elephant", correct: true },
                { text: "Blue Whale", correct: false },
                { text: "Giraffe", correct: false }
            ]
        }
    },

    code_examples: {
        quiz: `# Quiz System Implementation
quiz_data = {
    "Junior Astronaut": {
        "questions": [
            "What is the largest volcano in our solar system?",
            "Which planet rotates the fastest?", 
            "What is the main component of the Sun?"
        ],
        "answers": ["Olympus Mons", "Jupiter", "Hydrogen"]
    },
    "Chief Doom Scroller": {
        "questions": [
            "Who holds the record for most Oscar wins?",
            "Which social media platform launched first?",
            "What was the most talked about fashion moment?"
        ],
        "answers": ["Walt Disney", "Friendster", "Met Gala"]
    }
}

def conduct_quiz(career_path):
    """Manage quiz flow for selected career"""
    questions = quiz_data[career_path]["questions"]
    score = 0
    
    for i, question in enumerate(questions):
        user_answer = input(f"Q{i+1}: {question}\\n> ")
        if validate_answer(user_answer, career_path, i):
            score += 1
            
    return calculate_result(score, len(questions))`,

        matrix: `# Matrix Decision Point
import tkinter as tk
from tkinter import messagebox

def matrix_choice():
    """Present the iconic red pill / blue pill choice"""
    
    choice_window = tk.Toplevel()
    choice_window.title("The Matrix Awaits")
    choice_window.configure(bg='black')
    
    # Matrix-style text
    matrix_label = tk.Label(
        choice_window,
        text="This is your last chance. After this, there is no going back.",
        fg='#00FF00',  # Matrix green
        bg='black',
        font=('Courier', 12)
    )
    matrix_label.pack(pady=20)
    
    def red_pill():
        """Choose the harsh reality"""
        messagebox.showinfo("Red Pill", "Welcome to the real world...")
        launch_code_cracker()
        
    def blue_pill():
        """Choose blissful ignorance"""
        messagebox.showinfo("Blue Pill", "Sweet dreams in the Matrix...")
        return_to_desktop()
    
    red_button = tk.Button(choice_window, text="Red Pill", 
                          command=red_pill, bg='red', fg='white')
    blue_button = tk.Button(choice_window, text="Blue Pill", 
                           command=blue_pill, bg='blue', fg='white')
    
    red_button.pack(side='left', padx=20, pady=20)
    blue_button.pack(side='right', padx=20, pady=20)`,

        cracker: `# Code Cracker Mini-Game
import random
import time

class CodeCracker:
    def __init__(self):
        self.target_code = self.generate_code()
        self.attempts = 0
        self.max_attempts = 10
        
    def generate_code(self):
        """Generate random 4-digit code"""
        return [random.randint(0, 9) for _ in range(4)]
        
    def check_guess(self, guess):
        """Analyze guess and provide feedback"""
        if len(guess) != 4:
            return "Invalid input: Code must be 4 digits"
            
        correct_digits = 0
        correct_positions = 0
        
        for i, digit in enumerate(guess):
            if digit == self.target_code[i]:
                correct_positions += 1
            elif digit in self.target_code:
                correct_digits += 1
                
        return f"Correct positions: {correct_positions}, Correct digits: {correct_digits}"
        
    def play_round(self):
        """Execute one round of code cracking"""
        print("🔓 CODE CRACKER INITIATED")
        print("Crack the 4-digit code to escape the Matrix!")
        
        while self.attempts < self.max_attempts:
            guess = input(f"Attempt {self.attempts + 1}/{self.max_attempts}: ")
            
            try:
                guess_digits = [int(d) for d in guess]
                result = self.check_guess(guess_digits)
                
                if guess_digits == self.target_code:
                    print("🎉 CODE CRACKED! You are THE ONE!")
                    return True
                else:
                    print(f"❌ {result}")
                    
            except ValueError:
                print("❌ Invalid input. Enter 4 digits.")
                
            self.attempts += 1
            
        print(f"💀 SYSTEM LOCKDOWN! The code was: {''.join(map(str, self.target_code))}")
        return False`,

        gui: `# GUI Setup and Window Management
import tkinter as tk
from tkinter import ttk
import tkinter.font as tkFont

class UnemployedGame:
    def __init__(self):
        self.root = tk.Tk()
        self.setup_main_window()
        self.setup_styling()
        
    def setup_main_window(self):
        """Configure the main game window"""
        self.root.title("UNEMPLOYED - Job Application Simulator")
        self.root.geometry("800x600")
        self.root.configure(bg='#C0C0C0')  # Windows XP gray
        
        # Set window icon (if available)
        try:
            self.root.iconbitmap('unemployed_icon.ico')
        except:
            pass  # Fallback gracefully
            
        # Center the window on screen
        self.center_window()
        
    def setup_styling(self):
        """Apply Windows XP-style theming"""
        self.style = ttk.Style()
        self.style.theme_use('clam')  # Closest to XP
        
        # Custom fonts
        self.title_font = tkFont.Font(family="Arial", size=16, weight="bold")
        self.button_font = tkFont.Font(family="Arial", size=10)
        self.mono_font = tkFont.Font(family="Courier New", size=9)
        
        # Configure styles
        self.style.configure('XP.TButton', 
                           font=self.button_font,
                           relief='raised')
                           
    def center_window(self):
        """Center the window on the user's screen"""
        self.root.update_idletasks()
        width = self.root.winfo_width()
        height = self.root.winfo_height()
        x = (self.root.winfo_screenwidth() // 2) - (width // 2)
        y = (self.root.winfo_screenheight() // 2) - (height // 2)
        self.root.geometry(f'{width}x{height}+{x}+{y}')
        
    def create_desktop_simulation(self):
        """Simulate Windows XP desktop environment"""
        desktop_frame = tk.Frame(self.root, bg='#008080')  # XP teal
        desktop_frame.pack(fill='both', expand=True)
        
        # Desktop wallpaper effect
        wallpaper_label = tk.Label(desktop_frame, 
                                 text="Windows XP Professional",
                                 font=self.title_font, 
                                 fg='white', 
                                 bg='#008080')
        wallpaper_label.place(relx=0.02, rely=0.95)
        
        # Taskbar simulation
        taskbar = tk.Frame(desktop_frame, bg='#245EDC', height=40)
        taskbar.pack(side='bottom', fill='x')
        
        start_button = tk.Button(taskbar, text='Start', 
                               font=self.button_font,
                               command=self.show_start_menu)
        start_button.pack(side='left', padx=5, pady=5)
        
    def launch(self):
        """Start the game application"""
        print("🎮 UNEMPLOYED Game Starting...")
        self.create_login_screen()
        self.root.mainloop()`
    }
};

// Application state
let currentFrameIndex = 0;
let animationInterval;
let quizAttempted = false;
let currentQuizScore = 0;

// Initialize application
function initApp() {
    console.log('🎮 Initializing UNEMPLOYED Game Showcase...');
    
    setupEventListeners();
    setupScrollNavigation();
    setupCodeTabs();
    setupQuizInteraction();
    startASCIIAnimation();
    setupIntersectionObserver();
    
    console.log('✅ Application initialized successfully');
}

// Event listeners setup
function setupEventListeners() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href);
                updateActiveNavLink(link);
            }
        });
    });

    // Hero action buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href);
            }
        });
    });

    // Download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const downloadType = btn.getAttribute('data-type');
            handleDownload(downloadType);
        });
    });

    // Career card interactions
    const careerCards = document.querySelectorAll('.career-card');
    careerCards.forEach(card => {
        card.addEventListener('click', () => {
            const career = card.getAttribute('data-career');
            showCareerDetails(career);
        });
    });

    // Flow step interactions
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach(step => {
        step.addEventListener('click', () => {
            const stepNum = step.getAttribute('data-step');
            showStepDetails(stepNum);
        });
    });

    // Window control interactions
    const windowControls = document.querySelectorAll('.control');
    windowControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();
            handleWindowControl(control);
        });
    });
}

// ASCII art animation in hero section
function startASCIIAnimation() {
    const asciiDisplay = document.getElementById('ascii-display');
    if (!asciiDisplay) return;
    
    let frameIndex = 0;
    const frames = gameData.ascii_frames;
    
    const animateFrame = () => {
        if (frameIndex < frames.length) {
            asciiDisplay.textContent = frames[frameIndex];
            frameIndex++;
        } else {
            // Loop back to loading animation after showing final frame
            setTimeout(() => {
                frameIndex = 0;
                setTimeout(animateFrame, 3000); // Restart after 3 seconds
            }, 2000);
            return;
        }
        
        setTimeout(animateFrame, frameIndex < frames.length - 2 ? 800 : 2000);
    };
    
    // Start animation after a brief delay
    setTimeout(animateFrame, 1000);
}

// Code tab switching functionality
function setupCodeTabs() {
    const tabs = document.querySelectorAll('.code-tab');
    const codeBlocks = document.querySelectorAll('.code-block');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetCode = tab.getAttribute('data-code');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active code block
            codeBlocks.forEach(block => {
                block.classList.remove('active');
                if (block.getAttribute('data-code') === targetCode) {
                    block.classList.add('active');
                    // Update code content
                    const codeElement = block.querySelector('code');
                    if (codeElement && gameData.code_examples[targetCode]) {
                        codeElement.textContent = gameData.code_examples[targetCode];
                    }
                }
            });
            
            // Add visual feedback
            tab.style.transform = 'scale(0.95)';
            setTimeout(() => {
                tab.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Interactive quiz functionality  
function setupQuizInteraction() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizResult = document.getElementById('quiz-result');
    const quizScore = document.getElementById('quiz-score');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (quizAttempted) return; // Prevent multiple attempts
            
            quizAttempted = true;
            const isCorrect = option.getAttribute('data-correct') === 'true';
            
            // Remove existing classes
            quizOptions.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
                opt.style.pointerEvents = 'none';
            });
            
            // Show results
            if (isCorrect) {
                option.classList.add('correct');
                quizResult.innerHTML = '🎉 Correct! You have excellent space knowledge!';
                quizResult.className = 'quiz-result success';
                currentQuizScore = 1;
                
                // Show additional career info
                setTimeout(() => {
                    showCareerPathInfo('astronaut');
                }, 1500);
            } else {
                option.classList.add('incorrect');
                // Show correct answer
                quizOptions.forEach(opt => {
                    if (opt.getAttribute('data-correct') === 'true') {
                        opt.classList.add('correct');
                    }
                });
                quizResult.innerHTML = '❌ Not quite right. The correct answer is Olympus Mons on Mars!';
                quizResult.className = 'quiz-result error';
                currentQuizScore = 0;
            }
            
            quizScore.textContent = currentQuizScore;
            
            // Reset quiz after 5 seconds
            setTimeout(() => {
                resetQuiz();
            }, 5000);
        });
    });
}

// Reset quiz functionality
function resetQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizResult = document.getElementById('quiz-result');
    const quizScore = document.getElementById('quiz-score');
    
    quizAttempted = false;
    currentQuizScore = 0;
    
    quizOptions.forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
        opt.style.pointerEvents = 'auto';
    });
    
    quizResult.innerHTML = '';
    quizResult.className = 'quiz-result';
    quizScore.textContent = '0';
    
    // Cycle through different quiz questions
    const currentQuestion = document.getElementById('quiz-question');
    const questionKeys = Object.keys(gameData.quiz_questions);
    const randomKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];
    const questionData = gameData.quiz_questions[randomKey];
    
    currentQuestion.textContent = questionData.question;
    
    // Update options
    quizOptions.forEach((option, index) => {
        if (questionData.options[index]) {
            option.textContent = questionData.options[index].text;
            option.setAttribute('data-correct', questionData.options[index].correct);
        }
    });
}

// Navigation and scrolling
function setupScrollNavigation() {
    // Smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                scrollToSection(href);
            }
        });
    });
    
    // Update nav on scroll
    window.addEventListener('scroll', throttle(updateNavigationOnScroll, 100));
}

function scrollToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const headerHeight = document.querySelector('.main-header')?.offsetHeight || 80;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function updateNavigationOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Download handling
function handleDownload(downloadType) {
    const downloadMessages = {
        executable: {
            title: '🎮 UNEMPLOYED Game Download',
            message: `Preparing to download UNEMPLOYED.exe...

GAME FEATURES:
• Complete Python Tkinter implementation
• All 4 career paths with unique quizzes  
• Windows XP nostalgic interface
• Matrix decision mechanics
• Code-cracking puzzle finale
• Full source code included

FILE SIZE: 2.3 MB
REQUIREMENTS: Python 3.7+ with Tkinter

The download will begin shortly. Enjoy your job hunting adventure!`,
            filename: 'UNEMPLOYED_Game_v1.0.exe'
        },
        source: {
            title: '📦 Source Code Download', 
            message: `Downloading UNEMPLOYED source code...

PACKAGE INCLUDES:
• Complete Python source files
• Detailed code documentation
• Setup and installation guide
• Asset files and resources
• Developer API reference
• Example extensions

FILE SIZE: 1.8 MB
FORMAT: ZIP Archive

Perfect for developers wanting to explore the code structure!`,
            filename: 'UNEMPLOYED_SourceCode_v1.0.zip'
        }
    };
    
    const download = downloadMessages[downloadType] || downloadMessages.executable;
    
    if (confirm(download.message)) {
        simulateDownload(download.filename, downloadType);
    }
}

function simulateDownload(filename, type) {
    const downloadBtn = document.querySelector(`.download-btn[data-type="${type}"]`);
    if (!downloadBtn) return;
    
    const originalText = downloadBtn.innerHTML;
    
    // Show downloading state
    downloadBtn.innerHTML = '<span class="btn-icon">⬇️</span>Downloading...';
    downloadBtn.style.pointerEvents = 'none';
    downloadBtn.classList.add('downloading');
    
    // Simulate download progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Download complete
            downloadBtn.innerHTML = '<span class="btn-icon">✅</span>Download Complete!';
            downloadBtn.classList.remove('downloading');
            
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.style.pointerEvents = 'auto';
                
                // Show follow-up message
                setTimeout(() => {
                    alert(`🎉 Download completed successfully!\n\n${filename} is ready to run.\n\nThank you for downloading UNEMPLOYED! Don't forget to star the GitHub repository if you enjoy the game.`);
                }, 500);
            }, 2000);
            
            return;
        }
        
        downloadBtn.innerHTML = `<span class="btn-icon">⬇️</span>Downloading... ${Math.floor(progress)}%`;
    }, 200);
}

// Career and step details
function showCareerDetails(career) {
    const careerData = {
        astronaut: {
            name: 'Junior Astronaut',
            description: 'Explore the cosmos through challenging space and astronomy questions. Test your knowledge of planets, stars, and the mysteries of the universe.',
            skills: ['Astronomical Knowledge', 'Space Physics', 'Planetary Science', 'Cosmic Phenomena'],
            difficulty: 'Intermediate'
        },
        scroller: {
            name: 'Chief Doom Scroller', 
            description: 'Master the art of endless scrolling through social media trivia and pop culture questions. Perfect for the chronically online.',
            skills: ['Pop Culture Awareness', 'Social Media Trends', 'Celebrity Knowledge', 'Viral Content'],
            difficulty: 'Beginner'
        },
        consultant: {
            name: 'Graduate Data Consultant',
            description: 'Dive deep into technical data science concepts, algorithms, and business intelligence. For the analytically minded.',
            skills: ['Data Analysis', 'Algorithm Design', 'Statistical Modeling', 'Business Intelligence'],
            difficulty: 'Advanced'
        },
        whisperer: {
            name: 'Animal Whisperer',
            description: 'Connect with nature through quirky animal facts and behavioral science. Learn the secrets of the animal kingdom.',
            skills: ['Animal Behavior', 'Wildlife Biology', 'Conservation Science', 'Zoology'],
            difficulty: 'Intermediate'
        }
    };
    
    const data = careerData[career];
    if (data) {
        const message = `🚀 CAREER PATH: ${data.name}

${data.description}

🎯 REQUIRED SKILLS:
${data.skills.map(skill => `• ${skill}`).join('\n')}

📊 DIFFICULTY LEVEL: ${data.difficulty}

💡 TIP: Each career path has unique questions that test different domains of knowledge. Choose wisely!

Would you like to explore more career paths or learn about the technical implementation?`;

        alert(message);
    }
}

function showCareerPathInfo(career) {
    const info = `🎯 CAREER ANALYSIS: Junior Astronaut

You've demonstrated excellent space knowledge! This career path includes:

🌟 Quiz Topics:
• Solar system mechanics
• Planetary compositions  
• Astronomical phenomena
• Space exploration history

🚀 Game Implementation:
• Dynamic question selection
• Difficulty scaling
• Progress tracking
• Achievement system

Perfect for aspiring space enthusiasts and STEM professionals!`;
    
    setTimeout(() => {
        alert(info);
    }, 100);
}

function showStepDetails(stepNum) {
    const stepDetails = {
        1: 'USERNAME ENTRY\n\nThe journey begins with identity validation. Players enter their desired username, which becomes their identity throughout the simulation. Input validation ensures proper formatting.',
        2: 'WINDOWS XP DESKTOP\n\nExperience nostalgic computing with an authentic XP interface simulation. Complete with taskbar, desktop icons, and that familiar startup sound aesthetic.',
        3: 'LINKEDIN PORTAL\n\nAccess the professional networking gateway that leads to job opportunities. Navigate the corporate digital landscape with familiar social media mechanics.',
        4: 'CAREER TESTING\n\nProve your expertise across four distinct knowledge domains. Each career path features unique questions designed to test specialized knowledge.',
        5: 'MATRIX CHOICE\n\nThe pivotal moment where reality becomes questionable. Choose between the red pill (truth) and blue pill (ignorance) - each leading to different outcomes.',
        6: 'CODE CRACKER\n\nThe final challenge - a sophisticated number-guessing game where players must crack a 4-digit code to escape the Matrix and complete their journey.'
    };
    
    alert(`GAME FLOW STEP ${stepNum}\n\n${stepDetails[stepNum]}`);
}

// Window control simulation
function handleWindowControl(control) {
    if (control.classList.contains('minimize')) {
        // Minimize animation
        const gameWindow = document.querySelector('.game-window');
        gameWindow.style.transform = 'scale(0.1)';
        gameWindow.style.opacity = '0.5';
        
        setTimeout(() => {
            gameWindow.style.transform = 'scale(1)';
            gameWindow.style.opacity = '1';
            alert('📝 SYSTEM MESSAGE\n\nWindow minimized to taskbar!\n\n(In the actual game, this would minimize the window to the simulated XP taskbar)');
        }, 500);
        
    } else if (control.classList.contains('maximize')) {
        // Maximize animation
        const gameWindow = document.querySelector('.game-window');
        gameWindow.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            gameWindow.style.transform = 'scale(1)';
            alert('🖥️ SYSTEM MESSAGE\n\nWindow maximized!\n\n(In the actual game, this would expand the window to full screen)');
        }, 200);
        
    } else if (control.classList.contains('close')) {
        // Close confirmation
        if (confirm('⚠️ CLOSE CONFIRMATION\n\nAre you sure you want to quit UNEMPLOYED?\n\n(This would close the game in the actual application)')) {
            const gameWindow = document.querySelector('.game-window');
            gameWindow.style.transform = 'scale(0)';
            gameWindow.style.opacity = '0';
            
            setTimeout(() => {
                gameWindow.style.transform = 'scale(1)';
                gameWindow.style.opacity = '1';
                alert('🎮 GAME RESTARTED\n\nWelcome back to UNEMPLOYED!\n\n(Game window has been restored for demo purposes)');
            }, 1000);
        }
    }
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    if (!window.IntersectionObserver) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Special animations for specific elements
                if (entry.target.classList.contains('career-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, delay);
                }
                
                if (entry.target.classList.contains('highlight-card')) {
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll(
        '.career-card, .flow-step, .highlight-card, .insight-card, .tech-tag'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });
}

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Error handling
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
    console.log('ℹ️ Game showcase remains functional despite JavaScript errors');
});

// Performance monitoring
function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`📊 Page loaded in ${pageLoadTime}ms`);
        
        // Log game-specific metrics
        console.log('🎮 UNEMPLOYED Game Showcase Metrics:');
        console.log(`• ASCII Animation: ${gameData.ascii_frames.length} frames`);
        console.log(`• Interactive Elements: ${document.querySelectorAll('[data-career], [data-step], .quiz-option').length}`);
        console.log(`• Code Examples: ${Object.keys(gameData.code_examples).length}`);
    }
}

// Initialize application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initApp();
        setTimeout(() => {
            logPerformanceMetrics();
            console.log('🚀 UNEMPLOYED Game Showcase fully loaded and interactive!');
        }, 100);
    });
} else {
    initApp();
    setTimeout(() => {
        logPerformanceMetrics();
        console.log('🚀 UNEMPLOYED Game Showcase ready for exploration!');
    }, 100);
}

// Export for external use
window.UnemployedShowcase = {
    gameData,
    showCareerDetails,
    handleDownload,
    scrollToSection,
    version: 'v1.0 - Python Game Showcase'
};

// Welcome message
console.log(`
🎮 UNEMPLOYED PYTHON GAME SHOWCASE

✅ Interactive career path exploration
✅ Live code examples with syntax highlighting  
✅ Functional quiz system demonstration
✅ ASCII art animations
✅ Windows XP nostalgic interface simulation
✅ Matrix-themed decision mechanics
✅ Download functionality simulation

Ready to explore the ultimate job hunting adventure!
`);