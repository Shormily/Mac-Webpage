 function getprice(product, price) {
    const casetbody = document.getElementById(product);
    const caseNumber = 0;
    casetbody.innerText = caseNumber + price;
    fullcost();
 }

 document.getElementById('case-number').addEventListener('click',function (){
 getprice('case-total',180)
 });

 document.getElementById('eight-gb').addEventListener('click',function (){
 getprice('case-total',0);
 });

 document.getElementById('ssd-256').addEventListener('click',function (){
 getprice('storage-cost',0);
 });

 document.getElementById('ssd-512').addEventListener('click',function (){
 getprice('storage-cost',100);
 });

 document.getElementById('ssb-1TB').addEventListener('click',function (){
 getprice('storage-cost',180);
 });

 document.getElementById('normal-delivery').addEventListener('click',function (){
 getprice('normal-charge',0);
 });

 document.getElementById('first-delivery').addEventListener('click',function (){
 getprice('normal-charge',20);
 });

 function fullcost() {
     const baseprice = document.getElementById('base-price');
     const baseneed = parseInt(baseprice.innerText);

     const caseTotal = document.getElementById('case-total');
     const caseneed = parseInt(caseTotal.innerText);

     const storage = document.getElementById('storage-cost');
     const hard = parseInt(storage.innerText);

     const delivery = document.getElementById('normal-charge');
     const cost = parseInt(delivery.innerText);

     const totalcost = document.getElementById('total-cost');
     const complete = parseInt(totalcost.innerText);
     totalcost.innerText =  baseneed + caseneed + hard + cost 


 }
 