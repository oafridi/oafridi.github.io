---
layout: post
title: Floyd's Cycle Detection Algorithm
category: algorithms
tags: algorithms comp-sci
summary: An exploration of Floyd's cycle detection algorithm
---

<p>A common question asked in job interviews is how to detect cycles within linkedlists. The question sometimes goes further and asks you to return the first node of the cycle or the length of the cycle. The best known solution to this is <a href="http://en.wikipedia.org/wiki/Cycle_detection#Tortoise_and_hare">Floyd's Cycle-Finding Algorithm</a> Which I was taught as the Tortoise and hare solution (possibly because it was never proved that Robert W. Floyd actually invented it). 
</p>

<h4>Superficial Explanation</h4>

<p>How it works is fairly simple. You start with two pointers both pointing at the head of the list.</p>

<a href="/imgs/posts/fca_1.png" data-lightbox="image-1" data-title="1">![1](/imgs/posts/fca_1.png)</a>

<p>The key point of the detection algorithm is that one pointer - the hare, travels as twice as fast the other - the tortoise. If there is a loop the second pointer would travel the loop and eventually meet the first pointer.</p>

<p>Thus we've detected a cycle.</p>

<a href="/imgs/posts/fca_2.png" data-lightbox="image-2" data-title="2">![2](/imgs/posts/fca_2.png)</a>

<h4>Detailed Explanation</h4>
