import React from "react";
import './ProgressBar.css'


function ProgressBar(params){

    return (
        <div className="pbbody">
            <div className="progress-bar-container">
            <div className="progress-circular" style={{background : "conic-gradient(#FFF700 "+ params.percent * 3.6 +"deg, #ededed 0deg)"}}>
                
                    <span className="value">
                        {params.percent}%
                    </span>
                </div>

            </div>
        </div>
    )

}


export default ProgressBar;