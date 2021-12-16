import React from 'react'

import aupanther from "../../images/aupanther.png";

import { Button } from "../ButtonElements3.js";





const index = () => {
    return (
        <div id='location' style={{ background:"#f5ad4b"}}  className="text-white row ">
            {/* <div className=" col-5 col-md-6 px-0 position-relative">

                

            </div> */}


            <div className=" align-items-center text-align-center;">

                <Button>PRIVACY SETTINGS</Button>
                <Button Link to ={{ pathname: "https://class.adelphi.edu/account_tools/username.php"}} target="_blank" aria-label="lookup">ID LOOKUP</Button>

            </div>

        </div>
    )
}

export default index;
