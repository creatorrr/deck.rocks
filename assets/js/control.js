// assets/js/form.js

const { prefill, contentSelector } = APPLICATION_DATA;
const controlsSelector = "#controls";

const handlePermalinkBtn = (e) => {
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

  const { contentWindow } = $(contentSelector);
  if (!contentWindow) return console.log("iframe not found");

  // Set iframe window parameter to print-pdf (for reveal.js)
  contentWindow.location.search = "?print-pdf";

  // defer print (wait for reveal.js to do its thing)
  contentWindow.setTimeout(() => contentWindow.print(), 500);
};

prefill ||
  $(() => {
    const controlsRoot = $(controlsSelector);
    const [permalinkBtn, printBtn] = ["permalink", "print"].map((id) =>
      controlsRoot.find(`a#${id}`)
    );

    permalinkBtn.on("click", controlsSelector, handlePermalinkBtn);
    printBtn.on("click", controlsSelector, handlePrintBtn);
  });
