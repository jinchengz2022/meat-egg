<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
      <li class="item">
        <a href="{{ item.url }}">{{ item.title }}</a>
        <p>{{ helper.relativeTime(item.time)}}</p>
      </li>
      {% endfor %}
    </ul>
  </body>
</html>