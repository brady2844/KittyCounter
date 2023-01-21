function like() {
    var likeCounter = document.getElementById("likeCounter");
    var currentLikes = parseInt(likeCounter.innerHTML);
    likeCounter.innerHTML = currentLikes + 1;
  }
  
  function dislike() {
    var likeCounter = document.getElementById("likeCounter");
    var currentLikes = parseInt(likeCounter.innerHTML);
    likeCounter.innerHTML = currentLikes - 1;
  }

  function addMessage() {
    var input = document.getElementById("text-input").value;
    var container = document.getElementById("message-container");
    container.innerHTML += "<p>" + input + "</p>";
  }