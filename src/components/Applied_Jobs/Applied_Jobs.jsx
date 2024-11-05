import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import ApplyJob from "../ApplyJob/ApplyJob";


const Applied_Jobs = () => {
    const [jobApply,setJobApply]=useState([])
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobsApplied)
            setJobApply(jobsApplied)
        }
    },[])
    return (
        <div className=" h-screen">
            <h1 className="text-center p-10 text-2xl font-bold">All Applied Job see here: {jobApply.length}</h1> 
            <div className="grid grid-cols-4 gap-4 mx-auto w-10/12 p-12">
                {
                    jobApply.map(apply => <ApplyJob key={apply.id} apply={apply}></ApplyJob>)
                }
            </div>

        </div>
    );
};

export default Applied_Jobs;