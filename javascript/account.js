const accountForm = document.querySelector(".account-form");
const editButton = document.querySelector(".edit-button");

// Add a click event listener to the edit button
editButton.addEventListener("click", () => {
  // Get all the input fields in the form
  const inputFields = accountForm.querySelectorAll("input");

  // Toggle the disabled state of the input fields
  inputFields.forEach((field) => {
    field.disabled = !field.disabled;
  });

  // Change the text of the edit button
  if (editButton.textContent === "Edit Account Info") {
    editButton.textContent = "Save Changes";
  } else {
    editButton.textContent = "Edit Account Info";

    // Save the changes to the input fields
    inputFields.forEach((field) => {
      if (field.value.trim() !== "") {
        field.placeholder = field.value;
      }
    });
  }
});
