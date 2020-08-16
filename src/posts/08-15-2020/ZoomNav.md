---
title: "Zoom Nav"
dateDelimited: "15-August-2020"
date: "15 August 2020"
thumbnail: "./Zoomstuff.png"
summary: Everyone's using this thing right now.
tags: Menu, Navigation, Zoom
postCount: 4
---

<div class="zoom-nav-container">
  <nav class="zoom-nav">
    <a class="zoom-blue-link" href="#">
      <div class="zoom-nav-icon">
        <img src="./plus.png" />
      </div>
      Start new
    </a>
    <a class="zoom-nav-link" href="#">
      <div class="zoom-nav-icon">
        <img src="./inbox.png" />
      </div>
      Inbox
    </a>
    <a class="zoom-nav-link" href="#">
      <div class="zoom-nav-icon">
        <img src="./activity.png" />
      </div>
      Activity
    </a>
    <a class="zoom-nav-link" href="#">
      <div class="zoom-nav-icon">
        <img src="./calls.png" />
      </div>
      Calls
    </a>
    <a class="zoom-nav-link" href="#">
      <div class="zoom-nav-icon">
        <img src="./support.png" />
      </div>
      Support
    </a>
    <a class="zoom-nav-link" href="#">
      <div class="zoom-nav-icon">
        <img src="./more.png" />
      </div>
      More
    </a>
    
  </nav>
  <div class="zoom-nav-profile">
    <div class="zoom-nav-profile-pic">
      <img src="./profile.png" alt="Grace Washington" />
    </div>
    <p class="zoom-nav-name">Grace Washington</p>
  </div>
</div>

<style>

.zoom-nav-container {
  width: 100%;
  max-width: 310px;
  background: white;
  border-radius: 10px;
  padding: 40px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 5px 20px -1px #3961DD;
}

.zoom-nav-container img {
  box-shadow: none !important;
}

.zoom-nav {
    display: flex;
    flex-direction: column;
}

.zoom-nav-icon {
  width: 28px;
  margin-right: 15px;
}

.zoom-nav-link {
  color: #394158;
  text-decoration: none;
  font-size: 16px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.zoom-nav-link:hover {
  background: #F5FAFF;
}

.zoom-blue-link {
  font-size: 18px;
  color: white;
  background: #3961DD;
  margin: 20px 0;
  text-decoration: none;
  font-size: 16px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.zoom-nav-profile {
  display: flex;
  align-items: center;
  margin-top: 60px;
  padding: 0 20px;
}

.zoom-nav-profile-pic {
  width: 50px;
}

.zoom-nav-name {
  color: #394158;
  font-weight: bold;
  font-size: 16px;
  margin: 0 10px;
}

</style>