
# Project Blueprint

## Overview

This project is a simple web application that demonstrates real-time user presence using Firebase Realtime Database. It shows a status indicator that updates in real-time to "Online", "Offline", or "Connecting...".

## Features & Design

*   **Real-time Status**: The app connects to Firebase and displays the user's connection status.
*   **`onDisconnect` Handler**: It uses Firebase's `onDisconnect()` feature to reliably set the user's status to "offline" if they disconnect abruptly.
*   **Modern & Clean UI**:
    *   **Layout**: A centered layout for the status indicator.
    *   **Typography**: Clear, readable fonts to display the status.
    *   **Color**: The status indicator changes color to visually represent the state (e.g., green for Online, gray for Offline).
    *   **Animation**: A subtle pulsing animation for the "Connecting..." state.
*   **Web Components**: The status indicator is built as a self-contained Web Component (`<presence-indicator>`) for reusability.

## Current Plan

1.  **DONE**: Create `blueprint.md` to document the project.
2.  **NEXT**: Add Firebase SDKs to `index.html`.
3.  **TODO**: Add a placeholder for the Firebase config object.
4.  **TODO**: Configure the backend to use Firebase.
5.  **TODO**: Create the `<presence-indicator>` Web Component in `main.js`.
6.  **TODO**: Implement the Firebase connection logic in `main.js`.
7.  **TODO**: Add the `<presence-indicator>` to `index.html`.
8.  **TODO**: Style the component in `style.css`.
