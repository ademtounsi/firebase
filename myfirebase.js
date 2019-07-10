var firebaseConfig = {
  apiKey: "AIzaSyC_NV9dRtPIbDh6YtQHS16oM4zqH4B-m8Y",
  authDomain: "names-cbd44.firebaseapp.com",
  databaseURL: "https://names-cbd44.firebaseio.com",
  projectId: "names-cbd44",
  storageBucket: "",
  messagingSenderId: "249576723034",
  appId: "1:249576723034:web:8a05e1d853f30852"
};
firebase.initializeApp(firebaseConfig);

function addStudent(userData){
    console.log(userData.course)
    let database = firebase.database()

    let ref = database.ref(`${userData.course}/`)

    ref.push(userData)

    document.querySelector("#subscribe-form").reset()
}