---
layout: post
title: "HTML5 Canvas Tetris"
category: personal
tags: [JavaScript, HTML, CSS, Personal Project]
comments: false
playNow: http://www.cs.usfca.edu/~lhsieh/Tetris/main.html
---

# My First Little Game

I am always a game lover, to build a game was a dream in my brain for a long period of time, this might be the first small and integrated game I have ever built, with simple different colors **apple** icons to composed the Tetris. Even though it is simple, I hope you all can enjoy it. Have Fun!!!

### HTML5 canvas

As you can see, all the graph you saw in this web app are created by HTML5 canvas. The main reason to focus on HTML5 canvas instead of just loading a image is because of performance. Loading image has a lot of latency, by using HTML5 canvas element I can reduce the loading latency and easily increase the performance.

### Game basic function

Once page load, use html canvas to draw `stackArea` (where user can see what is coming next), `tetrisground` (tetris background) and `tetrisbox` (tetris itself).

### Random generate tetris

Tetris are randomly generated, there are seven different kinds of tetris totally, each one of it are defined by 2 dimensional coordinate system.

for example this is how square tetris got defined:

```
[[ 0, 0], [ 1, 0], [ 0, 1], [ 1, 1]]
```

### Move

Basic moving functions are `moveRight`, `moveLeft` and `moveDown`. Essentially it will compare current position with the max width or height or entire tetris ground, if it does not reach the maximum then plus 1.

### Rotate

I got `rotateLeft` and `rotateRight` two function to take responsibility of rotating tetris. Each of it will call `setCoordinateX` and `setCoordinateY` four times to properly set the new coordinate position for the tetris based on rotate to left or right.

### Score

Basic score rule is 1 point for each tetris and X numbers of line removed at one time will two squared of X points.

### Level

every 50 point is a level, once level upgrade, speed will go faster.

### Let's play!

<figure>
  <a href="/images/Tetris-1.jpg"><img src="/images/Tetris-1.jpg"></a>
</figure>