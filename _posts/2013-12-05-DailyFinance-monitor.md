---
layout: post
title: "DailyFinance Monitor"
category: personal
tags: [JavaScript, NodeJs, AngularJs, Bootstrap]
image:
  feature: DailyFinance-monitor-1.png
  credit: Leo Hsieh
  creditlink: http://leoj.net
comments: false
sourceCode: https://github.com/LeoAJ/DailyFinance-monitor
playNow: http://54.201.105.208:1992
---

# To view all registered users for [DailyFinance]({% post_url 2013-10-05-DailyFinance %}).

The structure is very similar to DailyFinance, it just read all registered uses from mongoDB and output to client. To keep the user profile secured, when reading the user data from server, I re-write the output json structure to avoid sending password to the client.

> `JavaScript`, `NodeJs`, `AngularJs`, `Bootstrap`.