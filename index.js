
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
var url1 = "https://636bb737ad62451f9fb9caae.mockapi.io/digit";
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
let n3=0;
function display(i) {
  document.querySelector("#container").innerHTML=""
   n3=bag.length;
  for (i; i < bag.length; i++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", bag[i].img)
    let tit = document.createElement("h1");
    tit.innerText = bag[i].tittle
    
    let cost = document.createElement("p");
    cost.innerText = "Deal Price :" + bag[i].Price;
    let Mrp = document.createElement("s");
    Mrp.innerText = "Mrp :" + bag[i].mrp
    let hr=document.createElement("br")
    let btn = document.createElement("button");
    btn.innerText = "OFFERS AVAILABLE";
btn.setAttribute("id","head")
    div.append(img, tit, cost, Mrp,hr, btn);
    document.querySelector("#container").append(div)

  }



}

function prev() {
  t++
 
  
  if(t==n3-5){
    t=0
  }
  display(t)

    
}
function next() {
if(t==0){
    t=n3-6
    
    display(t)
    return
  }
    t--
 
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
let w=0
    display1(out,w)
  }
  catch (err) {
    alert(err)
  }
}
getDataa()


function display1(arr,w) {
  let k=w+4
  document.querySelector("#tv").innerHTML=""
  
  
  for (w; w <k; w++) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", bag1[w].img)
    let tit = document.createElement("h1");
    tit.innerText = bag1[w].tittle
    let discount = document.createElement("p");
    discount.innerText = "You Save :" + bag1[w].discount
    let cost = document.createElement("p");
    cost.innerText = "Deal Price :" + bag1[w].price;
    let Mrp = document.createElement("s");
    Mrp.innerText = "Mrp :" + bag1[w].mrp
      let hr=document.createElement("br")
    let btn = document.createElement("button");
    btn.innerText = "OFFERS AVAILABLE";
      btn.setAttribute("id","ctv")
    div.append(img, tit, cost, discount, Mrp,hr,btn);
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

getaData()
let q=0;
let n1=0;
let r=0;
function display2(q) {
   n1= bag2.length;
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
  if (r == n1-5) {
    r = 0
  }
 
  display2(r)

}


function bSlide() {
  console.log(n1)
  if (r == 0) {
    r = n1-6
    console.log(r)
    display2(r)
    return
  }
  r--
  console.log(r, r + 1)
  display2(r)


}
//  login page js

