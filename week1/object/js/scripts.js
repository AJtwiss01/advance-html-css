document.getElementById("post-it").addEventListener("click", element => {
  console.log(element);
  let postElement = document.getElementById("post-it");
  if (postElement.style.background != "blue") {
    postElement.style.background = "blue";
  } else {
    postElement.style.background = "#f2965c";
  }

  alert(`this is a event click on ${element}`);
});
