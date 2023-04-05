function fetchData() {
    for (i = 1; i < 12; i++) {
      fetch(`https://bobsburgers-api.herokuapp.com/characters/${i}0`)
        .then(res => res.json())
        .then(data => renderCoffee(data));
    }
  }
  
  fetchData();
  
  function renderCoffee(data) {
    const img = document.createElement("img");
    img.src = data.image;
    document.querySelector("#images").appendChild(img);
  
    const li = document.createElement("li");
    li.textContent = data.name;
    document.querySelector("#coffee-list").appendChild(li);
  
    // Add a "click" event listener to the list item
    li.addEventListener("click", function() {
      // Remove any previously displayed images
      document.querySelectorAll("#images img").forEach(img => img.remove());
  
      // Display the corresponding image
      const img = document.createElement("img");
      img.src = data.image;
      document.querySelector("#images").appendChild(img);
    });
  
    const commentForm = document.querySelector("#comment-form");
    const commentList = document.querySelector("#comment-list");
    const likeBtn = document.querySelector("#like-btn");
    const likeCount = document.querySelector("#like-count");
  
    let commentId = 1;
    let likeCountValue = 0;
  
    // Add a "submit" event listener to the comment form
    commentForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const commentInput = document.querySelector("#comment-input");
      const commentText = commentInput.value.trim();
      if (commentText !== "") {
        const commentItem = document.createElement("li");
        commentItem.textContent = `${commentId}: ${commentText}`;
        commentList.appendChild(commentItem);
        commentInput.value = "";
        commentId++;
      }
    });
  
    // Add a "click" event listener to the like button
    likeBtn.addEventListener("click", function() {
      likeCountValue++;
      likeCount.textContent = likeCountValue;
    });
  }
  