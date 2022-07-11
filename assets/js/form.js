// assets/js/form.js

$(() => {
  const { prefill } = APPLICATION_DATA;

  prefill &&
    $("#input-form input[type=radio]").each((el) => {
      el.onchange = () => el.form.submit();
    });
});
