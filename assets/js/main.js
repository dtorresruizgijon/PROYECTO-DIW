(() => {
  // Año en el pie
  const year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  // Validación del formulario
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        // Si hay errores, no envía
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        // Muestra los avisos
        form.classList.add('was-validated');
      },
      false,
    );
  });
})();
