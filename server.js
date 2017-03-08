var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;


var app = express();
app.use(morgan('combined'));

var config={
    user:'nareshc13',
    database:'nareshc13',
    host:'db.imad.hasura-app.io',
    password:process.env.DB_PASSWORD,
    port:'5432',
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool=new Pool(config);
app.get('/test-db',function(req,res){
   pool.query('SELECT * FROM test', function(err,result){
      if(err){
          res.status(500).send(err.toString());
      } 
      else{
          res.send(JSON.stringify(result));
      }
   });
   
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles={
'article-one':{
    title: 'Article one | Naresh',
heading:'Article One',
date:'5 Feb, 2017',
content:`
<p>
this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
</p>
`
},

 'article-two':{
title: 'Article Two | Naresh',
heading:'Article Two',
date:'10 Feb, 2017',
content:`
<p>
this is my second article.
this is my second article.
this is my second article.
this is my second article.
this is my second article.
</p>
`}
};

function createTemplate(data) {
    var title=data.title;
    var date=data.date;
    var heading =data.heading;
    var content=data.content;

var htmlTemplate=`
<html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    

 <link href="/ui/style.css" rel="stylesheet" />
</head>

<BODY>
    <div class="container">
        <div>
            <a href="/">Home</a>
    </div>
     <div>
${heading}
   </div>
  
  <div>
${date}
  </div>

<div>
${content}
</div>
</div>
</BODY>

</html>

`;
return htmlTemplate;
    
}

var counter=0;
app.get('/counter', function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
