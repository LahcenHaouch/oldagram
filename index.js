const POSTS = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
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

const ACTIONS = [
  { src: "images/icon-heart.png", className: "heart" },
  { src: "images/icon-comment.png", className: "comment" },
  { src: "images/icon-dm.png", className: "dm" },
];

const postsElement = document.querySelector("#posts");

POSTS.forEach((post) => {
  const newPost = document.createElement("li");
  newPost.classList.add("post");

  // post header

  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header", "container");
  const postHeaderAvatar = document.createElement("img");
  postHeaderAvatar.classList.add("avatar");
  postHeaderAvatar.setAttribute("src", post.avatar);
  const postHeaderTitle = document.createElement("div");
  const postName = document.createElement("h2");
  postName.textContent = post.name;
  const postLocation = document.createElement("h3");
  postLocation.textContent = post.location;

  postHeader.append(postHeaderAvatar, postHeaderTitle);
  postHeaderTitle.append(postName, postLocation);

  // post body

  const postBody = document.createElement("img");
  postBody.classList.add("post-body");
  postBody.setAttribute("src", post.post);

  // post footer

  const postFooter = document.createElement("div");
  postFooter.classList.add("post-footer", "container");
  const postActions = document.createElement("div");
  postActions.classList.add("post-actions");

  ACTIONS.forEach((action) => {
    const actionEl = document.createElement("img");
    actionEl.setAttribute("src", action.src);
    actionEl.classList.add("action", action.className);
    postActions.append(actionEl);
  });

  const postLike = document.createElement("p");
  postLike.classList.add("bold");
  postLike.textContent = `${post.likes} likes`;

  const postComment = document.createElement("p");
  const spanEl = document.createElement("span");
  spanEl.classList.add("bold");
  spanEl.textContent = post.username;

  postComment.append(spanEl, " just took a few mushrooms lol");

  postFooter.append(postActions, postLike, postComment);
  //

  newPost.append(postHeader, postBody, postFooter);
  postsElement.append(newPost);
});
