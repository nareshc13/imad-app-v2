console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='new value';
var  img=document.getElementById('madi');

img.onclick=function(){
    var interval=setInterval(moveRight,10);
img.style.marginLeft='100px';
};
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+"px";
}