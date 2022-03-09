const content = document.querySelectorAll(
  ".gridPostView .uabb-blog-posts-description p"
);
content.forEach((str) => {
  if (str.innerHTML.length > 200) {
    str.innerHTML = str.innerHTML.substring(0, 200) + "...";
  }
});
