import { useEffect, useState } from "react";
import JobFeatured from "../JobFeatured/JobFeatured";
import { Link } from "react-router-dom";


const JobsFeatured = () => {
    const [featuredJob, setFeaturedJob ] = useState([])
    useEffect(() => {
        fetch('../../../public/jobs.json')
        .then(res => res.json())
         .then(data=>setFeaturedJob(data))
}
,[])
    return (
        <div className=" w-10/12 mx-auto mt-5">
               <div className="">
                <h1 className="text-center text-3xl font-bold">Featured Jobs</h1>
                <p className="text-center text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mx-auto w-10/12 mt-5 mb-10 ">            {
            featuredJob.slice(0,4).map(featured=> <JobFeatured key={featured.id} featured={featured}></JobFeatured>)
     }
            </div>
            <div className="text-center pb-10">
               <Link><p className="btn btn-primary px-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-2xl">See more ➾</p></Link> 
     </div>
        </div>
    );
};

export default JobsFeatured;