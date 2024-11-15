import { Patient } from "../types"
import PatientDetailItem from './PatientDetailItem';

type PatientDetailsProps = {
    patient: Patient
}


const PatientDetails = ({patient} : PatientDetailsProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patient.id}/>
        <PatientDetailItem label="Name" data={patient.name}/>
        <PatientDetailItem label="Allergies" data={patient.allergies}/>
        <PatientDetailItem label="Email" data={patient.email}/>
        <PatientDetailItem label="High Date" data={patient.date.toString()}/>
        <PatientDetailItem label="Symptoms" data={patient.symptoms}/>
        <div className="flex justify-between mt-10">
            <button 
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                type="button"
            >
                Editar
            </button>
            <button 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                type="button"
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default PatientDetails