/**
 * Function - truncates paragrapgh to specific length
 * @param {*} element html element
 * @param {*} maxLength restrict the paragrapgh to this length
 * @returns truncted stringfrom inner text
 */
const truncateText = (element, maxLength) => {
  truncated = element.innerText;
  if (truncated.length > maxLength) {
    truncated = truncated.substr(0, maxLength) + "...";
  }
  return truncated;
};

//Truncate all paragraph text in blog cards
let blogs = document.querySelectorAll(".trunctext");
blogs.forEach((blog) => {
  blog.innerText = truncateText(blog, 80);
});
