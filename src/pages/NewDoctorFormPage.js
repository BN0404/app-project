// import { getAll } from "../utilities/doctor-service";

// function NewDoctorFormPage() {
//     async function getDocData() {
//         const docData = await getAll()
//         console.log(docData);
    
//     }
//     return (
//       <div>
//             <button onClick={getDocData}> Get all the Doc's </button>
//             <form action='/doctors/new' method='POST'>
// <h2> Doc Login</h2>
//                 <div>
                   
//                         Name:
//                         <input type="text" name="name" />
//                         <br/>
                    
//                         Speciality:
//                         <input type="text" name="name" />
//                         <br/>
                    
//                         <input type='submit' value="Add new Doc"/>
                        
                    
// {/* <button onClick={}> Add the Doc</button> */}
// </div>
//             </form>
               
//       </div>
//     );
//   }
  
//   export default NewDoctorFormPage;

import { useState } from 'react';

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { useNavigate } from 'react-router-dom';

import { addUser } from "../utilities/doctorForm-api";
// import { getUser } from '../utilities/users-service';

const Container = styled(FormGroup)`
width :70%;
margin: 10% auto auto auto;
& > div (
    margin-top:20px;
    )
`

const defaultValue ={
    name: '',
    specialty: '',
    hospital: ''
}

const NewDoctorFormPage = () => {
    const [ user, setUser ] = useState(defaultValue);
    const navigate = useNavigate();
    const onValueChange = (e) => {
        setUser({ ...user, [ e.target.name ]: e.target.value })
        console.log(user)
    }
    const addUserDetails = async () => {
        console.log(user)
        const doc = await addUser(user)
        // await addUser(user);
        console.log(doc)
        navigate('/all')
    }

    return (
    
        <FormGroup>
            <Typography variant="h4"> Add Doctor</Typography>
            <FormControl>
            <InputLabel> Name:</InputLabel>
                <Input onChange={ onValueChange}  name="name"/>
            </FormControl>
            <FormControl>
            <InputLabel> Specialty:</InputLabel>
                <Input onChange={ onValueChange} name="specialty"/>
            </FormControl>
            
            <FormControl>
            <InputLabel> Hospital:</InputLabel>
            <Input onChange={ onValueChange} name="hospital"/>
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}> Add Doctor</Button>
            </FormControl>
    </FormGroup>
        )
}

export default NewDoctorFormPage;