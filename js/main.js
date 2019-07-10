document.querySelector("#subscribe-form").addEventListener("submit" , function(e){
  e.preventDefault() 
  console.log("starting form...")
  let userData = getUserData()

  addStudent(userData)
})