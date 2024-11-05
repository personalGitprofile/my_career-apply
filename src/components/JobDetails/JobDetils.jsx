import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";

const JobDetils = () => {
    // This is important to me!
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    console.log(idInt)
    const job = jobs.find(job => job.id === idInt)
    // This is important to me!
    console.log(job)
    const { job_title, company_name, educational_requirements, experiences, job_description
        ,job_responsibility,location,remote_or_onsite,salary,logo,contact_information,job_type
    } = job
    
    const handleApplyJob = () => {
        saveJobApplication(id)
        toast(`Applied ${company_name} Job Succesfully `)
    }
    return (
        <div>
            <h1 className="text-center pb-48 pt-10 text-xl font-extrabold text-cyan-900">Job Details</h1>
             <div className="grid grid-cols-3 gap-7 mx-32 mb-7">
                <div className="col-span-2 ">
                    <img className="mx-auto" src={ logo} alt="" />
                <h1 className="text-center text-3xl py-16 font-medium text-blue-900">{company_name}</h1>
                    <div>
                        <p className="pb-9"><span className="font-bold">Job Description:</span> {job_description }</p>
                        <p className="pb-9"><span className="font-bold">Job Responsibility:</span> {job_responsibility }</p>
                        <p className="pb-9"><span className="font-bold">Educational Requirements:</span> {educational_requirements }</p>
                        <p className="pb-9"><span className="font-bold">Experiences:</span> {experiences }</p>
                        <p className="pb-9"><span className="font-bold">Job Type:</span> {remote_or_onsite} & { job_type}</p>
                </div>
                

            </div>
                <div >
                <div className="bg-blue-50 shadow-md rounded-md p-8">
                    <p className="text-center text-xl font-bold">Details</p>
                    <hr className="mt-3 border border-blue-200"/>
                    <div className="mt-6">
                        <div className="text-sm flex gap-2">
                            <img src="https://i.ibb.co.com/bzL53m6/money.png" alt="" />
                            <p><span className="font-bold">Salary :</span> {salary } (Per Month)</p>
                        </div>
                        <div className="text-sm flex gap-2 pt-2">
                            <img src="https://i.ibb.co.com/Cv91RfJ/calendar.png" alt="" />
                            <p><span className="font-bold">Job Title :</span> {job_title } </p>
                        </div>
                    </div>
                    
                    <div>
                        <h1 className="text-center text-xl font-bold mt-8">Contact Information</h1>
                        <hr className="mt-3 border border-blue-200" />
                        
                        <div className="text-sm flex gap-2 pt-2">
                            <img src="https://i.ibb.co.com/58RQ4Mc/phone.png" alt="" />
                            <p><span className="font-bold">Phone :</span> {contact_information.phone } </p>
                        </div>
                        <div className="text-sm flex gap-2 pt-2">
                            <img src="https://i.ibb.co.com/8B50QXZ/email.png" alt="" />
                            <p><span className="font-bold">Email:</span> {contact_information.email } </p>
                        </div>
                        <div className="text-sm flex gap-2 pt-2">
                            <img src="https://i.ibb.co.com/54xxGf9/location2.png" alt="" />
                            <p><span className="font-bold">Address :</span> {contact_information.address } </p>
                        </div>
                    </div>
                    </div>
                    <p className="text-center mt-3">
                        <button onClick={handleApplyJob} className="btn bg-cyan-800 text-white px-12 ">Apply</button></p>
          </div>
            </div>
            <ToastContainer />
       </div>
            
    );
};

export default JobDetils;