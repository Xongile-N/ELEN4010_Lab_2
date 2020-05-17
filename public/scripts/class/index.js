// Add, Delete, Edit Student
classListA=["test", "test2"];
window.onload = function () {
  // Adding the student
  const buttonAdd = document.getElementById('addStudentButton')
  buttonAdd.addEventListener('click', async _ => {
    const info = document.getElementById('newStudentInput').value
    const data = { student: info }

    try {
    fetch('/class/api/create', {
        method: 'post', // specify method to use
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(classListA) // fill body of request
      })
  
        .then(function (response) {
          if (response.ok) {
            return response.json()
          } // Return the response parse as JSON if code is valid
          else { throw 'Failed!' }
        })
        .then(function () {
<<<<<<< HEAD
          //console.log(document.getElementById('classList'))
          localStorage.setItem("classList_", JSON.stringify(classListA))
          //location.reload()
=======
          location.reload()
>>>>>>> parent of b39c604... Exercise 3 Lab 4 Attempt
        }).catch(function (e) { // Process error for request
          alert(e) // Displays a browser alert with the error message.
          // This will be the string thrown in line 7 IF the
          // response code is the reason for jumping to this
          // catch() function.
        })
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  })

  // Deleting Student
  const buttonDel = document.getElementById('deleteStudentButton')
  buttonDel.addEventListener('click', async _ => {
    const info = document.getElementById('newStudentInput').value
    const data = { studentDel: info }

    try {
      fetch('/class/api/delete', {
        method: 'post', // specify method to use
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // fill body of request
      })
        .then(function (response) {
          if (response.ok) {
            return response.json()
          } // Return the response parse as JSON if code is valid
          else { throw 'Failed!' }
        })
        .then(function () {
          location.reload()
        }).catch(function (e) { // Process error for request
          alert(e) // Displays a browser alert with the error message.
          // This will be the string thrown in line 7 IF the
          // response code is the reason for jumping to this
          // catch() function.
        })
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  })

  // Edit a student
  const buttonEdit = document.getElementById('editStudentButton')
  buttonEdit.addEventListener('click', async _ => {
    const oldStud = document.getElementById('newStudentInput').value
    const editedStud = document.getElementById('editedStudentInput').value
    const data = {
      studentOld: oldStud,
      studentNew: editedStud
    }

    try {
      fetch('/class/api/edit', {
        method: 'post', // specify method to use
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // fill body of request
      })
        .then(function (response) {
          if (response.ok) {
            return response.json()
          } // Return the response parse as JSON if code is valid
          else { throw 'Failed!' }
        })
        .then(function () {
          location.reload()
        }).catch(function (e) { // Process error for request
          alert(e) // Displays a browser alert with the error message.
        // This will be the string thrown in line 7 IF the
        // response code is the reason for jumping to this
        // catch() function.
        })
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  })
}
fetch('/class/api/createList', {
  method: 'post', // specify method to use
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(classListA) // fill body of request
})       
 .then(function (response) {
  if (response.ok) {
    return response.json()
  } // Return the response parse as JSON if code is valid
  else { throw 'Failed!' }
}).then(function(response){
  console.log(response)
return fetch('/class/api/list')}) // Returns a Promise for the GET request
  .then(function (response) {
    // Check if the request returned a valid code
    if (response.ok) {
      return response.json() // Return the response parse as JSON if code is valid
    } else { throw new Error('Failed to load classlist: response code invalid!') }
  })
  .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
<<<<<<< HEAD

    const classList = document.getElementById('classList')
    const classList_ = JSON.parse(localStorage.getItem('classList_'))
    //console.log(classList_)
    // alert(localStorage.getItem('classList_'))
=======
    const classList = document.getElementById('classList')
>>>>>>> parent of b39c604... Exercise 3 Lab 4 Attempt

    // Iterate through all students
    data.forEach(function (student) {
      // Create a new list entry
      const li = document.createElement('LI')
      const liText = document.createTextNode(student)
      // Append the class to the list element
      li.className += 'student'

      // Append list text to list item and list item to list
      li.appendChild(liText)
      classList.appendChild(li)

      // document.getElementById('addStudentButton').onclick = function () {
      //   var studN = document.getElementById('newStudentInput').value
      //   alert(studN)
      // }
    })
  })
  .catch(function (e) { // Process error for request
    alert(e) // Displays a browser alert with the error message.
    // This will be the string thrown in line 7 IF the
    // response code is the reason for jumping to this
    // catch() function.
  })
// Add students to the list
