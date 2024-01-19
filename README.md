# Firebase Auth for React with Multi-level Roles

## Project Overview:

**Firebase Auth for React with Multi-level Roles** is a React project designed to streamline user authentication using Firebase. The application includes features such as Google login, email/password authentication, and role-based access, distinguishing between admin and normal users. User data is stored in Firebase Firestore, and the application dynamically assigns roles upon login. Additionally, a password recovery option has been implemented to enhance user experience.

## Features:

- **Google Login and Email/Password Authentication:**
  - Users can log in using their Google accounts or create an account using email and password.

- **Role-Based Access Control:**
  - Multi-level roles, including distinctions between admin and normal users.

- **Firestore Integration:**
  - User data is securely stored in Firebase Firestore, allowing for efficient retrieval and management.

- **Dynamic Role Assignment:**
  - The application dynamically detects and assigns roles based on user authentication.

- **Password Recovery:**
  - Users have the option to recover their password, enhancing account security and accessibility.

- **Responsive UI with Tailwind CSS:**
  - A clean and responsive user interface designed using Tailwind CSS.

## Getting Started:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ricwolf19/WEB-Firebase-Auth.git

# Set Up Firebase:

1. **Create a Firebase Project:**
   - Visit the [Firebase Console](https://console.firebase.google.com/).
   - Create a new Firebase project.

2. **Obtain Firebase Configuration:**
   - Obtain your Firebase configuration details.
   - Update the configuration in `src/firebaseConfig.js`.

3. **Enable Firestore:**
   - Enable Firestore in your Firebase project for data storage.

   ## Explore Authentication:

  - Open the application in your preferred web browser.

  - Test various authentication methods and role assignments.

  ## Dependencies:

    - React
    - Firebase Authentication
    - Firebase Firestore
    - Tailwind CSS
    
    ## Contributions:

    - Contributions are welcome! If you have ideas for improvements, new features, or bug fixes, feel free to submit a pull request.