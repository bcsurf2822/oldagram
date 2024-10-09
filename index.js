const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "how do i look haha",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let newPost = document.getElementById("add");

let renderedPost = posts.map(function (a) {
  return `
  <div class="container">
    <div class="avatar-container">
        <img
          class="avatar"
          alt="Van Gogh Avatar"
          src=${a.avatar}
        />
        <div class="name-location">
          <h3 class="name">${a.name}</h3>
          <h4 class="location">${a.location}</h4>
        </div>
      </div>

      <img class="post-img" alt="Picture post " src=${a.post} />
      <div class="logos-container">
        <img
          class="btn"
          src="images/icon-heart.png"
          alt="Heart or like button"
        />
        <img class="btn" src="images/icon-comment.png" alt="comment button" />
        <img class="btn" src="images/icon-dm.png" alt="dm button" />
      </div>

      <div class="comments">
        <h4>${a.likes}</h4>
        <p class="comment"><span>${a.username}</span>  ${a.comment}</p>
      </div>
      </div>
 `;
});

newPost.innerHTML += renderedPost.join("");
