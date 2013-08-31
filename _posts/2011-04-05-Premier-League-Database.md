---
layout: post
title: "Premier League Database"
category: school
tags: [Python, HTML, CSS, Oracle database, School Project]
image:
  feature: league-1.jpg
  credit: Leo Hsieh
  creditlink: http://leoj.net
comments: false
sourceCode: http://github.com/LeoAJ/Premier-League-Database
---

# Online instant database

I am a soccer fan, I would love to follow my favorite team and players performance. In order to that, I built a simple database for track all the teams and players performance for entire season, anyone who are sport enthusiasm will definitely love this one just like me.

I provided some functionality for users to track their favorite teams or players performance, such as the top scorers or best offensive teams etc. The entire application structure is simple, I have a simple web server built with Python, then connect to the Oracle database to fetch any information by SQL statement. After that, all the request function from users will output results as a HTML web page.

### Program structure

* use base http server library to create simple server on the local host
* execute basic **GET** and **POST** request
* distinguish what kind of POST request received and execute relative action
* connect to oracle database and execute particular SQL statement
* parse the output result from oracle database
* combine well-organized result from database with HTML file to pass to the front-end

### Top scorer

<figure>
  <a href="/images/league-2.jpg"><img src="/images/league-2.jpg"></a>
</figure>

### Top offensive team

<figure>
  <a href="/images/league-3.jpg"><img src="/images/league-3.jpg"></a>
</figure>

### Matched history

<figure>
  <a href="/images/league-4.jpg"><img src="/images/league-4.jpg"></a>
</figure>

### Average age

<figure>
  <a href="/images/league-5.jpg"><img src="/images/league-5.jpg"></a>
</figure>

### Yellow card list

<figure>
  <a href="/images/league-6.jpg"><img src="/images/league-6.jpg"></a>
</figure>

### Selected player record

<figure>
  <a href="/images/league-7.jpg"><img src="/images/league-7.jpg"></a>
</figure>

> `Python`, `HTML`, `CSS`, `Oracle database`.