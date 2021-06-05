function displayErrorMessage(title){
  Swal.fire({
    title,
    icon: 'error',
    confirmButtonColor: '#3ac162'
  })
}

function displaySuccessMessage(infoObject){
  Swal.fire({
    title: 'Sign up successfully!',
    icon: 'success',
    html: `<div>
      <div>
        <strong>Name: </strong>${infoObject.name}
      </div>
      <div>
        <strong>Email: </strong>${infoObject.email}
      </div>
      <div>
        <strong>Job: </strong>${infoObject.job}
      </div>
    </div>`,
    showConfirmButton: false
  })
}

function checkPassword(password, confirmedPassword){
  // TODO: check if password length less than 8, write the condition for the if statement inside ()
  if(password.length < 8){
    displayErrorMessage('Password must be at least 8 characters')
    return 
  }

  // TODO: check if password must contain at least one number, write the condition for the if statement inside ()
  if(!
    (password.includes(0) 
    || password.includes(1) 
    || password.includes(2) 
    || password.includes(3) 
    || password.includes(4) 
    || password.includes(5) 
    || password.includes(6)
    || password.includes(7)
    || password.includes(8)
    || password.includes(9)
    )
  ){
    displayErrorMessage('Password must contain at least one number')
    return 
  }

  // TODO: check if password is the same as confirm password, write the condition for the if statement inside ()
  if(password != confirmedPassword){
    displayErrorMessage("Password and confirm password should match")
    return 
  }
  
  return true 
}

// TODO: use getElementById to get form element and assign to variable
const form = document.getElementById("myForm")

function handleSubmitForm(e){
  e.preventDefault()

  // Get value of an input from the form with formula form[id].value or form[name].value

  // get name 
  const name = form['name'].value

  // TODO: get email 
  const email = form['email'].value

  // TODO: get password 
  const password = form['password'].value

  // TODO: get confirm password 
  const confirmedPassword =  form['confirm_password'].value

  // Check if password and confirmedPassword are valid 
  if(!checkPassword(password,confirmedPassword)){
    return 
  }
  
  // TODO: get bio
  const bio = form['bio'].value

  // TODO: get job 
  const job = form['job'].value

  // TODO: creat userInfo Object with 3 keys and corresponding values: name, email, job
  const userInfo = {
    name: name,
    email: email,
    job: job,
  }

 displaySuccessMessage(userInfo)
}

// listen to onsubmit event of the form 
form.onsubmit = handleSubmitForm
