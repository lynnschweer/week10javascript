//Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
//A Bootstrap styled table representing your choice of data.
//A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

const formButton = document.getElementById('formSubmit')

let number = 0
//event Listener
//whenever I click the button, I want to add a new row to the table
formButton.addEventListener('click', (event) => {
event.preventDefault()

//variables to hold values of the form
let firstName = document.getElementById('firstName').value
let lastName = document.getElementById('lastName').value
let age = document.getElementById('age').value


//append means to add to the end of the form
//create a tr node to append to my form
let newTableRow = document.createElement('tr')

//node means a single element in the DOM
let numberNode = document.createElement('td')
//.innerHTML is a property that allows you to get the HTML content of an element
numberNode.innerHTML = number
newTableRow.append(numberNode)

let firstNameNode = document.createElement('td')
firstNameNode.innerHTML = firstName
newTableRow.append(firstNameNode)

let lastNameNode = document.createElement('td')
lastNameNode.innerHTML = lastName
newTableRow.append(lastNameNode)

let ageNode = document.createElement('td')
ageNode.innerHTML = age
newTableRow.append(ageNode)

//appendChild means to add to the end of the table
document.getElementById('tBody').appendChild(newTableRow)

//allows the form to clear after submitting
document.getElementById('firstName').value = ''
document.getElementById('lastName').value = ''
document.getElementById('age').value = ''

number++
})