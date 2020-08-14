---
title: "Cards"
dateDelimited: "2-August-2020"
date: "2 August 2020"
thumbnail: "./CardUI.png"
summary: For the amount of time I spend on my computer, I thought it would be a good idea to spend at least 3% of it being productive. So here we are. The beginning of a semi-daily practice of coding interesting pieces of UI I find throughout the internets. Let's start with something simple.
tags: card,component,status
postCount: 1
---

<div class="card">
  <h2 class="main-heading">Performance Score</h2>
  <div class="card-item">
    <div class="card-item-left">
      <p class="score-grade">A</p>
      <p class="score-percent">100%</p>
    </div>
    <div class="card-item-right">
      <p class="heading">PageSpeed Score</p>
      <p class="description">The average page speed score is 75%.</p>
    </div>
  </div>
  <div class="card-item">
    <div class="card-item-left">
      <p class="score-grade">C</p>
      <p class="score-percent">70%</p>
    </div>
    <div class="card-item-right">
      <p class="heading">SEO Score</p>
      <p class="description">The average SEO score is 75%.</p>
    </div>
  </div>
</div>

<div class="card card-alt width-300">
  <h2 class="main-heading">Need Optimization Help?</h2>
  <p class="description plr-10 mb-30">Read our <a href="#" class="font-blue">how to guides</a> and <a href="#" class="font-blue">
optimization articles</a> for additional direction on improving your page performance.</p>
  <p class="description plr-10">We can recommend partners to further assist you with optimizing your site</p>
  <a href="#" class="btn-blue">Contact Us</a>
</div>

<style>

.card {
  background: white;
  width: 330px;
  height: 320px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 5px 25px -1px rgba(52, 87, 220, 0.6);
}

.font-blue {
  color: #587EF4 !important;
  text-decoration: none;
}

.btn-blue {
  width: 140px;
  background: #587EF4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 25px;
  margin: 40px 0;
  font-size: 14px;
  transition: all 0.2s;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
}

.btn-blue:hover {
  box-shadow: 3px 5px 12px -1px rgba(52, 87, 220, 0.6);

}

.plr-10 {
  padding: 0 10px;
}

.card-alt {
  width: 300px;
  height: 360px;
}

.mb-30 {
  margin-bottom: 30px;
}

.main-heading {
  font-size: 20px;
  padding: 0 10px;
  margin: 10px 0;
  color: #202842;
}

.card-item {
  display: flex;
  align-items: center;
  border: 1px solid #E4E7ED;
  border-radius: 10px;
  margin: 15px 0;
}



.card-item-left {
  background: #EDFAF0;
  width: 115px;
  height: 80px;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  color: #57C8A9;

}

.card-item:nth-of-type(2) .card-item-left
 {
  color: #FF8734;
  background: #FDF1E3;
}

.score-grade {
  font-size: 24px;
  font-weight: bold;
  line-height: 1.3;
}

.score-percent {
  font-size: 16px;
}

.heading {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  line-height: 1.6;
}

.card-item-right {
  margin: 10px;
}

</style>
