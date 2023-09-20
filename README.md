React - Gallery of My Life

The React - Gallery of My Life project is a web application that allows users to create a gallery of images and share their thoughts about each image. Users can click on an image to toggle between viewing the image and reading a description. Additionally, users can like an image, and the like count is updated in real-time.
Development Overview
Backend

The server-side code for this project is built using Node.js and Express.js. It provides two main routes:

    GET /gallery: Retrieves a list of gallery items from a JavaScript array on the server and sends it to the client.
    PUT /gallery/like/:id: Updates the like count of a specific gallery item identified by its unique id.

The data for the gallery items is initially stored in the server/modules/data.js file as an array. In a real-world scenario, this data could be stored in a database, but for the base mode, it's a simplified in-memory storage.
Frontend

The frontend of the project is built using React.js. It consists of three main components:

    App: The top-level component that represents the entire application.
    GalleryList: A component responsible for displaying the gallery of images. It receives the gallery data from App via props and maps over it to create GalleryItem components.
    GalleryItem: Represents an individual gallery item. It displays the image, description, like count, and a like button. Users can click on the image to toggle between image and description views, and they can like an image.

The axios library is used to make HTTP requests to the server. When a user likes an image, a PUT request is sent to the server to update the like count.
Installation

To set up and run the React - Gallery of My Life project locally, follow these steps:
Prerequisites

Before you begin, ensure you have the following software installed on your computer:

    Node.js: You can download and install Node.js from https://nodejs.org/.

Setup

    Clone the project repository to your local machine:

    bash

git clone <repository_url>

Navigate to the project directory:

bash

cd react-gallery-of-my-life

Install project dependencies by running the following command in the project root directory:

    npm install

    Add a few images to the public/images folder.

    Modify the server/modules/data.js file to include gallery data for each image. Each entry in the data should have an id, title, description, and path for the image. Ensure that each id is unique.

Running the Server

    Start the server by running the following command in the project root directory:

    arduino

    npm run server

    This command will launch the server, which listens on port 5000 by default.

Running the React Client

    Open a new terminal tab or window.

    Start the React client app by running the following command in the project root directory (in a separate terminal tab/window):

    arduino

    npm run client

    This command will start the React development server, which listens on port 3000 by default.

Accessing the Application

Once both the server and React client are running, you can access the React - Gallery of My Life application in your web browser by navigating to:

http://localhost:3000

You can now interact with the application, view the gallery of images, toggle between image and description views, and like images.
Accomplishments

After completing this project, the following developer accomplishments were achieved:

    Practiced creating a full-stack web application using Node.js, Express.js, React.js, and Axios.
    Demonstrated proficiency in component-based architecture in React, passing data through props, and using conditional rendering to toggle between views.
    Implemented real-time updating of like counts without the need for page refresh.
    Gained experience in routing on the server-side using Express.js to handle GET and PUT requests.
    Enhanced understanding of RESTful API principles, including CRUD (Create, Read, Update, Delete) operations.
    Applied Git branching strategies for feature development, ensuring a clean and organized version control history.
