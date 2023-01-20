import React from "react";

const footer = () => {
    var today = new Date();
    return(
        <footer className="container">
         <div className="row justify-content-center mt-3 mb-4"> 
            <div className="col-8">
            <h1>
              <h5> Team Member Allocation App - {today.getFullYear()}</h5>
            </h1>
            </div>
            </div>
        </footer>
    );
}

export default footer;
