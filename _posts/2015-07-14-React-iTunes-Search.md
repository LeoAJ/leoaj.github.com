---
layout: post
title: "React iTunes Search"
category: personal
tags: [React, ES6, Semantic UI, Webpack]
image:
  feature: react-iTunes-search.png
  credit: Leo Hsieh
  creditlink: http://leoj.js.org
comments: false
sourceCode: https://github.com/LeoAJ/react-iTunes-search
playNow: http://leoj.js.org/react-iTunes-search/
---

# React iTunes Search

A simple web app for iTunes store search, built with React, ES6, Semantic UI, Webpack. Instead of searching and finding all your favorite items in the iTunes store application on you PC or laptop, I would rather use it on my browser. That is why I created this web app.

### Structure

The entire functionality is built based on [iTunes Search API](https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html){:target="_blank"}, when search query being entered, the **onKeyDown** will trigger and emit the search event using default node emitter. This is all happened in **Header** component.

On the other hand, **Container** component is listening to the search event and once the event was triggered, using [reqwest](https://github.com/ded/reqwest){:target="_blank"} to send ajax request through iTunes Search API. After getting result data, use powerful React render to render the page.

### Why React

React stands for **V** in traditional MVC framework, which means there is no model and there is no controller, React can fully focus on how to emphasis and power the view rendering. In 2015, React has been the most popular UI framework so far, here are several reasons I personally like it a lot.

#### 1. Virtual DOM

Virtual DOM is the key point why React is so fast for rendering the page, as a Front end engineer, the top priority that I am concerned is the user experience. That is why I need the most fastest rendering framework to help me speed up the rendering process.

#### 2. Stateless

I believed there are a lot people had the same experience like I had, which was how to change the UI pieces to a specific state and change it or change it back again, so on and so forth. Once the web app became bigger and bigger, your entire web app will become harder and harder to maintain and extend. However, in React, as a developer, all I need to do is the determine what state I am going to be, I just need to tell React what is the end state I would like the UI to be, React will complete the state transaction for me, save a lot of trouble for me, it is so called **Declarative** way.

#### 3. Reusable Component

All React app are composed by React components, React components can represent a traditional UI components, thus, every components can be reuse in any places. I do not have to keep creating similar UI modules and maintain them again and again, all I need is one React component and it can be used everywhere.

### Why no Flux?

Flux provided a better way of unidirectional data flow, in this app, there is only one action is going to happen which is query search, to simplify the app I decided not to use Flux, since there is only one kind of action will happen.

### Why included jQuery?

The only reason I included jQuery is for Semantic UI dropdown, Ajax part is handled by reqwest, so for functional perspective, jQuery is totally unnecessary in this app.


> `JavaScript`, `React`, `ES6`, `Semantic UI`, `Webpack`
