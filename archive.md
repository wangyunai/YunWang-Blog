---
layout: page
title: Archive
permalink: /archive/
---

# Blog Archive

A chronological list of all blog posts.

{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h2 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h2>
    <ul>
    {% assign date = currentdate %}
  {% endif %}
  <li>
    <span>{{ post.date | date: "%b %-d" }}</span> - 
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  {% if forloop.last %}</ul>{% endif %}
{% endfor %} 