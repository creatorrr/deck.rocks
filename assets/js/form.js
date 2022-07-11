// assets/js/form.js

$(() => {
  const { prefill } = APPLICATION_DATA;
  const formSelector = "#input-form";

  // Submit on pressing enter inside textarea
  $(`${formSelector} textarea`).on("keydown", (e) => {
    const { target, key, shiftKey } = e;
    const isEnter = key === "Enter" && !shiftKey;

    if (isEnter) {
      e.preventDefault();
      target.form.submit();
    }
  });

  // Listen to radio button changes and re-submit
  if (prefill) {
    $(`${formSelector} input[type=radio]`).on("change", ({ target }) =>
      target.form.submit()
    );
  }
});
