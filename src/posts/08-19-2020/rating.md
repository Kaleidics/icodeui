---
title: "Rating"
dateDelimited: "19-August-2020"
date: "19 August 2020"
thumbnail: "./Rating.png"
summary: How likely are you to answer this question?
tags: inputs,form,rating
postCount: 5
---

<div class="rating-container">
  <form class="rating-form">
    <p class="rating-form-question">How likely are you to answer this question?</p>
    <div class="rating-radio-container">
      <div>
        <input type="radio" id="rate-0" class="rating-input" name="rating" value="0">
        <label class="rating-label" for="rate-0">0</label>
      </div>
      <div>
        <input type="radio" id="rate-1" class="rating-input" name="rating" value="1">
        <label class="rating-label" for="rate-1">1</label>
      </div>
      <div>
        <input type="radio" id="rate-2" class="rating-input" name="rating" value="2">
        <label class="rating-label" for="rate-2">2</label>
      </div>
      <div>
        <input type="radio" id="rate-3" class="rating-input" name="rating" value="3">
        <label class="rating-label" for="rate-3">3</label>
      </div>
      <div>
        <input type="radio" id="rate-4" class="rating-input" name="rating" value="4">
        <label class="rating-label" for="rate-4">4</label>
      </div>
      <div>
        <input type="radio" id="rate-5" class="rating-input" name="rating" value="5" checked="checked">
        <label class="rating-label" for="rate-5">5</label>
      </div>
      <div>
        <input type="radio" id="rate-6" class="rating-input" name="rating" value="6">
        <label class="rating-label" for="rate-6">6</label>
      </div>
      <div>
        <input type="radio" id="rate-7" class="rating-input" name="rating" value="7">
        <label class="rating-label" for="rate-7">7</label>
      </div>
      <div>
        <input type="radio" id="rate-8" class="rating-input" name="rating" value="8">
        <label class="rating-label" for="rate-8">8</label>
      </div>
      <div>
        <input type="radio" id="rate-9" class="rating-input" name="rating" value="9">
        <label class="rating-label" for="rate-9">9</label>
      </div>
      <div>
        <input type="radio" id="rate-10" class="rating-input" name="rating" value="10">
        <label class="rating-label" for="rate-10" style="padding: 8px 11px !important;">10</label>
      </div>
    </div>
    <div class="rating-left-right">
      <p class="rating-label-left">Not likely at all</p>
      <p class="rating-label-right">Extremely likely</p>
    </div>
    <div class="rating-form-controls">
      <a class="rating-form-skip" href="#">Skip</a>
      <button class="rating-form-submit" type="button" href="#">Submit</button>
    </div>
  </form>
</div>


<style>

.rating-form {
    width: 100%;
    max-width: 630px;
    background: white;
    padding: 25px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    box-shadow: 0px 5px 10px #1A2B63;
    border-radius: 5px;
}

.rating-form-question {
  font-size: 14px;
  font-weight: bold;
  color: #202842;
  text-align: center;
  margin-bottom: 35px;
}

.rating-input {
  display: none;
}

.rating-label {
  padding: 8px 14px;
  border: 1px solid #DCDFF1;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.rating-label:hover, input[type="radio"]:checked + .rating-label {
  background: #1A2B63;
  border-color: #1A2B63;
  color: white;
  box-shadow: 0px 5px 10px #1A2B63;
}

.rating-radio-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (min-width: 780px) {
  .rating-radio-container {
    justify-content: space-between;
  }

  .rating-radio-container div:first-of-type {
    margin-left: 0;
    }

    .rating-radio-container div:last-of-type {
    margin-right: 0;
    }
}

.rating-radio-container div {
  width: 38px;
  height: 35px;
  margin: 8px;
}

.rating-left-right {
  display: flex;
  justify-content: space-between;
}

.rating-label-left, .rating-label-right {
  font-size: 12px;
  color: #5D698D;
  margin-bottom: 26px;
}

.rating-label-right {
  text-align: right;
}

.rating-form-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating-form-skip {
  text-decoration: none;
  font-size: 14px;
  color: #5D698D;
  width: 30px;
}

.rating-form-submit {
  width: 90px;
  padding: 10px 20px;
  border: none;
  background: #3457DC;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
}

.rating-form-submit:hover {
  background: #1A2B63;
}

</style>