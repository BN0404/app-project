import { getAll } from "../utilities/doctor-service";

function NewDoctorFormPage() {
    async function getDocData() {
        const docData = await getAll()
        console.log(docData);
    
    }
    return (
       <div>
            {docData.map((doctor, i) => {
            
                return (
                    <li key={doctor._id}>
                        {doctor.name}

                        <a href={`/doctors/${doctor._id}/edit`}>Edit </a>
              
                        <form method="POST" action={`/doctors/${docData._id}?_method=DELETE`}>
                            <input type="submit" value="DELETE" />
                        </form>
                    </li>
                
                );
            
            })
        </div>
    )
}
            {/* <button onClick={getDocData}> Get all the Doc's </button>
            <form action='/doctors/:id/edit' method='POST'> 
<h2> Edit Doc</h2>
                Name: <input type="text" name="name" defaultValue={docData.name} />
                Speciality: <input type="text" name="speciality" defaultValue={docData.speciality} />
                
                <input type="submit" value="Submit Changes"/>


            </form>
               
      </div>
    );
  }
   */}
  export default NewDoctorFormPage;
  