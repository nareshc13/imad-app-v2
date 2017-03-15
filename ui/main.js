
var submit=document.getElementById('submit_btn');
submit.onclick= function() {
  var request=new XMLHttpRequest();
  request.onreadystatechange= function() {
    if(request.readyState===XMLHttpRequest.DONE) {
        if(request.status===200) {
            alert('successfully logged in');
        } else if(request.status===403) {
    alert('username/password is invalid');
        }  else if(request.status===500){
            alert('something went wrong on server');
        }
        }  
  };
};

var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
console.log(username);
console.log(password);

request.open('POST', 'http://nareshc13.imad.hasura-app.io/login',true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({username: username, password: password}));

/*console.log('Loaded!');
//var element=document.getElementById('main-text');
//element.innerHTML='new value';
var  img=document.getElementById('madi');

img.onclick=function(){
    var interval=setInterval(moveRight,10);
img.style.marginLeft='100px';
};
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+"px";
} */