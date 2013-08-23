---
layout: post
title: "GeoTagger & GeoGame"
category: school
tags: [JavaScript, NodeJs, CouchDB, HTML, CSS, YUI, Google Map API, Amazon EC2, School Project]
comments: false
siteUrl: https://sites.google.com/site/leo0924/
---

# Game with a purpose

This project is sponsored by Yahoo! Company, the employee Jon Rahoi who is also my alumnus of USFCS, I appreciate that he gave me and my team this opportunity to do this project.

There are two part of this project, GeoTagger and GeoGame and I am taking responsible in GeoGame part. The entire web server was build on the Amazon EC2 server, back end server is written in NodeJs and database we used CouchDB. Front-end is JavaScript, HTML and CSS.

We believed that most people knew where the location is, but they do not know where the location is on the **map**. Thus, we tried to analysis how people are familiar with the locations on the map. The concept we were using is **GWAP** (Game with a purpose), we built a game to accumulate the results, as more results we got, as more close we can analysis that for most peoples' understanding, where is that location on the map.

### Main page

Before game start, user need to login and select news or events from our database to read, and those data are coming from geo tagger.

<figure>
  <a href="/images/geo-4.jpg"><img src="/images/geo-4.jpg"></a>
  <figcaption>events or news information is loading in the iframe</figcaption>
</figure>

### Instruction

Some instructions for the new users.

<figure>
  <a href="/images/geo-1.jpg"><img src="/images/geo-1.jpg"></a>
  <figcaption>Provide basic instruction for users</figcaption>
</figure>

### Pop up google map

Each single news or events will have a correspond location. This initial location is coming from Geo tagger.

<figure>
  <a href="/images/geo-2.jpg"><img src="/images/geo-2.jpg"></a>
  <figcaption>where location is related to the events</figcaption>
</figure>

### Get score !!

After clicking on the map we will generate the score based on how close to the actual location, it is just like dart, the more close the more higher score you will get.

<figure>
  <a href="/images/geo-3.jpg"><img src="/images/geo-3.jpg"></a>
  <figcaption>Pop up scores after user played</figcaption>
</figure>

### More Info

For more information please visit our project wesite (link is on the left).

> Implement with `JavaScript`, `Node.JS`, `CouchDB`, `HTML`, `CSS`, `Google Map API`, `YUI`, `Amazon EC2`.