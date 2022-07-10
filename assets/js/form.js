// assets/js/form.js

$(() => {
  const { prefill } = APPLICATION_STATE;

  prefill &&
    $("#input-form input[type=radio]").each((el) => {
      el.onchange = () => el.form.submit();
    });
});
