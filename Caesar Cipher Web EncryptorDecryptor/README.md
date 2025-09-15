# 🔐 Caesar Cipher Web Encryptor/Decryptor

A modern, responsive web application for encrypting and decrypting text using the classic Caesar cipher algorithm. Built with vanilla HTML, CSS, and JavaScript, featuring a clean and professional interface perfect for cybersecurity portfolios.

## ✨ Features

- **Easy-to-use Interface**: Clean, modern design with intuitive controls
- **Real-time Encryption/Decryption**: Instant results with customizable shift values
- **Input Validation**: Comprehensive error handling and user feedback
- **Quick Examples**: Pre-loaded example texts for easy testing
- **Copy to Clipboard**: One-click copying of results
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Professional Styling**: Modern gradient design suitable for portfolios

## 🚀 How to Use

1. **Open the Application**: Simply open `caesar_cipher.html` in any modern web browser
2. **Enter Text**: Type or paste the text you want to encrypt/decrypt
3. **Set Shift Value**: Choose a shift value between 1-25 (default is 3)
4. **Encrypt/Decrypt**: Click the appropriate button to process your text
5. **Copy Results**: Use the copy button to easily use your encrypted/decrypted text

## 🔧 Technical Details

### Caesar Cipher Algorithm
The Caesar cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of positions down the alphabet. For example, with a shift of 3:
- 'A' becomes 'D'
- 'B' becomes 'E'
- 'Z' becomes 'C' (wraps around)

### Key Features
- **Case Preservation**: Maintains original letter casing
- **Non-alphabetic Handling**: Numbers, symbols, and spaces remain unchanged
- **Shift Normalization**: Handles shift values outside the 1-25 range
- **Input Validation**: Ensures valid text and shift values before processing

## 📁 Project Structure

```
Caesar Cipher Web EncryptorDecryptor/
├── caesar_cipher.html    # Main application file
└── README.md            # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Core cipher logic and interactive functionality
- **Modern Web APIs**: Clipboard API for copy functionality

## 🎯 Use Cases

- **Educational Tool**: Learn about classical cryptography
- **Portfolio Project**: Showcase web development and cybersecurity skills
- **Quick Encryption**: Simple text obfuscation for non-sensitive data
- **Coding Practice**: Study clean, well-documented JavaScript code

## 🔒 Security Note

This implementation is for educational and demonstration purposes only. The Caesar cipher is not secure for protecting sensitive information as it can be easily broken with frequency analysis or brute force attacks.

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with JavaScript enabled

## 🚀 Getting Started

1. Clone or download this repository
2. Open `caesar_cipher.html` in your web browser
3. Start encrypting and decrypting text!

## 📝 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for the cybersecurity community**
