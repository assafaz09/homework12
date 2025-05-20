const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("website"));
app.use(express.json());

app.post("/start", (req, res) => {
  const fullName = req.body.fullName;
  if (fullName.split(" ").length !== 2) {
    res.status(404).send("Please enter your full name");
  } else {
    res.sendFile(__dirname + "/website/singup.html");
  }
  return;
});

app.post("/submit-data", (req, res) => {
  const UserName = req.body.UserName;
  const email = req.body.emailAdress;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  console.log("password:", password);
  console.log("confirmPassword:", confirmPassword);
  console.log("UserName:", UserName);
  console.log("email:", email);

  if (UserName.length<4 || UserName.length>8){
    res.send("UserName must be between 4 and 8 characters");
  }else if( !email.includes("@")){
    res.send("Email must contain @");
  }else if (password.langth<5|| password.length>10||!password.includes("$")){
    res.send("Password must be between 5 and 10 characters and contain $");
  }else if (password !== confirmPassword) {
    res.send("Passwords do not match");
  }else{
    res.sendFile(__dirname + "/website/home.html");
    res.send("welcome " + UserName);
  }
});


// function sendData(event) {
//   event.preventDefult();
//   const UserName = document.getElementById("UserName").value;
//   fetch("/submit-data", {
//     headers: { "Content-Type": "application/json" },
//     method: "POST",
//     body: JSON.stringify({
//       UserName, UserName
//     })
//   }).then(res => res.json()).then(data => {
//     send(`hello ${data}`);
//   })
// }

app.listen(port, () => console.log(`listenint to port ${port}`));
