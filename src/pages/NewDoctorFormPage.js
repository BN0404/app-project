import { getAll } from "../utilities/doctor-service";

function NewDoctorFormPage() {
    async function getDocData() {
        const docData = await getAll()
        console.log(docData);
    
    }
    return (
      <div>
            <button onClick={getDocData}> Get all the Doc's </button>
            <form action='/doctors/new' method='POST'> 
<h2> Doc Login</h2>
                <div>
                   
                        Name: 
                        <input type="text" name="name" />
                        <br/>
                    
                        Speciality:
                        <input type="text" name="name" />
                        <br/>
                    
                        <input type='submit' value="Add new Doc"/>
                        
                    
{/* <button onClick={}> Add the Doc</button> */}
</div>
            </form>
               
      </div>
    );
  }
  
  export default NewDoctorFormPage;
  