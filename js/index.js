function slideshow() {
  let slides = Array.prototype.slice.call(document.getElementsByClassName("timeline-item"));
  let bubbles = Array.prototype.slice.call(document.getElementsByClassName("timeline-bubble"));

  document.getElementById("timeline-bubbles").addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
      if (!e.target.classList.contains("active")) {
        // get active items and remove active
        document.querySelectorAll(".timeline-item.active, .timeline-bubble.active").forEach((item, index) => {
          item.classList.remove("active");
        });

        // make new items active
        slides[bubbles.indexOf(e.target)].classList.add("active");
        e.target.classList.add("active");
      }
    }
  });
}

slideshow();
