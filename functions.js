function getUserData(){
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let phone = document.querySelector("#phone").value
    let school = document.querySelector("#school").value
    let course = document.querySelector("#course").value

    let date = new Date()
    let months = ["Jan" , "Feb" , "Mars" , "April" , "May" , "June" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec" ]
    goodDate = date.getDay()  + " " + months[date.getMonth()] + " "  + date.getFullYear() + " at " + date.getHours() 

    let userData = { name , email , phone , school , course , data : goodDate }

    return userData 
}


// date = {
//     year : date.getFullYear() ,
//     month : months[date.getMonth()] ,
//     day : date.getDay() ,
//     hour : date.getHours()
// }


// console.log(goodDate)