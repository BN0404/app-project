const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: { type: String, required: true },
   
    specialty: { type: Schema.Types.ObjectId, ref: 'Specialty' },
    
    // insurance: {
    //     type: String,
    //     required: true
    // },
   
    // hospital: {
    //     type: String,
    //     required: true
    // },

    scheduleAnAppointment: {
    type: Date
    },

    reason: {
        type: String,
        required: false
    }

}
)

module.exports = mongoose.model('Doctor', doctorSchema);