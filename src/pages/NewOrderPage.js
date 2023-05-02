import { checkToken } from "../utilities/users-service";


function confirmedAppointment() {

  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <div>
      <h1>Confirmed Appointment</h1>
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  );
}

export default confirmedAppointment;


// import React, { useEffect } from 'react';

// import axios from 'axios';

// const HomePage = () => {
//   const getUserData = async () => {
//     try {
//       const res = await axios.post('/api/users/getUserData', {}, {
//         header: {
//           Authorization: 'Bearer' + localStorage.getItem('token'),
//         },
      
//       });
//     } catch (error) {
//       console.log(error);
//     }
  
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);
//   return (
//     <div>
//       <h1> HomePage</h1>

//   </div>
//     )


// }


// module.exports = HomePage;