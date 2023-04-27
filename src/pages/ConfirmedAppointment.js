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
