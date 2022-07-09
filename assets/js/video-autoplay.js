const videos = [...document.querySelectorAll("video")].filter(
  (el) => window.getComputedStyle(el).display !== "none"
);

const videoObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach(({ target, isIntersecting }) =>
      target[isIntersecting ? "play" : "pause"]()
    ),
  {
    threshold: 0.75,
  }
);

videos.forEach((video) => videoObserver.observe(video));

document.body.addEventListener("click", () =>
  videos.forEach((video) => {
    video.muted = false;
  })
);
