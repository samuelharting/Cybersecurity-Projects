#!/usr/bin/env python3
"""
Password Strength Checker
A cybersecurity tool that evaluates password strength based on multiple criteria.

Scoring System:
- Length: +1 point per 4 characters (up to 12 characters max = 3 points)
- Character Types: +1 point each for:
  * Uppercase letters (A-Z)
  * Lowercase letters (a-z) 
  * Numbers (0-9)
  * Special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)

Total Score: 0-10 scale
"""

import re
import string

def check_password_strength(password):
    """
    Evaluate password strength and return score with detailed breakdown.
    
    Args:
        password (str): The password to evaluate
        
    Returns:
        tuple: (score, strength_level, details)
    """
    score = 0
    details = []
    
    # 1. Length scoring: +1 point per 4 characters (max 3 points for 12+ chars)
    length = len(password)
    length_points = min(length // 4, 3)  # Cap at 3 points
    score += length_points
    details.append(f"Length ({length} chars): +{length_points} points")
    
    # 2. Character type scoring: +1 point for each type present
    has_uppercase = bool(re.search(r'[A-Z]', password))
    has_lowercase = bool(re.search(r'[a-z]', password))
    has_numbers = bool(re.search(r'[0-9]', password))
    has_special = bool(re.search(r'[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]', password))
    
    if has_uppercase:
        score += 1
        details.append("Uppercase letters: +1 point")
    else:
        details.append("No uppercase letters: +0 points")
        
    if has_lowercase:
        score += 1
        details.append("Lowercase letters: +1 point")
    else:
        details.append("No lowercase letters: +0 points")
        
    if has_numbers:
        score += 1
        details.append("Numbers: +1 point")
    else:
        details.append("No numbers: +0 points")
        
    if has_special:
        score += 1
        details.append("Special characters: +1 point")
    else:
        details.append("No special characters: +0 points")
    
    # 3. Determine strength level based on score
    if score >= 8:
        strength_level = "Very Strong"
    elif score >= 6:
        strength_level = "Strong"
    elif score >= 4:
        strength_level = "Moderate"
    elif score >= 2:
        strength_level = "Weak"
    else:
        strength_level = "Very Weak"
    
    return score, strength_level, details

def display_results(password, score, strength_level, details):
    """Display password strength results in a user-friendly format."""
    print("\n" + "="*50)
    print("PASSWORD STRENGTH ANALYSIS")
    print("="*50)
    print(f"Password: {'*' * len(password)}")  # Hide actual password
    print(f"Score: {score}/10")
    print(f"Strength: {strength_level}")
    print("\nDetailed Breakdown:")
    for detail in details:
        print(f"  • {detail}")
    print("="*50)

def get_security_recommendations(score):
    """Provide security recommendations based on password score."""
    recommendations = []
    
    if score < 8:
        recommendations.append("Consider making your password longer (12+ characters)")
    if score < 6:
        recommendations.append("Include a mix of uppercase and lowercase letters")
        recommendations.append("Add numbers and special characters")
    if score < 4:
        recommendations.append("Avoid common words and predictable patterns")
        recommendations.append("Use a unique password for each account")
    
    if recommendations:
        print("\n🔐 Security Recommendations:")
        for rec in recommendations:
            print(f"  • {rec}")

def main():
    """Main function to run the password strength checker."""
    print("🔒 Password Strength Checker")
    print("This tool evaluates password security on a 0-10 scale")
    print("Note: Your password will not be stored or transmitted\n")
    
    while True:
        try:
            # Get password input (hidden for security)
            import getpass
            password = getpass.getpass("Enter password to check (input hidden): ")
            
            if not password:
                print("Please enter a password.")
                continue
                
            # Analyze password strength
            score, strength_level, details = check_password_strength(password)
            
            # Display results
            display_results(password, score, strength_level, details)
            
            # Provide recommendations
            get_security_recommendations(score)
            
            # Ask if user wants to check another password
            print("\n" + "-"*50)
            another = input("Check another password? (y/n): ").lower().strip()
            if another not in ['y', 'yes']:
                break
                
        except KeyboardInterrupt:
            print("\n\nGoodbye! Stay secure! 🛡️")
            break
        except Exception as e:
            print(f"Error: {e}")
            continue
    
    print("\nThank you for using Password Strength Checker!")

if __name__ == "__main__":
    main()
