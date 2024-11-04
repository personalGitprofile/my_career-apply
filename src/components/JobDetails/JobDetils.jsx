import { useLoaderData, useParams } from "react-router-dom";


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
        ,job_responsibility,location,remote_or_onsite,salary,logo
    }=job
    return (
        <div>
            <h1 className="text-center pb-48 pt-10 text-xl font-extrabold text-cyan-900">Job Details</h1>
             <div className="grid grid-cols-3 gap-7 mx-32 ">
            <div className="col-span-2 ">
                <h1 className="text-center text-3xl py-16 font-medium text-blue-900">{job_title}</h1>
                    <div>
                        <p className="pb-9"><span className="font-bold">Job Description:</span> {job_description }</p>
                        <p className="pb-9"><span className="font-bold">Job Responsibility:</span> {job_responsibility }</p>
                        <p className="pb-9"><span className="font-bold">Educational Requirements:</span> {educational_requirements }</p>
                </div>
                

            </div>
            <div className="bg-slate-500">
                <p>Right</p>
            </div>
        </div>
       </div>
            
    );
};

export default JobDetils;