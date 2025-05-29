document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("addContainerForm");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = form.elements["id"].value.trim();
    const weight = parseFloat(form.elements["weight"].value);

    if (!id) {
      alert("⚠️ Container ID is required.");
      return;
    }
    if (isNaN(weight) || weight <= 0) {
      alert("⚠️ Weight must be a positive number.");
      return;
    }

    // The rest of the original form submission logic here...
    // For example, pushing container data to Firebase, etc.
  });
});
