# Technical Interview Project - Code Challenge Submission

Hello,

Here is the solution for the technical interview challenge for the software engineering position. I have completed up to **Step 2** of the project as per the instructions.

## Project Summary

The application consists of a simple **Dashboard** with a sidebar for navigation and a content area. So far, I have implemented the following functionalities:

1. **Dashboard** - The homepage displays the sidebar with navigation links.
2. **Navigation Links** - Three links are created in the sidebar. When clicked, they make a request to the backend and render the corresponding content in the main panel.

   **Functionality up to Step 2**:
   - Clicking any of the links (for Screen 1, Screen 2, or Screen 3) makes a request to the backend, and the corresponding content is displayed.

### Project Structure

The project was developed using the following technologies:

- **Backend**: Node.js (API)
- **Frontend**: React

### How to Run the Project

#### Step 1: Clone the repository

```bash
git clone https://github.com/GabrieleGVieira/finance-lobby-interview.git
cd finance-lobby-interview
```

#### Step 2: Install Dependencies

##### Backend (Node.js):

Navigate to the backend folder and install the dependencies:

```bash
cd backend
npm install
```

##### Frontend (React):

Navigate to the frontend folder and install the dependencies:

```bash
cd frontend
npm install
```

#### Step 3: Start the Backend
To start the backend server, run the following command in the backend directory:

```bash
cd backend
node server.js
```

#### Step 4: Start the Frontend
To start the React development server, run:

```bash
cd frontend
npm run start
```

The application will be available at http://localhost:3000.

#### Features Implemented
* **Dashboard Page**: A homepage with a sidebar containing three navigation links.
* **Navigation Links**: Clicking on any of the links updates the content of the main panel with data obtained via the API.
Currently, the content displayed on the screens is static ("This is screen 1", "This is screen 2", "This is screen 3") up to Step 2.

####  Backend Instructions
The backend is set up to respond to requests for displaying the screens. As of Step 2, the backend does not perform any complex processing other than returning static content for rendering the screens.

#### Notes
The application is not yet complete, and development stopped at Step 2 due to time constraints. If needed, I can continue the development at a later time.

I look forward to your feedback!
