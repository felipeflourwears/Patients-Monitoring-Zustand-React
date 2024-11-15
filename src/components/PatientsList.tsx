import { usePatientStore } from '../store/store';
import PatientDetails from './PatientDetails';

const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)
  console.log("From PatientList: ", patients)
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <> 
          <h2 className="font-black text-3xl text-center">List of the patients</h2>
          <p className='text-xl mt-5 mb-10 text-center'>Manage your {''}
            <span className='text-indigo-600 font-bold'>Patients and appointments</span>
          </p>
          {patients.map( patient =>(
            <PatientDetails
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
        
      ):(
        <>
          <h2 className="font-black text-3xl text-center">There aren't patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start to add patients
            <span className="text-indigo-600 font-bold"> and they will appers in this place</span>
          </p>
        </>
      )}

    </div>
  )
}

export default PatientsList