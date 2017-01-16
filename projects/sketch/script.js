$.getJSON("http://www.reddit.com/r/sketchdaily/new.json", function(json) {

  var post = 0;

  var title = json.data.children[post].data.title;

  var url = json.data.children[post].data.url;
  $(".comments").html("<a href='" + url + "'>View Submissions on Reddit</a>")


  var theme = title.substring(title.indexOf(" - ") + 3);
  $(".title").html(theme);

  var alt = json.data.children[post].data.selftext
  var altTheme = alt.substring(alt.indexOf(": ", alt.indexOf("Alt")) + 2,
    alt.indexOf("\n", alt.indexOf(": ", alt.indexOf("Alt"))));
  var linkIndex = altTheme.indexOf("](");
  if (linkIndex != -1) {
    altTheme = "<a href='" + altTheme.substring(altTheme.indexOf("(") + 1, altTheme.indexOf(")")) +
      "'>" + altTheme.substring(altTheme.indexOf("[") + 1, altTheme.indexOf("]")) + "</a>";
  }

  $(".altTheme").html(altTheme);
});
