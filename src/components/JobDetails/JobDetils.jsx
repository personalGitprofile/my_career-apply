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
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co.com/WPC4ZJh/bg1.png')] bg-no-repeat h-3/6 py-10 bg-center text-center ">
                <h1 className="text-2xl font-extrabold">Job Details</h1>
                <hr className="w-3/12 mx-auto mt-2  border-slate-950 h-2 border-double "/>
            </div>
            <div>
                <div>
                    <h1>Details</h1>

                </div>
                <div>
                    <h1>side details</h1>
                </div>
            </div>
        </div>
    );
};

export default JobDetils;