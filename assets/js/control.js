// assets/js/control.js

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
  $(window).on("afterprint", () => (form.show(), controls.show()));

  const printBtn = $(`a#print`);

  printBtn.on("click", handlePrintBtn);
});
