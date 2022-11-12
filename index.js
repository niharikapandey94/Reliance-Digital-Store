
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}
var myIndex = 0;
carouse();

function carouse() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carouse, 2000); // Change image every 2 seconds
}



let bag=[]
var url1="https://636bb737ad62451f9fb9caae.mockapi.io/digitals";
async function getData(){
try{
let res= await fetch(url1);
let out=await res.json();
bag=out;
console.log(out)

display(out)
}
catch(err){
alert(err) 
}
}
getData()

function display(arr){
  
  for(let i=0;i<arr.length;i++){
    let div=document.createElement("div");
    
    let img=document.createElement("img");
    img.setAttribute("src",arr[i].img)
    let tit=document.createElement("h1");
    tit.innerText=arr[i].tiitle
    let discount=document.createElement("p");
    discount.innerText=  "You Save :"+arr[i].discount
    let cost=document.createElement("p");
    cost.innerText= "Deal Price :"+arr[i].price;
    let Mrp=document.createElement("p");
    Mrp.innerText=  "Mrp :"+arr[i].mrp
    
    let btn=document.createElement("button");
    btn.innerText="OFFERS AVAILABLE";
    
    div.append(img,tit,cost, discount,Mrp,btn);
    document.querySelector("#container").append(div)
    
  }
 
  

  }
 var slider=document.querySelector("#container");
  var items=slider.querySelector("#container>div")
function next(){
  slider.append(items[0])
}
function prev(){
  slider.prepend(items[items.length-1])

}
let bag1=[]
var url="https://636bb737ad62451f9fb9caae.mockapi.io/tv";
async function getDataa(){
try{
let res= await fetch(url);
let out=await res.json();
bag1=out;
console.log(out)
let i=0
display1(out,i)
}
catch(err){
alert(err) 
}
}
getDataa()

function display1(arr,i){
  
  for(let i=0;i<arr.length;i++){
    let div=document.createElement("div");
    
    let img=document.createElement("img");
    img.setAttribute("src",arr[i].img)
    let tit=document.createElement("h1");
    tit.innerText=arr[i].tittle
    let discount=document.createElement("p");
    discount.innerText=  "You Save :"+arr[i].discount
    let cost=document.createElement("p");
    cost.innerText= "Deal Price :"+arr[i].price;
    let Mrp=document.createElement("p");
    Mrp.innerText=  "Mrp :"+arr[i].mrp
    
    let btn=document.createElement("button");
    btn.innerText="OFFERS AVAILABLE";
    
    div.append(img,tit,cost, discount,Mrp,btn);
    document.querySelector("#tv").append(div)
    
  }
 
  

  }
  
  
  var slideInde = 1;
  showSlide(slideInde);
  
  function plusSlide(n) {
    showSlide(slideInde += n);
   
  }
  
  function currentSlide(n) {
    showSlide(slideInde = n);
  }
  
  function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideInde= 1}    
    if (n < 1) {slideInde = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideInde-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
   
  }
  
    
  var myInde = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myInde++;
    if (myInde > x.length) {myInde = 1}    
    x[myInde-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }

    
    
    

  
  let bag2=[]
var url2="https://636bb737ad62451f9fb9caae.mockapi.io/new";
async function getaData(){
try{
let res= await fetch(url2);
let out=await res.json();
bag2=out;
console.log(out)
let i=0;
display2(out,i)
}
catch(err){
alert(err) 
}
}
getaData()

function display2(arr,i){
  
  for(let i=0;i<arr.length;i++){
    let div=document.createElement("div");
    
    let img=document.createElement("img");
    img.setAttribute("src",arr[i].img)
    let tit=document.createElement("h1");
    tit.innerText=arr[i].tittle
    
    
    div.append(img,tit);
    document.querySelector("#last").append(div)
    
  }
 
}

  

  