require('dotenv').config();
require("./config/database");

const { type } = require('@testing-library/user-event/dist/type');
const Speciality = require('./models/speciality');
const Doctor = require('./models/speciality')

    (async function () {

        await Speciality.deleteMany({});
        const specialities = await Speciality.create([
            { name: 'Pediatrics', sortOrder:10 }, 
            { name: 'Orthopedics', sortOrder:20 },
            { name: 'Cardiologist', sortOrder:30 },
            { name: 'Neurologist',sortOrder:40 },
            { name: 'Rheumatology', sortOrder:50 }
        ]);


        await Doctor.deleteMany({});
        const doctors = await Doctor.create([
            { name: 'George', speciality: specialities[ 0 ], insurance: 'cig', hospital: 'AHS' },
            { name: 'Brian', speciality: specialities[ 1 ], insurance: 'Med', hospital: 'ALH' },
            { name: 'Peter', speciality: specialities[ 2 ], insurance: 'united', hospital: 'UPMH' },
            { name: 'Daniel', speciality: specialities[ 1 ], insurance: 'UPM', hospital: 'AHSL' },
            { name: 'William', speciality: specialities[ 0 ], insurance: 'united', hospital: 'UPMH' },
            { name: 'Mark', speciality: specialities[ 4 ], insurance: 'cig', hospital: 'ALH' }
        ])
        console.log(doctors)
    
        process.exit();

    })();

