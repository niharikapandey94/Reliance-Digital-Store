
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

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
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carouse, 2000); // Change image every 2 seconds
}



let bag = []
var url1 = "https://636bb737ad62451f9fb9caae.mockapi.io/digitals";
async function getData() {
  try {
    let res = await fetch(url1);
    let out = await res.json();
    bag = out;
    console.log(out)
    
    display(i)
  }
  catch (err) {
    alert(err)
  }
}
getData()
let i=0;
let t=0;
function display(i) {
  document.querySelector("#container").innerHTML=""
  for (i; i < bag.length; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", bag[i].img)
    let tit = document.createElement("h1");
    tit.innerText = bag[i].tiitle
    let discount = document.createElement("p");
    discount.innerText = "You Save :" + bag[i].discount
    let cost = document.createElement("p");
    cost.innerText = "Deal Price :" + bag[i].price;
    let Mrp = document.createElement("p");
    Mrp.innerText = "Mrp :" + bag[i].mrp

    let btn = document.createElement("button");
    btn.innerText = "OFFERS AVAILABLE";

    div.append(img, tit, cost, discount, Mrp, btn);
    document.querySelector("#container").append(div)

  }



}

function prev() {
  t++
 console.log(n)
  console.log(j,j+1)
  if(t==n-5){
    t=0
  }
  display(t)

    
}
function next() {
if(t==0){
    t=n-6
    console.log(j)
    display(j)
    return
  }
    t--
  console.log(j,j+1)
  display(t)
  
}

let bag1 = []
var url = "https://636bb737ad62451f9fb9caae.mockapi.io/tv";
async function getDataa() {
  try {
    let res = await fetch(url);
    let out = await res.json();
    bag1 = out;
    console.log(out)

    display1(w)
  }
  catch (err) {
    alert(err)
  }
}
getDataa()

let j=0
let w=0

function display1(w) {
  document.querySelector("#tv").innerHTML=""
  
  n = bag1.length
  for (w; w < n; w++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", bag1[w].img)
    let tit = document.createElement("h1");
    tit.innerText = bag1[w].tittle
    let discount = document.createElement("p");
    discount.innerText = "You Save :" + bag1[w].discount
    let cost = document.createElement("p");
    cost.innerText = "Deal Price :" + bag1[w].price;
    let Mrp = document.createElement("p");
    Mrp.innerText = "Mrp :" + bag1[w].mrp

    let btn = document.createElement("button");
    btn.innerText = "OFFERS AVAILABLE";

    div.append(img, tit, cost, discount, Mrp, btn);
    document.querySelector("#tv").append(div)

  }



}
function Slide() {
  j++
  
  // console.log(n)
  console.log(j, j + 1)
  if (j == n) {
    j = 0
  }
 
  display1(j)

}


function SSlide() {
  console.log(n)
  if (j == 0) {
    j = n-1
    console.log(j)
    display1(j)
    return
  }
  j--
  console.log(j, j + 1)
  display1(j)





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
  if (n > slides.length) { slideInde = 1 }
  if (n < 1) { slideInde = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideInde - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

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
  if (myInde > x.length) { myInde = 1 }
  x[myInde - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}






let bag2 = []
var url2 = "https://636bb737ad62451f9fb9caae.mockapi.io/new";
async function getaData() {
  try {
    let res = await fetch(url2);
    let out = await res.json();
    bag2 = out;
    console.log(out)
    
    display2(q)
  }
  catch (err) {
    alert(err)
  }
}
let q=0;
let r=0;
getaData()

function display2(q) {
  document.querySelector("#last").innerHTML=""
  for (q; q <bag2.length; q++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", bag2[q].img)
    let tit = document.createElement("h1");
    tit.innerText = bag2[q].tittle


    div.append(img, tit);
    document.querySelector("#last").append(div)

  }

}


function aSlide() {
  r++
  
  // console.log(n)
  console.log(r, r + 1)
  if (r == n+1) {
    r = 0
  }
 
  display2(r)

}


function bSlide() {
  console.log(n)
  if (r == 0) {
    r = n-1
    console.log(r)
    display2(r)
    return
  }
  r--
  console.log(r, r + 1)
  display2(r)





}
