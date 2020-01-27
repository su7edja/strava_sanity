console.log('HOLA!!!!');
var activity_feeds = document.getElementsByClassName("activity feed-entry card");
var sorted_activity_feeds = [];
var tmp = Array.from(activity_feeds).sort(
  (a, b) => Date.parse(a.getElementsByClassName("timestamp")[0].getAttributeNode("datetime").value) < Date.parse(b.getElementsByClassName("timestamp")[0].getAttributeNode("datetime").value) ? 1 : -1);
for (let i = 0; i < tmp.length; i++) {
    sorted_activity_feeds.push(tmp[i].cloneNode(true));
}

Array.from(document.getElementsByClassName("activity feed-entry card")).forEach(
  function(card, index) {
    // do stuff
    var replacement = sorted_activity_feeds[index];
    console.log("index: " + index + ": " + replacement.getElementsByClassName("title-text")[0].innerText + ", " + replacement.getElementsByClassName("timestamp")[0].getAttributeNode("datetime").value);
    console.log(card.getElementsByClassName("title-text")[0].innerText + ", " + card.getElementsByClassName("timestamp")[0].getAttributeNode("datetime").value);

    card.replaceWith(replacement);
  }
);