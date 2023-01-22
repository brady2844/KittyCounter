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


  function comment() {
    var commentCounter = document.getElementById("commentCounter");
    var currentComments = parseInt(commentCounter.innerHTML);
    commentCounter.innerHTML = currentComments + 1;
  }

  
  function addMessage() {
    var input = document.getElementById("text-input").value;
    var container = document.getElementById("message-container");
    container.innerHTML += "<h3>" + input + "</h3>";
  }


document.addEventListener(
  "keypress",
  (event) => {
    var name = event.key;
    if (name === "Enter") {
      addMessage(), comment();
    }
  },
  false
);