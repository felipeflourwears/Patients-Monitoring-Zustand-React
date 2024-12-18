import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Error from './Error'
import { DraftPatient } from '../types'
import { usePatientStore } from '../store/store'


const PatientForm = () => {

    //const addPatient = usePatientStore(state => state.addPatient)
    const { addPatient, activeId, patients, updatePatient } = usePatientStore()

    const { register, handleSubmit, setValue,formState: {errors}, reset } = useForm<DraftPatient>()

    const registerPatient = ( data : DraftPatient) => {
        if(activeId){
            updatePatient(data)
            toast('Updated Patient Successfully',{
                type: 'success'
            })
        }else{
            addPatient(data)
            toast.success('Registered Patient Successfully')
        }
        reset()
    }

    useEffect(()=>{
        if(activeId){
            const activePatient = patients.filter( patient => patient.id === activeId)[0]
            console.log(activePatient)
            setValue('name', activePatient.name)
            setValue('allergies', activePatient.allergies)
            setValue('email', activePatient.email)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
            
        }
    }, [activeId])

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
    
            <p className="text-lg mt-5 text-center mb-10">
                Add Patients && {''}
                <span className="text-indigo-600 font-bold">Manage Them</span>
            </p>
    
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Patient
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3 border border-gray-100"  
                        type="text" 
                        placeholder="Patient Name" 
                        {...register('name', {
                            required: "The patient's name is required",
                            maxLength: {
                                value: 15,
                                message: "Maximun 15 Characters"
                            }
                        })}
                    />
                    {errors.name && (
                        <Error>
                            {errors.name?.message}
                        </Error>
                    )}
                </div>
    
                <div className="mb-5">
                    <label htmlFor="allergies" className="text-sm uppercase font-bold">
                        Allergies
                    </label>
                    <input  
                        id="allergies"
                        className="w-full p-3 border border-gray-100"  
                        type="text" 
                        placeholder="Allergies: Medications, Fruits, Vegetables"
                        {...register('allergies', {
                            maxLength: {
                                value: 30,
                                message: "Maximun 30 Characters"
                            }
                        })}
                    />
                    {errors.allergies &&(
                        <Error>
                            {errors.allergies?.message}
                        </Error>
                    )}
                </div>
    
                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email 
                    </label>
                    <input  
                        id="email"
                        className="w-full p-3 border border-gray-100"  
                        type="email" 
                        placeholder="Registration Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid Email'
                            }
                        })}  
                    />
                    {errors.email &&(
                        <Error>
                            {errors.email?.message}
                        </Error>
                    )} 
                </div>
    
                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        High Date
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3 border border-gray-100"  
                        type="date"
                        {...register('date', {
                           required: 'Admission Date is required'
                        })}
                    />
                    {errors.date &&(
                        <Error>
                            {errors.date?.message}
                        </Error>
                    )} 
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Symptoms
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3 border border-gray-100"  
                        placeholder="Patient Symptoms" 
                        {...register('symptoms', {
                            required: 'Symptoms is required'
                         })}
                    />
                    {errors.symptoms &&(
                        <Error>
                            {errors.symptoms?.message}
                        </Error>
                    )} 
                </div>
    
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Save Patient"
                />
            </form> 
        </div>
    )
}


export default PatientForm