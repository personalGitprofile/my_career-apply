import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Jobs = () => {
    const [allJob, setAllJob ] = useState([])
    useEffect(() => {
        fetch('../../../public/jobs.json')
        .then(res => res.json())
         .then(data=>setAllJob(data))
}
,[])
    return (
        <div className="mt-8">
            <div className="text-center text-3xl font-bold underline-offset-2">
                <h1 className="mb-10">All Open Jobs Now</h1>
            </div>
           <div className="grid grid-cols-2 gap-8 mx-auto w-10/12 mt-5 mb-10 ">            {
            allJob.map(job=> <Job key={job.id} job={job}></Job>)
     }
            </div>
        </div>
    );
};

export default Jobs;