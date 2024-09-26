function handleFormSubmit(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Access form data from the event's target
    const expense = event.target.expense.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    // Save form data to local storage
    localStorage.setItem('expense', expense);
    localStorage.setItem('description', description);
    localStorage.setItem('category', category);


    const obj = {
       expense: expense,
        description: description,
        category: category,
      };

localStorage.setItem(obj.expense, JSON.stringify(obj));

  // Display the user on the screen
  showUsersOnScreen(obj);

  // Clear the input fields after form submission
  
}
function showUsersOnScreen(obj) {
    const parentElem = document.getElementById('listOfItems');
  
    // Create a new list item with user details
    const childElem = document.createElement('li');
    childElem.textContent = obj.expense + '  ' + obj.description + '  ' + obj.category + ' ';
  
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
  
    // Add delete functionality
    deleteButton.onclick = () => {
      // Remove user from localStorage
      localStorage.removeItem(obj.expense);
  
      // Remove the list item from the DOM
      parentElem.removeChild(childElem);
    };
  
    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
  
    // Add edit functionality
    editButton.onclick = () => {
      // Remove user from localStorage
      localStorage.removeItem(obj.expense);
  
      // Remove the list item from the DOM
      parentElem.removeChild(childElem);
  
      // Populate the form fields with existing user details
      document.getElementById('expense').value = obj.expense;
      document.getElementById('description').value = obj.description;
      document.getElementById('category').value = obj.category;
    };
  
    // Append the delete and edit buttons to the list item
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    editButton.style.padding ="10px"
    deleteButton.style.padding ="10px"
    editButton.style.margin ="10px"
    deleteButton.style.margin ="10px"
  
    // Append the list item to the unordered list
    parentElem.appendChild(childElem);
  }
  