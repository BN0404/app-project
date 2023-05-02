import styles from './DoctorsList.module.css';
import DoctorsListItem from '../DoctorsListItem/DoctorsListItem';

export default function DoctorList({ doctorList, handleAddAppointment }) {
    const items = doctorList.map(item =>
        <DoctorsListItem
            key={item._id}
            handleAddAppointment={
                handleAddAppointment}
            doctorItem={item}
        />
    ); 
    return (
        <main className={styles.DoctorList}>
            {items}
        </main>
        )

}



// const items = doctorItems.map(item => <DoctorsListItem
//         key={item._id}
//         handleAddAppointment={han
//         }
//         doctorItem={item} />
//     );

//     return (
//         <main className={styles.}
//         )
