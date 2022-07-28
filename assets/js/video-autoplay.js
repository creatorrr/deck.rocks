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

  const iterations = {};

  videos.each((idx, video) => {
    iterations[idx] = 0;
    videoObserver.observe(video);

    video.addEventListener(
      "ended",
      () => {
        console.log(`Video played: (${iterations[idx]}) times`);

        if (iterations[idx] < 5) {
          video.currentTime = 0;
          video.play();
          iterations[idx] += 1;
        }
      },
      false
    );
  });

  $(document).on("click", () =>
    videos.each((idx, video) => {
      $(video).prop("muted", false);
    })
  );
});
