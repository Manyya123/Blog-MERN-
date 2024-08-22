# Full Stack Blogging Application using MERN Stack

<!---Live Link - [Bookztron](https://bookztron-dev-branch.netlify.app/)-->

## Technologies used 
1. HTML
2. Tailwind CSS
3. JavaScript
4. React

- Node JS, Express JS and MongoDb is used for Backend server which is deployed on Render.

<!--
1. User Authentication (Signup, Login and Logout)
2. Proper Landing page with Recent Blogs
3. Product Listing Page
4. Sort and filter products
   - Sort by Price Low to High and High to Low
   - Filter using Minimum and Maximum Price Range
   - Filter by Book Genre Categories
   - Filter by average product rating
   - Filter to include/exclude out of stock products
   - Filter products as per fast delivery availability
   - Clear all filters
5. Wishlist Management 
   - Add / remove from the wishlist
   - Add items to cart
6. Cart Management 
   - Add to cart 
   - Change items quantity in cart 
   - Remove from cart
   - Add to wishlist from cart
   - Apply Coupon
7. Single Product Page
8. Order Summary of the ordered items
9. Custom Toast Component with 4 types - Success, Error, Warning and Information
10. Razorpay payment Integration
11. Orders page
12. Search bar to search books by Book name and Author name
13. Pagination 

## You can report issues on this project using Github issue 
1. You can read more about this from [Github Docs](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)
-----------------------------------------------------------------------
<H1 align ="center" > MERN BLOG  </h1>
<h5  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)
  * [License](#license)

-->
## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal and the Backend on the other terminal)

In the first terminal
- cd client and set your web-app's Firebase configuration
- Set environment variables in .env file in src folder
```
#  ---  .env  ---

VITE_FIREBASE_API_KEY=

```
```
# --- Terminal ---
$ cd client
$ npm install (to install frontend-side dependencies)
$ npm run dev (to start the frontend)
```

In the second terminal

- cd Backend and Set environment variables in .env file
- Create your mongoDB connection url, which you'll use as your MONGO (MongoDB URI)
- Supply the following credentials

```
#  ---  .env  ---

MONGO =
JWT_SECRET_KEY =

```


```
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start dev (to start the backend)
```

##  Key Features

- Proper Landing page with recent Blogs
- User registration and login
- Authentication using JWT Tokens and OAuth
- Admin Dashboard 
- Blog searching  and pagination
- Implemented a rich text editor for creating and formatting blog posts
- CRUD operations </br>
   &nbsp; &nbsp; &nbsp; &nbsp;    1) Blog create, read, update and delete </br>
   &nbsp; &nbsp; &nbsp; &nbsp;    2) Comment  create, read, update and delete </br>
   &nbsp; &nbsp; &nbsp; &nbsp;    3) Users create, read, update and delete </br>
- Upload user ımages and story ımages to the server 
- Liking  stories
- Commenting  on the story
- Responsive Design

## Screenshots
## Home Page
<img src="./images/Home_Page.png" alt="Home Page-1" width="400"/>
<img src="./images/Recent_Post.png" alt="Home Page-2" width="400"/>

## Blogs Listing Page
<img src="./images/Blogs.png" alt="Blogs Listing Page" width="400"/>

## Single Blog Page
<img src="./images/Sample_Post.png" alt="Single Blog Page" width="400"/>

## About Page
<img src="./images/About_Page.png" alt="About Page" width="400"/>

## Users Dashboard
<img src="./images/User_Dashboard.png" alt="Users Dashboard" width="400"/>

## Admin Dashboard
<img src="./images/Admin_Dashboard.png" alt="Admin Dashboard" width="400"/>

## Create Post
<img src="./images/Create_Post.png" alt="Create Post" width="400"/>

## Comments Section
<img src="./images/Comments_Section.png" alt="Comments Section" width="400"/>


<!--
### Home Page
![Home Page][.\images\Posts.png]

### Blogs Listing Page
![Blogs Listing Page][.\images\Blogs.png]

### User Authentication Pages

### Single Product Page

### Wishlist Page

### Cart Page

### Razorpay integration

### Orders Page

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
- [CK-Editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html) - Rich Text Editor 
- [uuid](https://www.npmjs.com/package/uuid) - For random id generator
- [React icons](https://react-icons.github.io/react-icons/) -
 Small library that helps you add icons  to your react apps.

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Nodemailer](https://nodemailer.com/about/) - Send e-mails from Node.js
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for uploading files 
- [slugify](https://www.npmjs.com/package/slugify) - For encoding titles into a URL-friendly format
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware


####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
 ##  Screenshots 
 

![1](https://user-images.githubusercontent.com/111676859/226197211-8abc5de5-7659-4811-b28a-ef885de64267.png)
---- -
![2](https://user-images.githubusercontent.com/111676859/226197288-1f0cf951-dd30-464f-b70a-10c449fe33b4.png)
--- - 
![3](https://user-images.githubusercontent.com/111676859/226197295-e9525dd5-1346-4951-a1c8-d5620166d7aa.png)
--- - 

## Author
- Portfolio: [berthutapea](https://berthutapea.vercel.app/)
- Github: [berthutapea](https://github.com/berthutapea)
- Sponsor: [berthutapea](https://saweria.co/berthutapea)
- Linkedin: [gilberthutapea](https://www.linkedin.com/in/gilberthutapea/)
- Email: [berthutapea@gmail.com](mailto:berthutapea@gmail.com)
-->
