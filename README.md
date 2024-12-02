# Clean Youtube Project

## 📚 Table of Contents

- [Description](#-description)
- [Technologies & Tools Used](#-technologies--tools-used)
- [Features](#-features)
- [Benefits](#-benefits)
- [Setup and Installation](#-setup-and-installation)

## 📖 Description

Clean YouTube is a user-friendly web application designed to enhance your video-watching experience on YouTube. By providing a clean and distraction-free interface, it ensures that users can focus solely on their selected videos without interruptions from ads or cluttered layouts. Users can manage playlists, keep track of recently visited playlists, and save their favorites, all while enjoying a seamless and enjoyable experience.

## 💻 Technologies & Tools Used

- React
- React Router DOM
- React Youtube
- YouTube Data API (Used to fetch and manage YouTube playlists and videos)
- Material UI
- EasyPeasy (For state management)
- Axios
- PropTypes

## 🔆 Features

**`Add Playlists by ID or URL:`**

- Users can quickly add a playlist by pasting its YouTube URL or Playlist ID, ensuring convenience and speed.

**`View All Playlist Videos:`**

- Browse all videos from the added playlist in a clean, ad-free interface.

**`Favorites Management:`**

- User can add their most-loved playlists in favorites.
- Also, they can remove it from favorites.

**`Recent Playlist Tracking:`**

- The project keeps track of users' recent activities, displaying a history of playlists and videos accessed. This feature ensures that users can easily revisit content they've interacted with recently.

**`Permanent Playlist Deletion:`**

- Remove unwanted playlists permanently.

## 💬 Benefits

- No ads while watching videos, ensuring an uninterrupted viewing experience.
- Distraction-free environment tailored for focused video consumption.
- Efficient playlist management with favorites and recent tracking.
- Simple yet powerful controls for adding, managing, and removing playlists.

## 🚀 Setup and Installation

Follow these steps to set up the Clean YouTube Application on your local machine:

### 1. `Clone the Repository:`

```
https://github.com/Mohosin999/Clean-YouTube-Application.git
```

### 2. `Navigate to the Project Directory:`

Go to the project directory that you've just cloned.

```
cd Clean-YouTube-Application
```

### 3. `Create .env File:`

Create a **.env** file in the root directory and add the following key -

```
VITE_YOUTUBE_API_KEY=<your API key from Google Developer Console>
```

### 4. `Install Dependencies:`

Install all the dependencies by typing the following in your terminal.

```
yarn install
```

### 5. `Start the Server:`

```
yarn dev
```

### 6. `Access the Application:`

Open your browser and visit.

```
http://localhost:5173/
```
