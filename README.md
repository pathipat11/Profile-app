# Profile-app

A modern profile showcase built with **React Native** and **Expo Router**. This app displays user profile information with support for light and dark mode toggling, smooth UI transitions, and responsive design elements.

## Features

* 👤 Profile section with avatar and personal information
* 🎓 Education and interest highlights
* 🔗 Contact cards (Facebook, GitHub, LinkedIn) with icons
* 📊 Stats section (projects, followers, following)
* 🌙 Dark mode / 🌞 Light mode toggle with smooth animations
* 💡 Responsive and modern card-based layout

## Technologies Used

* React Native
* Expo
* Expo Router
* React Native Vector Icons
* Context API (for theme switching)
* Animated API (for smooth transitions)

## Getting Started

### Prerequisites

* Node.js & npm
* Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
npm install
```

### Running the App

```bash
npx expo start
```

Then scan the QR code using Expo Go on your mobile device or run in an emulator.

## Project Structure

```
Profile-app/
├── app/
│   ├── index.jsx              # Main Profile Screen
│   └── _layout.js            # App Layout + Theme toggle
├── context/
│   └── ThemeContext.js       # ThemeProvider + useTheme hook
├── assets/
│   └── ...                   # (optional) images/icons
├── package.json
└── README.md
```

## Author

Pathipat Mattra

* Facebook: [Pathipat Mattra](https://facebook.com/pathipat.mattra)
* GitHub: [pathipat11](https://github.com/pathipat11)
* LinkedIn: [Pathipat Mattra](https://linkedin.com/in/viixl)

---
