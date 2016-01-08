---
layout: post
title: "React Facebook Friends"
category: personal
tags: [React, ES6, ES7, Webpack, Facebook]
image:
  feature: react-facebook-friends.png
  credit: Leo Hsieh
  creditlink: http://leoj.js.org
comments: false
sourceCode: https://github.com/LeoAJ/react-facebook-friends
playNow: http://leoj.js.org/react-facebook-friends/
---

# React Facebook Friends

This is a react version of [Top Friends FaceBook App](http://leoj.js.org/personal/FacebookApp/). Basic idea is the same, **quantify your FaceBook friendship based on human behavior**.

### Async fetching data through FaceBook API

According to Facebook API each Likes, posts, comments will only return most 25 data back for a single API request, so the question become how to get all data efficiency? Let's use async programming with new ES7 feature, **async/await**.

From Promise (ES5) to Generator (ES6) and now async/await (ES7), JavaScript is keeping changing to let async programming more and more easier.

### Code structure

Let's dig into the code and see how async/await works; In `App` component, let's start fetching data from API;

{% highlight JavaScript %}
(async () => {
  try {
    const { profile, myFriends } = await getData();
    this.setState({ status: response.status, profile, myFriends });
  } catch (e) {
    console.error(e);
    this.setState({ status: 'err' });
  }
})();
{% endhighlight %}

As you can see `getData` is the function which made API call and return a promise. `const { profile, myFriends } = await getData();` will wait until the data got fetched successfully from FaceBook API, and then and only then `this.setState` will execute. In here, you can see the **async/await** allowed us to write asynchronous code looks just like synchronous code.

Let's check `getData` a bit more to see what is going on there; After `FB.api` get the data, start to analyze the raw data set return from API in order to make it more useful for UI rendering.

{% highlight JavaScript %}
analyze(response, feedInstance)
{% endhighlight %}

In here, function `analyze` return a list of promises and we want to wait all promises get resolved to move on to next step (render UI).

So what does each promise do? When we get raw feed data from API, each feed data contains three different categories: `likes`, `posts` and `comments`. The task here is to accumulate all likes, posts and comments based on each of your friends. The tricky thing is there will be the most 25 data set return from API, there might be more data, there might not be, we do not know.

Thus, in here, **use `async/await` and `recursion` to continue sending request to get more data back if there is more data, if there is no more data, terminate recursion (base case)**. The code is in `paging.js`.

{% highlight JavaScript %}
await Promise.all(/* list of promises */);
{% endhighlight %}

`await Promise.all()` will wait until all promises get resolved, and then continue process. Meanwhile, we do not know when promise will resolve or which promise will resolve first, only thing we can make sure is the UI will only render when everything is ready.

Finally, this is an old idea and implement with new technologies, hope everyone enjoy this small app, maybe you can figure out who is your really friends afterwards.

> `JavaScript`, `React`, `ES6`, `ES7`, `Webpack`
