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
  e && e.preventDefault();

  const { format } = APPLICATION_DATA;

  // Set window parameter to print-pdf (for reveal.js)
  if (format === "deck" && !window.location.search.includes("print-pdf")) {
    window.location.search += "&print-pdf";
    return;
  }

  // defer print
  setTimeout(() => window.print(), 100);
};

$(() => {
  const { prefill } = APPLICATION_DATA;
  const controls = $("#controls");
  const form = $("#input-form");

  $(window).on("beforeprint", () => (form.hide(), controls.hide()));
  $(window).on("afterprint", () => (form.hide(), controls.show()));

  const [permalinkBtn, printBtn] = ["permalink", "print"]
    .map((id) => controls.find(`a#${id}`))
    .map($);

  // If printing is set up, start print after a delay
  if (typeof Reveal !== "undefined" && Reveal.isPrintingPDF()) {
    setTimeout(handlePrintBtn, 500);
  }

  // Only if form was prefilled
  if (prefill) {
    permalinkBtn.on("click", handlePermalinkBtn);
    printBtn.on("click", handlePrintBtn);
  }
});
