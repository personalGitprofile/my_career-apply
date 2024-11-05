import React from 'react';

const ApplyJob = ({apply}) => {
    return (
        <div className='border border-rose-900 p-5 rounded-md'>
            <h1>{apply.job_title}</h1>
            
        </div>
    );
};

export default ApplyJob;