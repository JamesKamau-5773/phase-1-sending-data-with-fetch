// index.js
function submitData(name, email) {
  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then(data => {
      // Append new id to DOM
      document.body.append(data.id);
    })
    .catch(error => {
      // Append error message to DOM
      document.body.append(error.message);
    });
}// Add your code here
