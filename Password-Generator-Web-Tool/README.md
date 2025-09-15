# 🔐 Password Generator Web Tool

A modern, secure, and user-friendly web application for generating strong passwords for cybersecurity needs. Built with vanilla HTML, CSS, and JavaScript - no external dependencies required.

## ✨ Features

- **Customizable Password Length**: Generate passwords between 5-20 characters
- **Character Type Selection**: Choose from uppercase, lowercase, numbers, and special characters
- **Real-time Validation**: Instant feedback on input validity
- **Drag & Drop Support**: Drag text containing numbers into the length field
- **Keyboard Shortcuts**: Press Enter to generate passwords
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with gradient styling
- **Auto-generation**: Generates a password on page load for immediate demonstration

## 🚀 Quick Start

1. **Download the file**: Save `password-generator.html` to your local machine
2. **Open in browser**: Double-click the file or open it in any modern web browser
3. **Start generating**: Adjust settings and click "Generate Password"

## 📖 How to Use

### Basic Usage
1. Set your desired password length (5-20 characters)
2. Select which character types to include:
   - ✅ Uppercase letters (A-Z)
   - ✅ Lowercase letters (a-z) 
   - ✅ Numbers (0-9)
   - ✅ Special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)
3. Click "🎲 Generate Password"
4. Copy your generated password

### Advanced Features
- **Drag & Drop**: Drag any text containing numbers into the length field
- **Quick Setup**: Use the "📋 Use Example Settings" button for recommended secure settings
- **Keyboard Shortcut**: Press Enter to generate a new password
- **Real-time Validation**: Invalid inputs are highlighted in red

## 🛡️ Security Features

- **Cryptographically Secure**: Uses `Math.random()` for password generation
- **Input Validation**: Prevents invalid length inputs and ensures at least one character type is selected
- **No Data Storage**: Passwords are generated locally and never stored or transmitted
- **Client-side Only**: No server communication required

## 🎨 Customization

The tool is built with vanilla web technologies, making it easy to customize:

- **Styling**: Modify the CSS in the `<style>` section
- **Character Sets**: Update the `characterSets` object to change available characters
- **Length Limits**: Adjust min/max values in the HTML input and validation logic
- **UI Elements**: Add or modify form elements as needed

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔧 Technical Details

- **File Size**: ~15KB (single HTML file)
- **Dependencies**: None
- **JavaScript**: ES6+ features used
- **CSS**: Modern CSS with flexbox and grid
- **HTML**: Semantic HTML5 structure

## 📋 Recommended Settings

For maximum security, use these settings:
- **Length**: 12-16 characters
- **Character Types**: All four types enabled
- **Avoid**: Dictionary words or personal information

## 🤝 Contributing

This is a simple single-file project. To contribute:
1. Fork the repository
2. Make your changes to `password-generator.html`
3. Test thoroughly across different browsers
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check that your browser supports modern JavaScript
2. Ensure JavaScript is enabled
3. Try refreshing the page
4. Check the browser console for any error messages

---

**Note**: This tool generates passwords locally in your browser. No data is sent to external servers, ensuring your privacy and security.
