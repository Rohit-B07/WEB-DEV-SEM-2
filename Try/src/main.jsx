function handleSubmit() {
  let name = document.getElementById("name").value.trim();
  let roll = document.getElementById("roll").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();

  if (name === "") {
    alert("Student Name is required");
    return;
  }

  if (roll === "") {
    alert("Roll Number is required");
    return;
  }

  if (email === "") {
    alert("Email is required");
    return;
  }

  if (!email.includes("@")) {
    alert("Email me @ hona zaroori hai");
    return;
  }

  if (phone === "") {
    alert("Phone Number is required");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone Number exactly 10 digits ka hona chahiye");
    return;
  }

  alert("Form submitted successfully");
}


// return (
//   <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//     />

//     <button type="submit">
//       Submit
//     </button>
//   </form>
// )



// function Studentlist(){
//     const students = ["Rahul","Amit","Neha"]
//     return(
//         <ul>
//             {students.map((s,index)=>(
//                 <li key ={index}>
//                     {s}
//                 </li>
//             ))}
//         </ul>
//     )
// }




// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
