import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";


const JobCatagory = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('../../../public/categories.json')
            .then(res => res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className="pt-4  mid:w-10/12">
            <div className="w-10/12 mx-auto">
                <h1 className="text-center text-3xl font-bold">Job Category List</h1>
                <p className="text-center text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-8 mx-auto w-10/12 mt-5">
                {
category.map(categoryCard=> <CategoryCard key={categoryCard.id} categoryCard={categoryCard}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobCatagory;