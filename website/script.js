// document.getElementById("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData);

//   const res = await fetch("/submit-data", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   });

//   if (res.ok) {
//     console.log("שמירה ל-localStorage:", data.UserName); // ← הדפסת בדיקה
//     localStorage.setItem("UserName", data.UserName);       // ← השורה שאתה צריך
//     window.location.href = "/home.html";
//   } else {
//     const errors = await res.json();
//     console.log("שגיאות:", errors);
//   }
// });
