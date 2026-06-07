# 🎥 YouTube Clone

A feature-rich YouTube clone application built with **React**, **Redux**, and **Tailwind CSS**. This project demonstrates modern web development practices with API integration, state management, and responsive UI design.

**Live Demo:** [https://you-tube-clone-inky.vercel.app/](https://you-tube-clone-inky.vercel.app/)

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Component Overview](#component-overview)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Contributing](#contributing)

---

## ✨ Features

- 🔍 **Video Search** - Search for videos using YouTube API
- 🎬 **Video Recommendations** - Get popular videos and search results
- 👀 **Watch Page** - Full video watch page with details and statistics
- 💬 **Comments Section** - View and navigate through video comments
- 💬 **Live Chat** - Real-time message simulation for live streams
- 🎯 **Filter Buttons** - Browse videos by different categories
- 📱 **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- ⚡ **Shimmer Loading** - Skeleton loading for better UX
- 🏠 **Sidebar Navigation** - Easy navigation with collapsible menu
- 🔐 **State Management** - Redux for centralized state management

---

## 📁 Project Structure

```
YouTube-Clone/
├── public/                       # Static assets
│   ├── index.html               # Main HTML file
│   ├── favicon.ico              # Favicon
│   └── manifest.json            # PWA manifest
├── src/
│   ├── components/              # React components
│   │   ├── Body.js              # Main body wrapper
│   │   ├── Button.js            # Reusable button component
│   │   ├── ButtonList.js        # Category filter buttons
│   │   ├── ChatMessage.js       # Individual chat message
│   │   ├── Comments.js          # Single comment component
│   │   ├── CommentsContainer.js # Comments section container
│   │   ├── Header.js            # Navigation header with search
│   │   ├── LiveChat.js          # Live chat container
│   │   ├── MainContainer.js     # Main content container
│   │   ├── RecommendedVideo.js  # Recommended video card
│   │   ├── SearchVideo.js       # Search results page
│   │   ├── Shimmer.js           # Loading skeleton
│   │   ├── Sidebar.js           # Navigation sidebar
│   │   ├── SideBarMenu.js       # Sidebar menu items
│   │   ├── VideoCard.js         # Individual video card
│   │   ├── VideoContainer.js    # Videos grid container
│   │   └── WatchPage.js         # Video watch page
│   ├── images/                  # Image assets
│   │   ├── youtube-logo.png
│   │   ├── shorts.png
│   │   ├── youtube-music.png
│   │   ├── youtube-kids.png
│   │   └── youtube-studio.png
│   ├── utils/                   # Utility files and Redux slices
│   │   ├── appSlice.js          # App state management
│   │   ├── chatSlice.js         # Chat state management
│   │   ├── searchSlice.js       # Search state management
│   │   ├── helper.js            # Helper functions
│   │   └── store.js             # Redux store configuration
│   ├── App.js                   # Main app component with routing
│   ├── App.css                  # App styles
│   ├── index.js                 # React entry point
│   ├── index.css                # Global styles
│   └── config.js                # API configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # This file
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** (v18.2.0) | UI library and component framework |
| **React Router** (v6.8.1) | Client-side routing |
| **Redux** (Toolkit v1.9.2) | State management |
| **Tailwind CSS** (v3.2.6) | Utility-first CSS framework |
| **React Icons** (v4.8.0) | Icon library |
| **YouTube API** | Real video data and recommendations |
| **Create React App** | Project bootstrapping |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepakydv25/YouTube-Clone.git
   cd YouTube-Clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key** (See [Configuration](#configuration) section)

4. **Start the development server**
   ```bash
   npm start
   ```

The application will open at [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

---

## ⚙️ Configuration

### YouTube API Setup

The application uses the YouTube Data API v3. Configuration is located in `src/config.js`:

```javascript
const YOUTUBE_API_KEY = "YOUR_API_KEY_HERE";

export const YOUTUBE_VIDEOS_API = 
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + YOUTUBE_API_KEY;
```

**To set up your own API key:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable YouTube Data API v3
4. Create an API key credentials
5. Replace `YOUTUBE_API_KEY` in `src/config.js`

### Tailwind CSS

Tailwind configuration is in `tailwind.config.js`. Customize colors, fonts, and spacing as needed.

---

## 🧩 Component Overview

### Core Components

| Component | Purpose |
|-----------|---------|
| **Header** | Search bar and navigation controls |
| **Sidebar** | Navigation menu with YouTube services |
| **MainContainer** | Layout wrapper for main content |
| **VideoContainer** | Grid of video cards |
| **VideoCard** | Individual video thumbnail and info |
| **WatchPage** | Full-screen video player page |
| **CommentsContainer** | Comments section for videos |
| **LiveChat** | Real-time chat simulation |
| **Shimmer** | Loading skeleton UI |
| **ButtonList** | Category filter buttons |

---

## 🔄 State Management

The application uses **Redux Toolkit** for centralized state management with the following slices:

### `appSlice.js`
Manages application state including:
- Sidebar toggle state
- Menu visibility

### `searchSlice.js`
Manages search-related state:
- Search query
- Search results

### `chatSlice.js`
Manages live chat state:
- Chat messages
- Message list with offset management

### `store.js`
Combines all slices and exports the Redux store.

---

## 🌐 API Integration

The application integrates with multiple YouTube APIs:

| API | Endpoint | Purpose |
|-----|----------|---------|
| **Videos API** | `youtube/v3/videos` | Fetch popular videos |
| **Search API** | `youtube/v3/search` | Search videos by query |
| **Channels API** | `youtube/v3/channels` | Fetch channel information |
| **Comments API** | `youtube/v3/comments` | Fetch video comments |
| **Search Suggestions** | Google Suggestqueries | Auto-complete search terms |

### Helper Functions (`src/utils/helper.js`)

Utility functions for formatting and data processing:
- View count formatting
- Description truncation
- Video filtering
- Number abbreviation

---

## 📱 Responsive Design

The application is built with a mobile-first approach using Tailwind CSS:
- Responsive grid layouts
- Mobile-optimized navigation
- Adaptive video cards
- Touch-friendly UI elements

---

## 🎨 Styling

- **CSS Framework**: Tailwind CSS
- **Utility Classes**: For rapid UI development
- **Custom CSS**: `src/App.css` and `src/index.css` for custom styles
- **Icons**: React Icons library (4.8.0)

---

## 📦 Dependencies

### Main Dependencies
- `react@^18.2.0` - React library
- `react-dom@^18.2.0` - React DOM rendering
- `react-router-dom@^6.8.1` - Client-side routing
- `@reduxjs/toolkit@^1.9.2` - Redux state management
- `react-redux@^8.0.5` - React bindings for Redux
- `react-icons@^4.8.0` - Icon library
- `react-scripts@5.0.1` - Build and test configuration

### Dev Dependencies
- `tailwindcss@^3.2.6` - CSS framework
- `@testing-library/react@^13.4.0` - React testing utilities
- `@testing-library/jest-dom@^5.16.5` - Jest DOM matchers

---

## 🎯 Key Features Explained

### Search Functionality
Users can search for videos using the search bar in the header. The app fetches real search results from YouTube API with auto-complete suggestions.

### Video Cards
Each video card displays:
- Thumbnail image
- Video title
- Channel name
- View count and upload date
- Video duration

### Watch Page
When a user clicks a video, they're taken to the watch page with:
- Full video player
- Video details and statistics
- Comments section
- Related/recommended videos
- Live chat simulation

### Sidebar Navigation
The collapsible sidebar provides quick access to:
- Home
- Shorts
- Subscriptions
- YouTube Music
- YouTube Kids
- YouTube Studio
- Browse features

---

## 🚀 Deployment

The project is deployed on **Vercel**. To deploy your own:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on each push
4. Update environment variables with your API key

---

## 📝 Notes

- The API key in the repository is for demo purposes
- For production, use environment variables for sensitive data
- Comments API uses mock data structure
- Live chat is a simulated feature with mock messages
- Regional code is set to India (IN) - modify in `config.js` to change

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for personal and educational use.

---

## 👨‍💻 Author

**Deepak Yadav**
- GitHub: [@deepakydv25](https://github.com/deepakydv25)
- Live Demo: [https://you-tube-clone-inky.vercel.app/](https://you-tube-clone-inky.vercel.app/)

---

## 🎓 Learning Resources

This project demonstrates:
- React fundamentals (components, hooks, routing)
- State management with Redux Toolkit
- API integration and data fetching
- Responsive design with Tailwind CSS
- Component composition and reusability
- Performance optimization (lazy loading, shimmer UI)

---

## 🐛 Known Issues & Future Improvements

- [ ] Add playlist functionality
- [ ] Implement user authentication
- [ ] Add video upload feature
- [ ] Improve live chat with real-time WebSocket
- [ ] Add video playback controls
- [ ] Implement trending/home feed algorithms
- [ ] Add notification system
- [ ] Dark/Light mode toggle

---

## 📞 Support

For questions or issues, please open an [issue](https://github.com/deepakydv25/YouTube-Clone/issues) on GitHub.

---

**Enjoy exploring the YouTube Clone! 🎬**
