import { getAll } from "../utilities/doctor-service";

function NewDoctorFormPage() {
    async function getDocData() {
        const docData = await getAll()
        console.log(docData);
    
    }
    return (
      <div>
            <button onClick={getDocData}> Get all the Doc's </button>
            <form> 
<h2> Doc Login</h2>
                <div>
                    <label>
                        Name: 
                        <input type="text" value="" />
                    </label>
                        <label>
                        Speciality:
                            <input type="text" value=""/>
                        
                    </label>

</div>
            </form>
               
      </div>
    );
  }
  
  export default NewDoctorFormPage;
  