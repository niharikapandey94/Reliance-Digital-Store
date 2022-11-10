
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
  setTimeout("showSlides(slideIndex)",1000)
}

let bag=[]
var url1="https://636bb737ad62451f9fb9caae.mockapi.io/digitals";
async function getData(){
try{
let res= await fetch(url1);
let out=await res.json();
bag=out;
console.log(out)
let i=0;
display(out,i)
}
catch(err){
alert(err) 
}
}
getData()

function display(arr,i){
  let k=i+4
  for(let i=0;i<=k;i++){
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
  let k=i+4
  for(let i=0;i<=k;i++){
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
  
  function plusSlides(n) {
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
    setTimeout("showSlide(slideInde)",1000)
    
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
  let k=i+4
  for(let i=0;i<=k;i++){
    let div=document.createElement("div");
    
    let img=document.createElement("img");
    img.setAttribute("src",arr[i].img)
    let tit=document.createElement("h1");
    tit.innerText=arr[i].tittle
    
    
    div.append(img,tit);
    document.querySelector("#last").append(div)
    
  }
 
}

  

  