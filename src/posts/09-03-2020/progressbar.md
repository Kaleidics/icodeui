---
title: "Progress Bar"
dateDelimited: "03-September-2020"
date: "03 September 2020"
thumbnail: "./progressbar.png"
summary: It is a line with numbers?
tags: navigation, links
postCount: 6
---

<div>
  <div class="progress-bar">
    <div class="progress-heading-container">
      <h2 class="progress-heading">Progress Bar</h2>
      <p class="progress-text">All printing includes full-color on both sides.</p>
    </div>
    <div class="progress-steps-container">
      <a href="#" class="progress-step">
        <div class="progress-number-container">
          <p class="progress-number">1</p>
        </div>
        <p class="progress-label">Choose Size & Style</p>
      </a>
      <a href="#" class="progress-step">
        <div class="progress-number-container">
          <p class="progress-number">2</p>
        </div>
        <p class="progress-label">Choose Paper Type</p>
      </a>
      <a href="#" class="progress-step">
        <div class="progress-number-container">
          <p class="progress-number progress-step-active">3</p>
        </div>
        <p class="progress-label">Choose Quantity</p>
      </a>
      <a href="#" class="progress-step">
        <div class="progress-number-container">
          <p class="progress-number">4</p>
        </div>
        <p class="progress-label">Choose Packs</p>
      </a>
    </div>
  </div>
</div>


<style>
  .progress-bar {
    background: white;
    padding: 20px;
    color: #202842;
  }

  .progress-heading-container {
    margin-bottom: 20px;
  }

  .progress-heading {
    font-size: 26px;
  }

  .progress-text {
    font-size: 16px;
  }

  .progress-step {
    text-decoration: none;
    color: #202842;
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .progress-step-active {
    color: white;
    background: #202842;
    border-color: #202842;
  }

  .progress-step:hover .progress-number {
    color: white;
    background: #202842;
    border-color: #202842;
  }

  .progress-number {
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #979797;
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .progress-number-container {
    position: relative;
    width: 40px;
    margin-right: 40px;
  }

  .progress-label {
    font-size: 14px;
  }
  
  
  @media screen and (min-width: 1024px) {

    .progress-bar {
      padding: 48px;
    }
    .progress-steps-container {
      display: flex;
    }

    .progress-step {
      flex-direction: column;
      align-items: flex-start;
    }

    .progress-number-container {
      width: 100%;
      margin: 0 0 10px 0;
    }

    .progress-steps-container .progress-step:not(:last-child) .progress-number-container::after {
      content: "";
      width: calc(100% - 60px);
      height: 2px;
      background: #979797;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50px;
      opacity: 0.5;
    }
  }

</style>