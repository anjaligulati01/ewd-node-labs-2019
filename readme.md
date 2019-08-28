# Assignment 2 - ReactJS App & API.

Name:Anjali Sharma

## Overview.
This is a HackerNews app, which displays some news/posts. Users of the application are able to like/upvote on existing posts and create new posts.
Users can also add comments and like/upvote an existing vote.
The application is made secure by providing a login page, where only authorized users can login. It also allows a user to sign up to view the posts and get access to HackerNews. The news app is made secure by using JWT to ensure only authorized users can view the posts.

List of user features (excluding user registration and authentication) . . . . 
 
 + NewsItem - which is a news-item/post for display
 + NewsList - Which is a collection of new items used for display
 + newsForm - which is  a news Form, to add new posts.
 + comment - a comment on a post
 + commentList - List of comments on a post
 + commentForm - to allow user to add a comment to a post
 + loginPage - for login

**PLEASE NOTE** Code is in node-lab1 folder under the repo provided. Please ignore contact-related items, e.g. api/contacts etc those were to complete lab work.

## Installation requirements.

This app is developed using Storybook, and was generated using create-react-app tool. The below will automatically be fetched from package.json because these dependencies have been saved (by just doing npm install)
 + Lodash - npm install  lodash@2.4.2 
 + react-router-dom (to enable routing in the React web application)npm install react-router-dom@4.2.2 
 + superagent - npm install  superagent@1.6.1 (for AJAX)
 + babel-cli (for transcoding)
 + babel-preset-env
 + nodemon (npm install --save-dev nodemon)
 + dotenv (npm install --save dotenv)
 + express (npm install --save express)
 + body-parser - npm install --save body-parser - to allow Express to parse JSON
 + eslint babel-eslint (npm install --save 
 + eslint-plugin-react
 + axios(to make requests to Express API)  (npm install --save axios)
 + mongoose (npm install -save mongoose) To talk to mongoDB (npm install --save mongoose)
 + npm install -save express-async-handler
 + npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs (For Authentication)
 + npm install --save-dev mocha (For testing)
 + npm install --save-dev should
 + npm install --save-dev sinon sinon-test
 + npm install --save-dev supertest

## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

Please see DataModel.jpg attached.

Post table saves the posts, which has a reference to user and comments.

## App Component Design.

To see stories please do:
npx start-storybook -p 9001 -c .storybook

Please see image Storybook.jpg in the repo.
 
## UI Design.

App view attached. Basically ones the user logs in he can view the posts. He has a form to enter a new post. 
User can navigate to the comments view () to view the comments for the post.

See HackerNews.jpeg, comments.jpeg and Login.jpg in the repo

## Routing.
Below is the list of routes supported by the application: 

App uses 
/api/posts routes to talk to the backend. This particular route is protected by JWT (and requires login). (see HackerNews.jpeg)
/api/{post_id} - takes the user to the comments page of post with id post_id (See comments.jpeg)
/login - takes user to the login page.

Specify which, if any, of the above routes are protected (require login)

# Web API Endpoint Reference
+ /api/users - Gets all users
+ POST /api/users - adds a new user, query param action=register
+ POST /api/users - authenticates a user
All Post (/api/post) views require a JWT token in the 'authentication' section of the header to ensure it is coming from a valid/logged in user.
+ /api/posts - displays all posts. 
+ POST /api/posts  - lets user add a post (new post defined in request body)
+ GET /api/posts/{id}/comments - view comments for a post
+ POST /api/posts/{id}/comments/ - add comment to a post with id 
+ POST /api/posts/{id} - upvote a post
+ POST /api/posts/{id}/comments/{{commentid}/upvote - upvote a comment with id commentid under post id.

## Web API Install and Operation
Web API has following dependencies.
 + babel-cli (for transcoding)
 + babel-preset-env
 + nodemon (npm install --save-dev nodemon)
 + dotenv (npm install --save dotenv)
 + express (npm install --save express)
 + body-parser - npm install --save body-parser - to allow Express to parse JSON
 + eslint babel-eslint (npm install --save 
 + eslint-plugin-react
 + axios(to make requests to Express API)  (npm install --save axios)
 + mongoose (npm install -save mongoose) To talk to mongoDB (npm install --save mongoose)
 + npm install -save express-async-handler
 + npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs (For Authentication)
 + npm install --save-dev mocha (For testing)
 + npm install --save-dev should
 + npm install --save-dev sinon sinon-test
 + npm install --save-dev supertest
 
 To just start the webAPI, in the scripts section of package.json, we will tell the API to ignore hackerNews web code and its dependencies.
 

## API Design
Describe your web API.

| HTTP Verb & Path |  Description |
| -- | -- |
| **GET** /api/contacts |return a list of contacts |
| **POST** /api/contacts |add a new contact |
| **PUT** /posts/api/contacts/{id} | update a contact |
| **DELETE** /posts/api/contacts/{id} | delete a contact |

+ **GET** /api/users | Gets all users
+ **POST** /api/users | adds a new user, query param action=register
+ **POST** /api/users | authenticates a user

All Post (/api/post) | views require a JWT token in the 'authentication' section of the header to ensure it is coming from a valid/logged in user.
+ **GET** /api/posts | displays all posts. 
+ **POST** /api/posts  | lets user add a post (new post defined in request body)
+ **GET** /api/posts/{id}/comments | view comments for a post
+ **POST** /api/posts/{id}/comments/ | add comment to a post with id 
+ **POST** /api/posts/{id} | upvote a post
+ **POST** /api/posts/{id}/comments/{commentid}/upvote | upvote a comment with id commentid under post id.
+ **DELETE** /api/posts/{id}/comments/{commentid} | Delete comment wth id commentid under post id.

## API Configuration
Describe the configuration approach for your endpoint. For example, contents of config file and where it should be located:
The configuration related properties are defined in .env file. It has the database details, the server details and environment etc.
For our application it is as below:

~~~bash
NODE_ENV=development
PORT=8080
HOST=localhost

mongoDB=mongodb://localhost:27017/contacts_db
seedDb=true
secret=ilikecake
~~~

## Security and Authentication
Authetication is protected using Passport, which is an authentication middleware for Node.js. 

Salting and hashing are used to store password in the database to ensure they are secure. 
Express sessions are used to ensure user has a valid session and Passport JSON Web Tokens (JWTs) are used to ensure the requests are coming in from a valid user with an active session.



## Testing
Mocha.js has been used to test HackerNews app. should.js is used as an assertion mechanism for the unit-tests. Only unit-tests are implemented and can be found under tests folder in /api/posts/test.

## Extra features


## Independent learning.
