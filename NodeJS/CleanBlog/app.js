const express=require('express');
const path = require('path');
const ejs = require('ejs');
const methodOverride= require('method-override');
const app=express();
const postController = require('./controllers/postControllers')
const pageController = require('./controllers/pageController')
const Post=require("./models/Post")
const {default:mongoose} =require('mongoose');
const { getAllPost } = require('./controllers/postControllers');
//TEMPLATE ENGINE
app.set("view engine", "ejs");

//CONNECT DB
mongoose.connect('mongodb://localhost/cleanblog-test-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method',{
    methods:['POST','GET']
}));

//ROUTES
app.get('/', postController.getAllPost);
app.get('/posts/:id', postController.getPost);
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/posts/edit/:id', pageController.getEditPage);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost)
app.delete('/posts/:id',postController.deletePost)

const port=5000;
app.listen(port,()=>{
    console.log(`Server is working on port ${port}`)
})