---
layout: post
title: "Premier League Database"
category: school
tags: [Python, HTML, CSS, Oracle database, School Project]
image:
  feature: league-1.jpg
  credit: Leo Hsieh
  creditlink: http://leoj.js.org
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

### SQL datatables

**enroll**: player ID and belonging team ID

<table>
  <tr>
    <th>player_ID</th>
    <th>team_ID</th>
  </tr>
  <tr>
    <td>397</td>
    <td>37</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
</table>

player_ID|team_ID
---------|-------
397      |1
37       |2

**game**: single match information including match teams, total scores, time

game_ID |home      |away            |home_score|away_score|time
--------|----------|----------------|----------|----------|-----------
2       |Fulham    |Liverpool       |4         |0         |11-OCT-2010
3       |Blackpool |Manchester City |1         |1         |21-OCT-2010

**player**: player information

player_ID |player_name |age |nation  |position
----------|------------|----|--------|--------
38        |Bob         |17  |English |MF
39        |Carter      |22  |English |MF

**precord**: single player records per game

  * player_ID
  * game_ID
  * goal
  * assist
  * yellow_card
  * red_card
  * steal_success
  * pass_success
  * steal_total
  * pass_total
  * offside
  * foul
  * starter
  * appearance

### Top scorer

Sorting by most scorer int the league

<figure>
  <a href="/images/league-2.jpg"><img src="/images/league-2.jpg"></a>
</figure>

### Top offensive team

Sorting by team which score the goals most

<figure>
  <a href="/images/league-3.jpg"><img src="/images/league-3.jpg"></a>
</figure>

### Matched history

Enter two team names to seach the match history

<figure>
  <a href="/images/league-4.jpg"><img src="/images/league-4.jpg"></a>
</figure>

### Average age

Average age of all player for a specific team

<figure>
  <a href="/images/league-5.jpg"><img src="/images/league-5.jpg"></a>
</figure>

### Yellow card list

Sorting player and team who got yellow cards most

<figure>
  <a href="/images/league-6.jpg"><img src="/images/league-6.jpg"></a>
</figure>

### Selected player record

Looking for a specific player's record

<figure>
  <a href="/images/league-7.jpg"><img src="/images/league-7.jpg"></a>
</figure>

> `Python`, `HTML`, `CSS`, `Oracle database`.
