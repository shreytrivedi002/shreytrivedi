import React from 'react';


const Details = (props) => {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header"></div>
          <div className="card-body">
            {/* <h5 className="card-title">Special title treatment</h5> */}
                    {
                        props.data? <p className="card-text">TodoId: {props.data.id} <br /> Title:{props.titleData} <br /> name:{props.data.username}<br /> Email:{ props.data.email }</p>:"Select Someting From List"
                   }
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    );
}
 
export default Details;