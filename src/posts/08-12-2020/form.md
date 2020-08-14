---
title: "Topic Submit"
dateDelimited: "12-August-2020"
date: "12 August 2020"
thumbnail: "./Post.png"
summary: Please fill in the missing fields!
tags: buttons,inputs,form
postCount: 3
---

<div>
  <form class="form-1" autocomplete="off">
    <fieldset class="form-1-fieldset">
      <legend class="form-1-legend">Create a new Topic</legend>
      <div class="form-1-container">
        <label class="form-1-title" for="title">Title</label>
        <input class="form-1-input" name="title" type="text" placeholder="Type title, or paste a link here" />
      </div>
      <div class="form-1-container-flex">
        <div class="form-1-category mr-5">
          <label for="category">Category</label>
          <select name="category">
            <option value="">Category</option>
            <option value="Art">Art</option>
            <option value="Culture">Culture</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
        <div class="form-1-tags">
          <label for="tags">Tags</label>
          <select name="tags">
            <option value="">Tags</option>
            <option value="Art">Hot</option>
            <option value="Culture">New</option>
            <option value="Technology">Controversial</option>
          </select>
        </div>
      </div>
      <div class="form-1-textarea">
        <label name="description">Enter your description here</label>
        <textarea name="description" rows="4" placeholder="Enter your description here"></textarea>
      </div>
      <div>
      </div>
    </fieldset>
    <div class="form-1-buttons-container">
      <button class="form-1-button mr-5">Create Topic</button>
      <button class="form-1-button btn-alt">Cancel</button>
    </div>
  </form>
</div>

<style>
  .form-1 {
    background: white;
    border: none;
    border-radius: 10px;
    padding: 20px 10px 25px 10px;
    box-shadow: 3px 5px 25px -1px #EC3168;
    max-width: 495px;
    margin: 0 auto;
    font-size: 14px;
  }

  .form-1-legend {
    color: #1C1B32;
    font-weight: bold;
    font-size: 18px;
  }

  .form-1-fieldset {
    border: none;
  }

  .form-1-container-flex, .form-1-buttons-container {
    display: flex;

  }

  .form-1-container, .form-1-container-flex, .form-1-textarea {
    margin: 5px 0;
  }

  .mr-5 {
    margin-right: 5px;
  }

  .form-1 input, .form-1 select, .form-1 textarea {
    border: 1px solid #D0DAEB;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    color: #1C1B32;
    max-width: 100%;
    resize: vertical;
    font-family: inherit;
  }

  .form-1 input::placeholder, .form-1 select::placeholder, .form-1 textarea::placeholder {
    color: #717E94;
  }

  .form-1-button {
    background: #EC3168;
    border: none;
    padding: 10px 0;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-alt {
    background: #EFF4FD;
    color: #717E94;
  }

  @media screen and (min-width: 500px) {
    .form-1 {
      padding: 40px;
    }

    .form-1 input, .form-1 select, .form-1 textarea {
      padding: 16px;
    }

    .form-1-container, .form-1-container-flex, .form-1-textarea {
      margin: 20px 0;
    }

    .mr-5 {
      margin-right: 20px;
    }

    .form-1-button {
      padding: 16px 0;
    }

  }

</style>