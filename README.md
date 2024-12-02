# Clean Youtube Project

## 📚 Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Benefits](#-benefits)
- [Technology Stack](#-technology-stack)
- [Setup and Installation](#-setup-and-installation)

## 📖 Description

Clean YouTube is a user-friendly web application designed to enhance your video-watching experience on YouTube. By providing a clean and distraction-free interface, it ensures that users can focus solely on their selected videos without interruptions from ads or cluttered layouts. Users can manage playlists, keep track of recently visited playlists, and save their favorites, all while enjoying a seamless and enjoyable experience.

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

## 💻 Technology Stack

- React
- React Router DOM
- React Youtube
- Material UI
- EasyPeasy (For state management)
- Axios
- PropTypes

## 🚀 Setup and Installation

Follow these steps to set up the ShoeStore backend on your local machine:

### 1. `Clone the Repository:`

```
https://github.com/Mohosin999/Clean-YouTube-Project.git
```

### 2. `Navigate to the Project Directory:`

Go to your project directory that your already created.

```
cd your-repo
```

### 3. `Create .env File:`

Create a **.env** file in the root directory and add the below key -

```
VITE_YOUTUBE_API_KEY=<your api key from google developer console>
```

### 4. `Install Dependencies:`

Install all dependencies by typing this in your terminal.

```
yarn
```

If **yarn** not worked, try it -

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
