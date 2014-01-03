---
layout: post
title: "DailyFinance Web App (Multi-platform)"
category: personal
tags: [JavaScript, NodeJs, AngularJs, Bootstrap]
comments: false
sourceCode: https://github.com/LeoAJ/DailyFinance
playNow: http://54.201.105.208:1985
---

# DailyFinance Web App (Multi-platform)

DailyFinance is a useful tool for recording daily expenses, all you need is the interest access, any devices can use this tool as long as it is with browsers. User can register accounts by email, will be able to retrieve the password by email if they forget the password. User can create a new expense, update or delete current expenses and browse all expenses, they can delete all expenses and delete the entire account as well. You can use [DailyFinance-monitor]({% post_url 2013-12-05-DailyFinance-monitor %}) to view all registered users.

### Structure

DailyFinance is a mobile first web app deployed on Amazon EC2, used mongoDB as a database to store all users data, all request from client to server are RESTful API calls. The UI is styled by bootstrap 3 can be used by mobile, tablet even on desktop and laptop. UI logic are based on AngularJs which is one of the most popular MVC JavaScript framework.

### Server

I used express to develop the node server and used mongoose to connect to mongoDB. Passport is handling log in, log out and authenticated for API as well. Emailjs sent email to user to remind the user password. I used my own gmail account as the default email setting so you will received email from my gmail if you forget your password.

Here is the main function of each js file in **server/lib** folder:

* `account.js` all CRUD operation related to accountss
* `api.js` all api entries
* `authentication.js` authentication based on passportjs
* `expense.js` all CRUD operation related to expenses
* `index.js` main server settings
* `password.js` all CRUD operation related to password

### Client

I used MVC structure by angularjs to implment the entire front-end. Besides views and controllers, I used several services to make the API calls and initialize the popup modals. Also, there is one directive for navbar which is used in every views. All the css are based on Bootstrap 3.0 and it is compiled by compass.

### Database

As you can see I used mongoDB as the main database because it is JSON-like document-oriented database which is very convenient for node js development.

### API

All API built in RESTful. Main operations are CRUD which is create, read, update and delete. Use GET as read and DELETE as delete operations as usual, for create I used POST and update use PUT, which is not necessary to use POST as create, POST can be used as update as well. The main difference between them is POST is **idempotent** and PUT is not.

There is few things to mention when I sent the response http code back from server. Used 201 instead of 200 when new entry got created. Used 404 if there is no data got found and 500 if there is any database error.

### Unit Test

Unit test is one of the important step in software development, you cannot develop good software without a good unit test. All unit test are used **karma** as test runner and jasmine as BDD framework. All unit testing code is in the **test** folder, **spec** is where the code is **mock** is where the mocking code is such as modal and app authentication service.

### Deploy

Use [pm2](https://github.com/Unitech/pm2){:target="_blank"} as deploying process manager. All I need to do is to create a script to start the grunt task and pm2 will start the server as a daemon process running as a backgrund task.

This is my `start.sh` script, on amazon ec2 I just do `pm2 start start.sh` and the server will start!

{% highlight bash %}

#!bin/sh
grunt deploy

{% endhighlight %}

### Feedbacks

Please feel free to play with it and let me know any feedbacks or any new features you like to put into. Thanks!

> `JavaScript`, `NodeJs`, `AngularJs`, `Bootstrap`.