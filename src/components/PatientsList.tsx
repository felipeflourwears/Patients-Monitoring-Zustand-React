import { usePatientStore } from "../store/store"

const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)
  console.log("From PatientList: ", patients)
  return (
    <div>PatientsLis</div>
  )
}

export default PatientsList