# 🔐 AES File Encryption Tool

A modern, user-friendly web application for encrypting and decrypting text files using the Advanced Encryption Standard (AES). This tool provides a clean, intuitive interface for securing sensitive information with strong encryption.

## ✨ Features

- **🔒 AES Encryption**: Industry-standard AES encryption for maximum security
- **📁 File Upload**: Support for multiple file formats (.txt, .csv, .json, .xml, .log)
- **📝 Direct Input**: Paste or type text directly into the interface
- **🎯 Quick Start Examples**: Pre-loaded examples for different use cases
- **📋 One-Click Copy**: Easy copying of encrypted/decrypted content
- **🎨 Modern UI**: Clean, responsive design with intuitive controls
- **⌨️ Keyboard Shortcuts**: Power user shortcuts for efficiency
- **🔧 Drag & Drop**: Easy file handling with visual feedback

## 🚀 Quick Start

1. **Open the Tool**: Simply open `aes-file-encryption.html` in any modern web browser
2. **Load Content**: 
   - Upload a file using the drag & drop area
   - Paste text directly in the blue input area
   - Use the quick start examples (Beginner, Personal, Business)
3. **Set Password**: Enter a secure password for encryption/decryption
4. **Encrypt/Decrypt**: Click the green "🔒 Encrypt" or blue "🔓 Decrypt" buttons
5. **Copy Results**: Use the purple "📋 Copy Result" button to copy the output

## 🎯 Use Cases

### Personal Information
- Secure storage of passwords and credentials
- Encrypting sensitive personal data
- Protecting private notes and documents

### Business Data
- API keys and authentication tokens
- Database connection strings
- Confidential business information

### General Text
- Any text content that needs encryption
- Messages requiring secure transmission
- Backup of sensitive information

## 🔧 How It Works

1. **Encryption Process**:
   - Your text + password → AES encryption → Encrypted text
   - Uses CryptoJS library for reliable AES implementation
   - Password is used to generate the encryption key

2. **Decryption Process**:
   - Encrypted text + same password → AES decryption → Original text
   - Requires the exact same password used for encryption
   - Fails safely if password is incorrect

## 🛡️ Security Features

- **AES-256 Encryption**: Military-grade encryption standard
- **Client-Side Processing**: All encryption/decryption happens in your browser
- **No Data Transmission**: Your files never leave your device
- **Password Protection**: Strong password-based key derivation
- **Secure Implementation**: Uses industry-standard CryptoJS library

## 📋 Supported File Types

- `.txt` - Plain text files
- `.csv` - Comma-separated values
- `.json` - JSON data files
- `.xml` - XML documents
- `.log` - Log files

## ⌨️ Keyboard Shortcuts

- `Ctrl + E` - Encrypt content
- `Ctrl + D` - Decrypt content
- `Ctrl + L` - Load example content

## 🔧 Troubleshooting

### Common Issues

1. **Decryption Fails**:
   - Ensure you're using the exact same password used for encryption
   - Check that the encrypted content is complete and not truncated
   - Verify the content was actually encrypted (not just plain text)

2. **File Upload Issues**:
   - Ensure file is in supported format (.txt, .csv, .json, .xml, .log)
   - Check file size (very large files may cause browser issues)
   - Try copying file content and pasting directly instead

3. **Copy to Clipboard**:
   - Some browsers may require user interaction before allowing clipboard access
   - Try clicking the copy button after a brief delay
   - Use manual copy (Ctrl+A, Ctrl+C) as fallback

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📁 Project Structure

```
AES-Encryption/
├── aes-file-encryption.html    # Main application file
├── test-csv.csv               # Sample CSV file for testing
├── test-json.json             # Sample JSON file for testing
├── test-long.txt              # Sample long text file
├── test-sample.txt            # Sample text file
└── README.md                  # This documentation
```

## 🔒 Security Notice

- This tool processes data entirely in your browser
- No data is sent to external servers
- Always use strong, unique passwords
- Keep your passwords secure and backed up
- This tool is for educational and personal use

## 🚀 Getting Started

1. Clone or download this repository
2. Open `aes-file-encryption.html` in your web browser
3. Follow the on-screen instructions to encrypt your first file!

## 📝 License

This project is open source and available under the MIT License.

---

**⚠️ Important**: Always remember your encryption password! Without it, your encrypted data cannot be recovered.
