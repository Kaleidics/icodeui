---
title: "Shop Item"
dateDelimited: "10-August-2020"
date: "10 August 2020"
thumbnail: "./shoethumbnail.png"
summary: What are thooose??? Shrink the window...thoughts on the mobile styling?
tags: card,component,ecommerce
---

  <div class="shoe">
    <div class="shoe-left">
      <h2 class="shoe-heading">Keep it sporty.</h2>
      <p class="shoe-desc">Our mission is to change the world through sport. Browse sportswear and shoes.</p>
      <button class="shoe-btn">View Collection</button>
    </div>
    <div class="shoe-right">
      <img class="shoe-image" src="./shoe.png" alt="shoe">
    </div>
  </div>

<style>

.shoe {
  max-width: 915px;
  max-height: 466px;
  background: #EBF0F3;
  display: flex;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 3px 5px 8px -1px #8FB6D1;
  position: relative;
  color: black;
}

.shoe-left {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px;
  position: relative;
}

.shoe-heading {
  font-size: 42px;
  margin-bottom: 25px;
}

.shoe-desc {
  font-size: 18px;
  margin-bottom: 60px;
}

.shoe-btn {
  width: 200px;
  color: #FFA2AD;
  background: black;
  border: none;
  font-size: 18px;
  padding: 19px 35px;
  cursor: pointer;
}

.shoe-right {
  width: 640px;
  height: 466px;
  border-left: 5px solid #FFA2AD;
}

.shoe-right * {
  border-radius: 10px;
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

@media(max-width:800px) {
 .shoe-right {
   display: none;
 }


.shoe:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("https://i.imgur.com/SMSWQzw.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  opacity: 0.5;
  filter: blur(1px);
  transition: all 0.3s;
}

.shoe:hover:before {
  opacity: 1;
  filter: blur(0);
}



 .shoe-left {
   padding: 30px;
 }

 .shoe-heading {
   font-size: 30px;
   line-height: 1.4;
   margin-bottom: 12px;
 }

 .shoe-desc {
   margin-bottom: 20px;
 }

}


</style>
