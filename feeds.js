var activity_feeds = document.getElementsByClassName("activity feed-entry card");
var individual_array = Array.prototype.slice.call(document.getElementsByClassName("activity feed-entry card"), 0);
var group_array = Array.prototype.slice.call(document.getElementsByClassName("group-activity feed-entry card"), 0);
var activity_array = individual_array.concat(group_array);
var sorted_activity_feeds = [];
var tmp = activity_array.sort(
  (a, b) => Date.parse(a.getElementsByClassName("timestamp")[0].getAttributeNode("datetime").value) < Date.parse(b.getElementsByClassName("timestamp")[0].getAttributeNode("datetime").value) ? 1 : -1);
for (let i = 0; i < tmp.length; i++) {
    sorted_activity_feeds.push(tmp[i].cloneNode(true));
}

try {
  Array.from(document.getElementsByClassName("feed-entry card")).forEach(
    function(card, index) {
      if (card.className.includes("activity")) {
        var replacement = sorted_activity_feeds[index];
        console.log("index: " + index + ": " + replacement.getElementsByClassName("title-text")[0].innerText + ", " + replacement.getElementsByClassName("timestamp")[0].getAttributeNode("datetime").value);
        console.log(card.getElementsByClassName("title-text")[0].innerText + ", " + card.getElementsByClassName("timestamp")[0].getAttributeNode("datetime").value);

        card.replaceWith(replacement);
      }
    }
  );
} catch (err) {
  // This happens because each person in group-activity has their own feed-entry card, but when that card is replaced with a group,
  // We'll run out of cards to replace quicker than the number of available cards.
  console.log('Expected error due to group-activity. No impact.');
}