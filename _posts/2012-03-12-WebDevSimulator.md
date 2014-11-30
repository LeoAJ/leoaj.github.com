---
layout: post
title: "WebDevSimulator"
category: personal
tags: [JavaScript, HTML, CSS, jQuery, Personal Project]
image:
  feature: webDev-1.jpg
  credit: Leo Hsieh
  creditlink: http://leoj.net
comments: false
sourceCode: https://github.com/LeoAJ/WebDevSimulator
<!-- playNow: http://www.cs.usfca.edu/~lhsieh/WebDevSimulator/ -->
---

### Web Development Simulator

As a front-end developer, most of time we just need a simple IDE to test our idea, do not need a entire powerful IDE to help us. Now, there are lots of online instant web development tool, such as [**jsfiddle**](http://jsfiddle.net/), it will be a good tool for developer to verify their code. Obviously, this is also kind of web app, thus, I was wondering that maybe I can simulate one by my own.

### HTML & CSS

I only simulate HTML and CSS but not JavaScript try to make it as simple as possible. HTML is handling the format and CSS handling the styling. The basic prinple is very clear, so the question is how to treat the code which user typed as HTML or CSS.

### jQuery text() VS html()

Thanks to **jQuery** this powerful javascript library makes our live easier. In jQuery it provided **text()** and **html()** two methods to get the text contents. The difference is text() treats string as text but html() treats string as HTML. Thus, this is all we need to do to make code in HTML textarea as HTML.

```
body.html($this.val());
```

And take code in CSS textarea as string, append them into style tag.

```
style.text($this.val());
```

### Be my guest

Please play it and enjoy it.

> `JavaScript`, `HTML`, `CSS`, `jQuery`.