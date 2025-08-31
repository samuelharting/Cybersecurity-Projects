/**
 * Password Strength Checker - JavaScript Implementation
 * Real-time password analysis with visual feedback
 */

class PasswordStrengthChecker {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.updateDisplay(0, 'Enter password', []);
    }

    initializeElements() {
        // Input elements
        this.passwordInput = document.getElementById('password-input');
        this.toggleBtn = document.getElementById('toggle-visibility');
        
        // Display elements
        this.scoreValue = document.getElementById('score-value');
        this.strengthLevel = document.getElementById('strength-level');
        this.progressBar = document.getElementById('progress-bar');
        
        // Criteria elements
        this.lengthScore = document.getElementById('length-score');
        this.uppercaseScore = document.getElementById('uppercase-score');
        this.lowercaseScore = document.getElementById('lowercase-score');
        this.numbersScore = document.getElementById('numbers-score');
        this.specialScore = document.getElementById('special-score');
        
        this.lengthCriteria = document.getElementById('length-criteria');
        this.uppercaseCriteria = document.getElementById('uppercase-criteria');
        this.lowercaseCriteria = document.getElementById('lowercase-criteria');
        this.numbersCriteria = document.getElementById('numbers-criteria');
        this.specialCriteria = document.getElementById('special-criteria');
        
        this.lengthStatus = document.getElementById('length-status');
        this.uppercaseStatus = document.getElementById('uppercase-status');
        this.lowercaseStatus = document.getElementById('lowercase-status');
        this.numbersStatus = document.getElementById('numbers-status');
        this.specialStatus = document.getElementById('special-status');
        
        // Recommendations
        this.recommendationsList = document.getElementById('recommendations-list');
        
        // Strength indicators
        this.indicators = document.querySelectorAll('.indicator');
    }

    bindEvents() {
        // Real-time password analysis
        this.passwordInput.addEventListener('input', (e) => {
            this.analyzePassword(e.target.value);
        });

        // Toggle password visibility
        this.toggleBtn.addEventListener('click', () => {
            this.togglePasswordVisibility();
        });

        // Clear analysis when input is cleared
        this.passwordInput.addEventListener('focus', () => {
            if (!this.passwordInput.value) {
                this.resetAnalysis();
            }
        });

        // Example password buttons
        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const password = btn.dataset.password;
                this.setPassword(password);
            });
        });

        // Clear password button
        document.getElementById('clear-password-btn').addEventListener('click', () => {
            this.setPassword('');
        });

        // Random test button
        document.getElementById('generate-random-btn').addEventListener('click', () => {
            this.generateRandomTest();
        });
    }

    analyzePassword(password) {
        if (!password) {
            this.resetAnalysis();
            return;
        }

        const analysis = this.calculateStrength(password);
        this.updateDisplay(analysis.score, analysis.strengthLevel, analysis.details);
        this.updateCriteria(analysis.criteria);
        this.updateRecommendations(analysis.recommendations);
        this.updateProgressBar(analysis.score);
        this.updateStrengthIndicators(analysis.strengthLevel);
    }

    calculateStrength(password) {
        let score = 0;
        const details = [];
        const criteria = {};
        
        // 1. Length scoring: +1 point per 4 characters (max 3 points for 12+ chars)
        const length = password.length;
        const lengthPoints = Math.min(Math.floor(length / 4), 3);
        score += lengthPoints;
        details.push(`Length (${length} chars): +${lengthPoints} points`);
        criteria.length = {
            passed: lengthPoints > 0,
            points: lengthPoints,
            max: 3
        };

        // 2. Character type scoring: +1 point for each type present
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);

        if (hasUppercase) {
            score += 1;
            details.push("Uppercase letters: +1 point");
        } else {
            details.push("No uppercase letters: +0 points");
        }
        criteria.uppercase = { passed: hasUppercase, points: hasUppercase ? 1 : 0, max: 1 };

        if (hasLowercase) {
            score += 1;
            details.push("Lowercase letters: +1 point");
        } else {
            details.push("No lowercase letters: +0 points");
        }
        criteria.lowercase = { passed: hasLowercase, points: hasLowercase ? 1 : 0, max: 1 };

        if (hasNumbers) {
            score += 1;
            details.push("Numbers: +1 point");
        } else {
            details.push("No numbers: +0 points");
        }
        criteria.numbers = { passed: hasNumbers, points: hasNumbers ? 1 : 0, max: 1 };

        if (hasSpecial) {
            score += 1;
            details.push("Special characters: +1 point");
        } else {
            details.push("No special characters: +0 points");
        }
        criteria.special = { passed: hasSpecial, points: hasSpecial ? 1 : 0, max: 1 };

        // 3. Determine strength level based on score (max possible is 7)
        let strengthLevel;
        if (score >= 7) {
            strengthLevel = "very-strong";
        } else if (score >= 5) {
            strengthLevel = "strong";
        } else if (score >= 3) {
            strengthLevel = "moderate";
        } else if (score >= 1) {
            strengthLevel = "weak";
        } else {
            strengthLevel = "very-weak";
        }

        // 4. Generate recommendations
        const recommendations = this.generateRecommendations(score, criteria, length);

        return {
            score,
            strengthLevel,
            details,
            criteria,
            recommendations
        };
    }

    generateRecommendations(score, criteria, length) {
        const recommendations = [];

        if (score < 8) {
            if (length < 12) {
                recommendations.push("Consider making your password longer (12+ characters recommended)");
            }
        }

        if (score < 6) {
            if (!criteria.uppercase.passed) {
                recommendations.push("Include uppercase letters (A-Z)");
            }
            if (!criteria.lowercase.passed) {
                recommendations.push("Include lowercase letters (a-z)");
            }
            if (!criteria.numbers.passed) {
                recommendations.push("Add numbers (0-9)");
            }
            if (!criteria.special.passed) {
                recommendations.push("Include special characters (!@#$%^&*)");
            }
        }

        if (score < 4) {
            recommendations.push("Avoid common words and predictable patterns");
            recommendations.push("Use a unique password for each account");
        }

        if (length < 8) {
            recommendations.push("Password should be at least 8 characters long");
        }

        if (recommendations.length === 0) {
            recommendations.push("Excellent! Your password meets all security criteria");
        }

        return recommendations;
    }

    updateDisplay(score, strengthLevel, details) {
        this.scoreValue.textContent = `${score}/7`;
        
        const strengthText = this.getStrengthText(strengthLevel);
        this.strengthLevel.textContent = strengthText;
        this.strengthLevel.className = `strength-level ${strengthLevel}`;
    }

    updateCriteria(criteria) {
        // Length criteria
        this.updateCriteriaItem(
            this.lengthCriteria,
            this.lengthScore,
            this.lengthStatus,
            criteria.length.passed,
            criteria.length.points,
            criteria.length.max
        );

        // Character type criteria
        this.updateCriteriaItem(
            this.uppercaseCriteria,
            this.uppercaseScore,
            this.uppercaseStatus,
            criteria.uppercase.passed,
            criteria.uppercase.points,
            criteria.uppercase.max
        );

        this.updateCriteriaItem(
            this.lowercaseCriteria,
            this.lowercaseScore,
            this.lowercaseStatus,
            criteria.lowercase.passed,
            criteria.lowercase.points,
            criteria.lowercase.max
        );

        this.updateCriteriaItem(
            this.numbersCriteria,
            this.numbersScore,
            this.numbersStatus,
            criteria.numbers.passed,
            criteria.numbers.points,
            criteria.numbers.max
        );

        this.updateCriteriaItem(
            this.specialCriteria,
            this.specialScore,
            this.specialStatus,
            criteria.special.passed,
            criteria.special.points,
            criteria.special.max
        );
    }

    updateCriteriaItem(criteriaElement, scoreElement, statusElement, passed, points, maxPoints) {
        // Update score text
        scoreElement.textContent = `${points}/${maxPoints} points`;
        
        // Update visual state
        criteriaElement.className = `criteria-item ${passed ? 'passed' : 'failed'}`;
        
        // Update status icon
        statusElement.innerHTML = passed 
            ? '<i class="fas fa-check"></i>' 
            : '<i class="fas fa-times"></i>';
    }

    updateRecommendations(recommendations) {
        this.recommendationsList.innerHTML = '';
        
        recommendations.forEach(recommendation => {
            const li = document.createElement('li');
            li.textContent = recommendation;
            this.recommendationsList.appendChild(li);
        });
    }

    updateProgressBar(score) {
        const percentage = (score / 7) * 100;
        this.progressBar.style.width = `${percentage}%`;
    }

    updateStrengthIndicators(strengthLevel) {
        // Reset all indicators
        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Activate current strength level
        const activeIndicator = document.querySelector(`.indicator.${strengthLevel}`);
        if (activeIndicator) {
            activeIndicator.classList.add('active');
        }
    }

    getStrengthText(strengthLevel) {
        const strengthMap = {
            'very-weak': 'Very Weak',
            'weak': 'Weak',
            'moderate': 'Moderate',
            'strong': 'Strong',
            'very-strong': 'Very Strong'
        };
        return strengthMap[strengthLevel] || 'Enter password';
    }

    togglePasswordVisibility() {
        const isPassword = this.passwordInput.type === 'password';
        this.passwordInput.type = isPassword ? 'text' : 'password';
        
        const icon = this.toggleBtn.querySelector('i');
        icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
        
        this.toggleBtn.title = isPassword ? 'Hide password' : 'Show password';
    }

    resetAnalysis() {
        this.updateDisplay(0, 'Enter password', []);
        this.updateProgressBar(0);
        
        // Reset all criteria to failed state
        const allCriteria = [
            { element: this.lengthCriteria, score: this.lengthScore, status: this.lengthStatus, max: 3 },
            { element: this.uppercaseCriteria, score: this.uppercaseScore, status: this.uppercaseStatus, max: 1 },
            { element: this.lowercaseCriteria, score: this.lowercaseScore, status: this.lowercaseStatus, max: 1 },
            { element: this.numbersCriteria, score: this.numbersScore, status: this.numbersStatus, max: 1 },
            { element: this.specialCriteria, score: this.specialScore, status: this.specialStatus, max: 1 }
        ];

        allCriteria.forEach(criteria => {
            this.updateCriteriaItem(criteria.element, criteria.score, criteria.status, false, 0, criteria.max);
        });

        // Reset indicators
        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Reset recommendations
        this.recommendationsList.innerHTML = '<li>Enter a password to see personalized recommendations</li>';
    }

    setPassword(password) {
        this.passwordInput.value = password;
        this.passwordInput.focus();
        this.analyzePassword(password);
        
        // Add a subtle animation to show the password was set
        this.passwordInput.style.transform = 'scale(1.02)';
        setTimeout(() => {
            this.passwordInput.style.transform = 'scale(1)';
        }, 200);
    }

    generateRandomTest() {
        const randomExamples = [
            "abc123",           // Weak
            "MySecret2024!",    // Very Strong
            "hello",            // Very Weak
            "PASSWORD123",      // Moderate
            "p@ssW0rd!",        // Strong
            "SuperSecurePass9#", // Very Strong
            "123456789",        // Weak
            "StrongPassword1@", // Very Strong
            "weakpass",         // Very Weak
            "Moderate1",        // Moderate
        ];
        
        const randomPassword = randomExamples[Math.floor(Math.random() * randomExamples.length)];
        this.setPassword(randomPassword);
    }
}

// Initialize the password strength checker when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PasswordStrengthChecker();
});

// Add some utility functions for enhanced user experience
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus password input
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('password-input').focus();
        }
        
        // Escape to clear password input
        if (e.key === 'Escape') {
            const passwordInput = document.getElementById('password-input');
            if (document.activeElement === passwordInput) {
                passwordInput.value = '';
                passwordInput.dispatchEvent(new Event('input'));
            }
        }
    });

    // Add copy to clipboard functionality (for generated secure passwords in future)
    const addCopyToClipboard = (text) => {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((resolve, reject) => {
                document.execCommand('copy') ? resolve() : reject();
                textArea.remove();
            });
        }
    };

    // Prevent form submission on Enter (if wrapped in a form later)
    document.getElementById('password-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});
