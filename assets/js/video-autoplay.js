// assets/js/video-autoplay.js

$(() => {
  const videos = $("video").filter((e) => $(e).css("display") !== "none");

  const videoObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ target, isIntersecting }) =>
        target[isIntersecting ? "play" : "pause"]()
      ),
    {
      threshold: 0.75,
    }
  );

  videos.each((video) => videoObserver.observe(video));

  $(document).on("click", () =>
    videos.each((video) => {
      $(video).prop("muted", false);
    })
  );
});
