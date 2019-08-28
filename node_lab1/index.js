import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import bodyParser from 'body-parser';
import postsRouter from './api/posts';
import './db';
import loadContacts from './contactsData';
import {loadPosts} from './postsData';
import loadUsers from './userData';
import usersRouter from './api/users';
import session from 'express-session';
import authenticate from './authenticate';
// import passport configured with JWT strategy
import passport from './auth';

dotenv.config();

const app = express();
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

//configure body-parser
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

const port = process.env.PORT;

app.use(express.static('public'));

app.use(passport.initialize());

app.use('/api/contacts', contactsRouter);
//app.use('/api/posts', authenticate, postsRouter);
//User router
app.use('/api/users', usersRouter);

// Add passport.authenticate(..)  to middleware stack for protected routes
app.use('/api/posts', passport.authenticate('jwt', {session: false}), postsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

if (process.env.seedDb) {
  loadContacts();
  loadPosts();
  loadUsers();
}