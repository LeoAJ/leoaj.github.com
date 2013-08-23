---
layout: post
title: "Search Engine"
category: school
tags: [Java, Java Servlet, HTML, CSS, JavaScript, School Project]
comments: false
sourceCode: http://github.com/LeoAJ/Search-Engine
---

# Search engine based on web crawler

In this project, I developed a personalized search engine with based on the **web crawler**, once I start the search engine, it will crawl the particular URL first and store all data into memory for searching later, the data structure I used in here is [**Inverted Index**](http://en.wikipedia.org/wiki/Inverted_index).

For every users, they will have basic user profile, including login, logout and change password function, allowed users to perform searches and maintain searched query history and visited links.

There is a dynamic top 10 query word in the right side of the page, which is updating immediately once every query word got searched, the most used query word will set to be
No.1 in the top 10 query words.

### Login & Crawling

Login tab and start crawling before search engine start.

<figure class="half">
  <a href="/images/search-3.jpg"><img class="borderFrame" src="/images/search-3.jpg"></a>
  <a href="/images/search-2.jpg"><img class="borderFrame" src="/images/search-2.jpg"></a>
  <figcaption>Start to crawl web pages</figcaption>
</figure>

### Dynamic query table & Main page

Main search page and provided dynamic query table in the results page, query table will update after each single search.

<figure class="half">
  <a href="/images/search-4.jpg"><img class="borderFrame" src="/images/search-4.jpg"></a>
  <a href="/images/search-11.jpg"><img class="borderFrame" src="/images/search-11.jpg"></a>
  <figcaption>Dynamic updating top 10 search query</figcaption>
</figure>

### Results

Test searching results

<figure class="half">
  <a href="/images/search-5.jpg"><img class="borderFrame" src="/images/search-5.jpg"></a>
  <a href="/images/search-6.jpg"><img class="borderFrame" src="/images/search-6.jpg"></a>
</figure>

### User history

Clear and view the user history

<figure class="half">
  <a href="/images/search-7.jpg"><img class="borderFrame" src="/images/search-7.jpg"></a>
  <a href="/images/search-9.jpg"><img class="borderFrame" src="/images/search-9.jpg"></a>
</figure>

### Personal setting

Personal setting include: changing password and number of links in a page

<figure class="third">
  <a href="/images/search-1.jpg"><img class="borderFrame" src="/images/search-1.jpg"></a>
  <a href="/images/search-8.jpg"><img class="borderFrame" src="/images/search-8.jpg"></a>
  <a href="/images/search-10.jpg"><img class="borderFrame" src="/images/search-10.jpg"></a>
</figure>

> `Java`, `Java Servlet`, `HTML`, `CSS`, `JavaScript`.