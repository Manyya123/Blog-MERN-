# Full Stack Blog App Project using MERN

Live Link - [Bookztron](https://bookztron-dev-branch.netlify.app/)

## Technologies used 
1. HTML
2. Tailwind CSS
3. JavaScript
4. React

- Node JS, Express JS and MongoDb is used for Backend server which is deployed on Render.

## Features:
User registration and login
Authentication using JWT Tokens
Story searching and pagination
CRUD operations (Story create, read, update and delete)
Upload user ımages and story ımages to the server
Liking stories and adding stories to the Reading list
Commenting on the story
Skeleton loading effect
Responsive Design
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

## Screenshots

### Home Page
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-HomePage-1.PNG)
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-HomePage-2.PNG)
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-HomePage-3.PNG)

### Product Listing Page
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-ProductListingPage-1.PNG)

### User Authentication Pages
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-SignupPage-1.PNG)
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-LoginPage-1.PNG)

### Single Product Page
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-SingleProductPage-1.PNG)

### Wishlist Page
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-WishlistPage-1.PNG)

### Cart Page
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-CartPage-1.PNG)

### Razorpay integration
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-Razorpay_Payment_Integration.PNG)

### Orders Page
![](https://github.com/Naman-Saxena1/Bookztron-E-Commerce_Book_Store/blob/development/src/Assets/Screenshots/Bookztron-OrdersPage-1.PNG)

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


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal and the Backend on the other terminal)

In the first terminal

```
$ cd Frontend
$ npm install (to install frontend-side dependencies)
$ npm run  start (to start the frontend)
```

In the second terminal

- cd Backend and Set environment variables in config.env under ./config
- Create your mongoDB connection url, which you'll use as your MONGO_URI
- Supply the following credentials

```
#  ---  Config.env  ---

NODE_ENV = development
PORT =5000
URI =http://localhost:3000
MONGO_URI =
JWT_SECRET_KEY =
JWT_EXPIRE = 60m
RESET_PASSWORD_EXPIRE = 3600000 

# Nodemailer

SMTP_HOST =smtp.gmail.com
SMTP_PORT =587
EMAIL_USERNAME = example@gmail.com
EMAIL_PASS = your_password
```


```
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Story searching  and pagination 
- CRUD operations (Story create, read, update and delete)
- Upload user ımages and story ımages  to the server
- Liking  stories and adding stories  to the Reading list
- Commenting  on the story
- Skeleton loading effect
- Responsive Design

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
![4](https://user-images.githubusercontent.com/111676859/226197298-ca0f5b6e-f523-4040-98a8-b92a17bbe22e.png)
--- - 
![5](https://user-images.githubusercontent.com/111676859/226197303-5d8a1a39-07f7-409f-8614-12d0ca0b2836.png)
--- - 
![6](https://user-images.githubusercontent.com/111676859/226197307-1d95a1f6-147a-4edb-b899-449c90c07713.png)
--- - 
![7](https://user-images.githubusercontent.com/111676859/226197312-b7bf6ae6-2c05-4b1d-bc25-4262af3f04f2.png)
--- - 
![8](https://user-images.githubusercontent.com/111676859/226197316-eb387e87-9690-44ca-b138-f15b03bed7d4.png)
--- - 
![9](https://user-images.githubusercontent.com/111676859/226197324-dcbad05b-2283-4ef5-bae9-2da8d09d55c9.png)
--- - 
![10](https://user-images.githubusercontent.com/111676859/226197329-025091a0-642b-4d68-ac4e-f365e0e78e82.png)
--- - 
![11](https://user-images.githubusercontent.com/111676859/226197338-3e530bc6-e7bf-4e4a-9284-165f85be47d2.png)

## Author
- Portfolio: [berthutapea](https://berthutapea.vercel.app/)
- Github: [berthutapea](https://github.com/berthutapea)
- Sponsor: [berthutapea](https://saweria.co/berthutapea)
- Linkedin: [gilberthutapea](https://www.linkedin.com/in/gilberthutapea/)
- Email: [berthutapea@gmail.com](mailto:berthutapea@gmail.com)

## License

MIT License

Copyright (c) 2022 Gilbert Hutapea

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
