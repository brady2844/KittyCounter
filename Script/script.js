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
    var input = document.getElementById("commentCounter");
    var currentComments = parseInt(commentCounnter.innerHTML);
    commentCounter,innerHTML = currentComments + 1
  }

  
  function addMessage() {
    var input = document.getElementById("text-input").value;
    var container = document.getElementById("message-container");
    container.innerHTML += "<h3>" + input + "</h3>";
  }


document.getElementById("text-input").addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submitBtn").submit();
    } 
} )
