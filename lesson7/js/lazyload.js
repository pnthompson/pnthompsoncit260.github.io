//get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");
//optional parameters being set for the IntersectionObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.gettAttribute('data-src'));
    image.onload = () => { image.removeAttribute('data-src'); };
};

//first check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {});
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else { // just load All images if not supported..active
}