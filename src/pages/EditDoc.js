// import { getAll } from "../utilities/doctor-service";

// function NewDoctorFormPage() {
//     async function getDocData() {
//         const docData = await getAll()
//         console.log(docData);
    
//     }
//     return (
//        <div>
//             {docData.map((doctor, i) => {
            
//                 return (
//                     <li key={doctor._id}>
//                         {doctor.name}

//                         <a href={`/doctors/${doctor._id}/edit`}>Edit </a>
              
//                         <form method="POST" action={`/doctors/${docData._id}?_method=DELETE`}>
//                             <input type="submit" value="DELETE" />
//                         </form>
//                     </li>
                
//                 );
            
//             })
//         </div>
//     )
// }
//             {/* <button onClick={getDocData}> Get all the Doc's </button>
//             <form action='/doctors/:id/edit' method='POST'>
// <h2> Edit Doc</h2>
//                 Name: <input type="text" name="name" defaultValue={docData.name} />
//                 Speciality: <input type="text" name="speciality" defaultValue={docData.speciality} />
                
//                 <input type="submit" value="Submit Changes"/>


//             </form>
               
//       </div>
//     );
//   }
//    */}
//   export default NewDoctorFormPage;
  

import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../utilities/doctorform-api';

const initialValue = {
    name: '',
    speciality: '',
    hospital: '',
 
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, speciality, hospital } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Speciality</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='speciality' value={speciality} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Hospital</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='hospital' value={hospital} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;