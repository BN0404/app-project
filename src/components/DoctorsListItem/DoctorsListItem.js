import styles from './DoctorsListItem.module.css';


export default function DoctorsListItem({ doctorItems, handleAddAppointment }) {
    return (
        <div className={styles.DoctorsListItem}>
            <div className={styles.name}>{doctorList}</div>
            <div className={styles.appointment}>
            <button className="btn-sm" onClick={()=> handleAddAppointment (doctorList._id)} > Schedule An Appointment</button>
            </div>
    </div>
    
        )

}


