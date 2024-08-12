// Import and configure Firebase
// Note: Replace the placeholder values with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuDMHJtYG9pubAsxf_fTNVxbmuy8LdiDc",
    authDomain: "speedbreaker-feea5.firebaseapp.com",
    databaseURL: "https://speedbreaker-feea5-default-rtdb.firebaseio.com",
    projectId: "speedbreaker-feea5",
    storageBucket: "speedbreaker-feea5.appspot.com",
    messagingSenderId: "207852595548",
    appId: "1:207852595548:web:7127b6eb195380c7e4f999",
    measurementId: "G-GTJ1NHET4V"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};