import React from 'react';

const Rank =({name, rank})=>{
    return(
        <div className=" white f3">
            <p>{`${name}, your rank is : `}</p>
            <div className=" white f1">
            <p>{rank}</p>
        </div>
        </div>
    )
}

export default Rank;