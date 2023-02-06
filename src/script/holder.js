const images = document.querySelectorAll("img[data-src]");

function loadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) return;

  img.setAttribute("src", src);
  img.removeAttribute("data-src");
}

const options = {
  threshold: 0,
  rootMargin: "0px 0px 200px 0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const img = entry.target;
    loadImage(img);
    observer.unobserve(img);
  });
}, options);

images.forEach((img) => {
  observer.observe(img);
});
