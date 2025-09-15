# Network Traffic Logger 🔍📊

A real-time network packet analysis and monitoring tool built with HTML, CSS, and JavaScript. This cybersecurity tool provides an interactive interface for visualizing network traffic patterns and packet data.

## Features

- **Real-time Traffic Simulation**: Live network packet monitoring with realistic cybersecurity examples
- **Interactive Packet Analysis**: Drag-and-drop interface for packet data input
- **Multiple Protocol Support**: HTTP, HTTPS, TCP, UDP, DNS, SSH, and more
- **Professional UI**: Clean, modern interface with responsive design
- **Educational Examples**: Pre-built packet format examples for learning
- **Keyboard Shortcuts**: Power user features with Ctrl+S (Start/Stop) and Ctrl+K (Clear)
- **Status Monitoring**: Visual indicators for logging status

## Screenshots

The tool features a modern gradient design with:
- Header section with project branding
- Packet format examples with copy functionality
- Control panel for starting/stopping logging
- Live traffic display with packet details
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Network-Traffic-Logger.git
```

2. Navigate to the project directory:
```bash
cd Network-Traffic-Logger
```

3. Open the HTML file in your browser:
```bash
# On Windows
start network-traffic-logger.html

# On macOS
open network-traffic-logger.html

# On Linux
xdg-open network-traffic-logger.html
```

## Usage

### Basic Operation

1. **Start Logging**: Click the "Start Logging" button to begin simulating network traffic
2. **Stop Logging**: Click the "Stop Logging" button to pause the simulation
3. **Clear Traffic**: Click "Clear Traffic" to reset the display
4. **View Examples**: Click any "Copy" button to see different packet formats

### Packet Format

The tool accepts packet data in the following format:
```
Source_IP -> Destination_IP, Protocol, Port: Port_Number, Size: Size_Bytes
```

Example:
```
192.168.1.1 -> 10.0.0.1, HTTP, Port: 80, Size: 1024 bytes
```

### Supported Protocols

- **HTTP**: Web traffic on port 80
- **HTTPS**: Encrypted web traffic on port 443
- **TCP**: Transmission Control Protocol
- **UDP**: User Datagram Protocol
- **DNS**: Domain Name System on port 53
- **SSH**: Secure Shell on port 22
- **SMTP**: Email transmission on port 25

### Keyboard Shortcuts

- `Ctrl + S`: Toggle logging (Start/Stop)
- `Ctrl + K`: Clear traffic display

## Technical Details

### Architecture

- **Frontend**: Pure HTML5, CSS3, and JavaScript (ES6+)
- **No Dependencies**: Self-contained with no external libraries
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern CSS**: Gradients, animations, and smooth transitions

### File Structure

```
Network-Traffic-Logger/
├── network-traffic-logger.html    # Main application file
└── README.md                      # Project documentation
```

### Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Educational Use

This tool is designed for:
- **Cybersecurity Education**: Understanding network protocols and packet analysis
- **Network Monitoring Training**: Learning about traffic patterns and security
- **Protocol Analysis**: Visualizing different types of network communication
- **Security Awareness**: Recognizing normal vs. suspicious network behavior

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by real network monitoring tools like Wireshark and tcpdump
- Designed for educational purposes in cybersecurity training
- UI/UX inspired by modern dashboard designs

## Future Enhancements

- [ ] Real packet capture integration
- [ ] Export functionality for traffic logs
- [ ] Advanced filtering options
- [ ] Network topology visualization
- [ ] Alert system for suspicious traffic
- [ ] Dark mode theme
- [ ] Data persistence with local storage

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Note**: This is a simulation tool for educational purposes. For real network monitoring, use professional tools like Wireshark, tcpdump, or commercial network monitoring solutions.
