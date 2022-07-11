// assets/js/control.js

const handlePermalinkBtn = (e) => {
  const { prefill, contentSelector } = APPLICATION_DATA;

  // prevent anchor click
  e.preventDefault();

  const permalink = window.location.href + "&nocontrols";

  // Copy permalink
  navigator.clipboard.writeText(permalink);
  alert("Copied!");

  // Navigate to permalink
  window.location = permalink;
};

const handlePrintBtn = (e) => {
  // prevent anchor click
  e.preventDefault();

  const { prefill, contentSelector } = APPLICATION_DATA;
  const { contentWindow } = $(contentSelector);

  if (!contentWindow) return console.error("iframe not found");

  // Set iframe window parameter to print-pdf (for reveal.js)
  contentWindow.location.search = "?print-pdf";

  // defer print (wait for reveal.js to do its thing)
  contentWindow.setTimeout(() => contentWindow.print(), 500);
};

$(() => {
  const { prefill } = APPLICATION_DATA;
  const controlsRoot = $("#controls");

  const [permalinkBtn, printBtn] = ["permalink", "print"]
    .map((id) => controlsRoot.find(`a#${id}`))
    .map($);

  // Only if form was prefilled
  if (prefill) {
    permalinkBtn.on("click", handlePermalinkBtn);
    printBtn.on("click", handlePrintBtn);
  }
});
