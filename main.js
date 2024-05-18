document.addEventListener('DOMContentLoaded', function () {
  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
      // You can add more options here as needed
  });
});
// Wrap the entire code inside a function to avoid global scope pollution
(function() {
  // Navbar animations for page1
  gsap.from(".navbar #name, .navbar h3", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.5,
  });

  gsap.from(".navbar ", {
    opacity: 0,
    duration: 2,
  });

  // Content animations for page1
  const contentTimeline = gsap.timeline();

  contentTimeline.from(".content h1, .content h2", {
    y: 40,
    duration: 1,
    opacity: 0,
  });

  const h3Text = document.getElementById('typingText');
  const text = h3Text.innerText;
  h3Text.innerHTML = '';

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.innerHTML = text[i];
    span.style.opacity = 0;
    h3Text.appendChild(span);

    contentTimeline.to(span, {
      opacity: 1,
      duration: 0.05,
      delay: 0
    });
  }

  contentTimeline.from(".content .btn", {
    y: 20,
    delay: 4
  });

  // ScrollTrigger for page 2 elements
  gsap.registerPlugin(ScrollTrigger); // Correct plugin registration

  // Animations for page 2 elements
  gsap.from(".part1 h2", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    
  });

  gsap.from(".service-slide .container", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.5,
    
  });

  gsap.from(".astrologer-info .info", {
    opacity: 0,
    y: 50,
    duration: 1.5,
   
  });

  gsap.from(".astrologer-info .img", {
    opacity: 0,
    y: 50,
    duration: 1.5,
   
  });

  gsap.from("footer", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    
  });

})();
