const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import autoIncrement from 'mongoose-auto-increment'
const doctorSchema = new Schema({
    name: { type: String, required: true },
   
    // specialty: { type: Schema.Types.ObjectId, ref: 'Specialty' },
    specialty: { type: String, required: true },
    
    // insurance: {
    //     type: String,
    //     required: true
    // },
   
    hospital: {
        type: String,
        required: true
    },

    // scheduleAnAppointment: {
    // type: Date
    // },

    // reason: {
    //     type: String,
    //     required: false
    // }

}
)

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

module.exports = mongoose.model('User1', doctorSchema);