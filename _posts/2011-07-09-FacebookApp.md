---
layout: post
title: "Top Friends FaceBook App"
category: personal
tags: [JavaScript, HTML, CSS, Facebook API, jQuery, handlebars, Modernizr, Personal Project]
image:
  feature: fb-1.png
  credit: Leo Hsieh
  creditlink: http://leoj.js.org
comments: false
sourceCode: http://github.com/LeoAJ/TopFriendsFaceBookWebApp
<!-- playNow: http://www.cs.usfca.edu/~lhsieh/friends/friends/Friends.html -->
---

# Go and check out who is your Top 10 closest friends on FaceBook

This is web app to obtain your best friends based on the algorithm of how friends behavior on your personal walls.

### Algorithm

The algorithm is the fundational part of this web app, it makes the decisioin who is the clostest fried of yours.

To rank your friends, I came up a algorithm based on your friends behavior on your personal. It is a way to transfer human behavior to computer science for more analysis. Behind the scene, it is not only the software, but more business values inside.

These are your friends behavior on your walls order by score from higt to low:

1. Post on your wall
2. Comment on your post
3. Click **like** on your post

Thus, let's say post on your wall will get the highest score for example **3**, and then make comment for example **2**, then click like for example **1**.

The reason to give the score like this is because **the best is rare**. Recall your personal wall, what is the most common things your friends will do on your personal wall, it is obvious to **click like**, for some friends who is much more close to us, they will **reply on your posts** sometimes, finally, **post message on you wall** when something important is going to happen for example your birthday will be the best case etc.

Based on this algorithm, each friends will get a score based on what he or she has done on your personal wall. And that is how the ranking comes from.

### Third party dependency

* [jQuery](http://jquery.com/) - fix cross browser issue.
* [jQuery UI](http://jqueryui.com/) - pop up modal and button design.
* [handlebars](http://handlebarsjs.com/) - html templates.
* [Modernizr](http://modernizr.com/) - feature detection library.

### Before started

Click get to start retrieving data from Facebook, do data analysis (It may takes a while due to latency from Facebook API).

<figure>
  <a href="/images/fb-2.png"><img src="/images/fb-2.png"></a>
</figure>

### Total recent responed

On the right hand side, there is a section displaying **recently total actions your friends did on your personal wall**.

<figure>
  <a href="/images/fb-3.png"><img src="/images/fb-3.png"></a>
</figure>

### My info

Loading recent 25 posts on your personal walls, only 25 posts is because Facebook API only return recently 25 posts only. As you can see, each posts contain different information not just text, it is importing photos, tagging friends, locations etc, and those are external links users can link to original facebook page.

<figure class="half">
  <a href="/images/fb-4.png"><img src="/images/fb-4.png"></a>
  <a href="/images/fb-5.png"><img src="/images/fb-5.png"></a>
</figure>


### My friends list

Ranking of your cloest friends. Also, display the total numbers of each single operation of your each friends.

<figure class="half">
  <a href="/images/fb-6.png"><img src="/images/fb-6.png"></a>
  <a href="/images/fb-7.png"><img src="/images/fb-7.png"></a>
</figure>


### Gender ratio

This is the most interesting function in this web app. We all know how many friends we had on Facebook, but we do not know what exactly how many male friends I have and how many female friends I have. By the way, the sex icon in the pop up modal is created by HTML5 canvas not the images.

<figure>
  <a href="/images/fb-8.png"><img src="/images/fb-8.png"></a>
</figure>

### Accuracy
Due to Facebook API did not return enough information, this ranking results are just for reference and for fun. So check it out use demo link on the left sie and Have Fun!

> `JavaScript`, `HTML`, `CSS`, `FaceBook API`, `jQuery`, `handlebars`, `Modernizr`.
