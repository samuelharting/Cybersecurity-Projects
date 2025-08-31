# 🔒 Password Strength Checker

A professional web-based cybersecurity tool that evaluates password strength in real-time using industry-standard security criteria.

## 🌟 Features

### 🎯 Real-Time Analysis
- **Live feedback** as you type - no button clicks required
- **Visual progress bar** showing strength progression
- **Color-coded strength levels** (Very Weak → Very Strong)
- **Detailed scoring breakdown** with explanations

### 🔐 Security Scoring System
- **Length scoring**: +1 point per 4 characters (max 3 points for 12+ chars)
- **Character diversity**: +1 point each for:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (!@#$%^&*)
- **Total scale**: 0-7 points with clear strength categories

### 🎨 Modern Web Interface
- **Professional dark theme** optimized for cybersecurity aesthetics
- **Responsive design** - works on desktop, tablet, and mobile
- **Password visibility toggle** for user convenience
- **Smooth animations** and visual feedback
- **Accessibility features** including keyboard shortcuts

### 🛡️ Privacy & Security
- **100% client-side processing** - passwords never leave your browser
- **No data transmission** or storage
- **Secure input handling** with hidden password display
- **Clear privacy messaging** to build user trust

## 🚀 Live Demo

Simply open `index.html` in any modern web browser to start using the tool immediately.

## 📁 Project Structure

```
Password-Strength-Checker/
├── index.html              # Main HTML structure
├── style.css               # Modern CSS styling with dark theme
├── script.js               # JavaScript password analysis logic
├── password_strength_checker.py  # Original Python CLI version
└── README.md               # This file
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup and accessibility
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - Real-time password analysis and DOM manipulation
- **Font Awesome** - Professional iconography
- **Google Fonts** - Inter typeface for modern typography

## 🎯 Cybersecurity Principles Demonstrated

1. **Password Security Standards** - Implementation of industry-standard password complexity requirements
2. **Client-Side Security** - No sensitive data transmission
3. **User Education** - Real-time feedback helps users understand password security
4. **Security UX** - Balance between security and usability
5. **Privacy by Design** - Built-in privacy protections

## 📊 Scoring Algorithm

The tool evaluates passwords on a 0-7 scale:

| Score | Strength Level | Description |
|-------|---------------|-------------|
| 0     | Very Weak     | No security, easily cracked |
| 1-2   | Weak          | Basic requirements not met |
| 3-4   | Moderate      | Decent but could be stronger |
| 5-6   | Strong        | Good security practices |
| 7     | Very Strong   | Excellent security, recommended |

## 🔍 Algorithm Details

### Length Scoring (0-3 points)
- +1 point for every 4 characters
- Maximum 3 points (achieved at 12+ characters)
- Encourages longer passwords for better security

### Character Type Scoring (0-4 points)
- +1 point for uppercase letters present
- +1 point for lowercase letters present  
- +1 point for numbers present
- +1 point for special characters present

### Maximum Score: 7 points (3 length + 4 character types)

### Smart Recommendations
The tool provides personalized recommendations based on:
- Missing character types
- Password length deficiencies
- Common security best practices

## 🌐 Deployment Options

### Quick Hosting (Free)
1. **GitHub Pages**: Enable in repository settings
2. **Netlify**: Drag and drop deployment
3. **Vercel**: Git integration deployment
4. **Surge.sh**: Simple static site hosting

### Local Development
```bash
# Clone the repository
git clone https://github.com/samuelharting/Cybersecurity-Projects.git
cd Cybersecurity-Projects/Password-Strength-Checker

# Open in browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Educational Value

This project demonstrates understanding of:
- **Web Security Principles**
- **Client-Side Development**
- **User Experience Design**
- **Responsive Web Design**
- **JavaScript Security Practices**
- **Privacy-First Development**

## 🔄 Future Enhancements

- [ ] Dictionary attack detection
- [ ] Common password database checking
- [ ] Entropy calculation for randomness
- [ ] Password generation suggestions
- [ ] Breach detection integration (Have I Been Pwned API)
- [ ] Multi-language support
- [ ] Accessibility improvements (WCAG 2.1 AA)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Samuel Harting**
- Cybersecurity Student
- Building practical security tools for learning and portfolio development
- [GitHub](https://github.com/samuelharting)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

*Built as part of a cybersecurity portfolio to demonstrate practical security tool development skills.*
