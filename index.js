  // Get reference to the h2 element
  const h2Element = document.getElementById('h2');

  // Get reference to the reset button
  const resetButton = document.getElementById('button-reset');
  
  // Get reference to the add button
  const addButton = document.getElementById('button-add');

  // Set initial value to 0
  let currentValue = 0;
  h2Element.textContent = currentValue;

  // Add click event listener to reset button
  resetButton.addEventListener('click', function () {
      currentValue = 0;
      h2Element.textContent = currentValue;
  });

  // Add click event listener to add button
  addButton.addEventListener('click', function () {
      currentValue += 1;
      h2Element.textContent = currentValue;
  });