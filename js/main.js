//
function getGif() {
  let input = $("#searchtext").val();
  var xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q=" +
      input +
      "+&api_key=QvMX1GF1Gy8qZJiUsDL9yClhF7Xm1djW&limit=10"
  );
  xhr.done(function(response) {
    console.log("success got data", response);

    let gifs = response.data;

    for (i in gifs) {
      $(".inner").append(
        "<img src='" +
          gifs[i].images.original.url +
          "' style='height: 350px; width: 350px;'/>"
      );
    }
  });
  return;
}
