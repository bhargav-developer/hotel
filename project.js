let time1 = document.getElementById('time1')
let cart1 = document.getElementById('cart1')
let buy = document.getElementById('buy')
let amt = document.getElementById('amt');
let btn = document.getElementById('btn');
amt = 0;
time1.addEventListener('click',()=>{
    time1.style.display = "none";
    cart1.style.display = "flex";
  document.getElementById('1').style.background = "green";
  document.getElementById('1').style.borderRadius = "50px";
  buy.style.display = "flex";
  btn.style.display = "flex"
 amt += 10;
buy.innerHTML = 
`<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`



  

})
cart1.addEventListener('click',()=>{
    time1.style.display = "flex";
    cart1.style.display = "none";
  document.getElementById('1').style.background = "";
  amt -= 10;
  buy.innerHTML = 
  `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`


})
let time2 = document.getElementById('time2')
let cart2 = document.getElementById('cart2')
time2.addEventListener('click',()=>{
    time2.style.display = "none";
    cart2.style.display = "flex";
    document.getElementById('2').style.background = "green";
  btn.style.display = "flex"
  buy.style.display = "flex";
  document.getElementById('2').style.borderRadius = "50px";
    amt += 10;
    buy.innerHTML = 
    `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`

    
  
})
cart2.addEventListener('click',()=>{
    time2.style.display = "flex";
    cart2.style.display = "none";
  document.getElementById('2').style.background = "";
  amt -= 10;
  buy.innerHTML = 
  `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`


})
let time3 = document.getElementById('time3')
let cart3 = document.getElementById('cart3')
time3.addEventListener('click',()=>{
    time3.style.display = "none";
    cart3.style.display = "flex";
    document.getElementById('3').style.background = "green";
  btn.style.display = "flex"
  buy.style.display = "flex";
  document.getElementById('3').style.borderRadius = "50px";
    amt += 10;
    buy.innerHTML = 
    `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`

  
})
cart3.addEventListener('click',()=>{
    time3.style.display = "flex";
    cart3.style.display = "none";
  document.getElementById('3').style.background = "";
  amt -= 10;
  buy.innerHTML = 
  `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`


})
let time4 = document.getElementById('time4')
let cart4 = document.getElementById('cart4')
time4.addEventListener('click',()=>{
    time4.style.display = "none";
  btn.style.display = "flex"
  cart4.style.display = "flex";
    document.getElementById('4').style.background = "green";
  buy.style.display = "flex";
  document.getElementById('4').style.borderRadius = "50px";
    amt += 10;
    buy.innerHTML = 
    `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`
  
})
cart4.addEventListener('click',()=>{
    time4.style.display = "flex";
    cart4.style.display = "none";
  document.getElementById('4').style.background = "";
  amt -= 10;
  buy.innerHTML = 
  `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`


})
let time5 = document.getElementById('time5')
let cart5 = document.getElementById('cart5')
time5.addEventListener('click',()=>{
    time5.style.display = "none";
    cart5.style.display = "flex";
    document.getElementById('5').style.background = "green";
  btn.style.display = "flex"
  buy.style.display = "flex";
  document.getElementById('5').style.borderRadius = "50px";
    amt += 20;
    buy.innerHTML = 
    `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`

  
})
cart5.addEventListener('click',()=>{
    time5.style.display = "flex";
    cart5.style.display = "none";
  document.getElementById('5').style.background = "";
  amt -= 20;
  buy.innerHTML = 
  `<pre id="total">Total Amount = <b id="amt">${amt +'$'}</b></pre>`


})
function f(){

  if(amt > 50){
    document.getElementById('amt').style.color = "red"
  }
 else{
  console.log('shit')
 } 
  
}
setInterval(() => {
  f()
}, 100);

