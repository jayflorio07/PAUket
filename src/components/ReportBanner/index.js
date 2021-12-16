import React from "react";


import { Button } from "../ButtonElements2";

const index = () => {
  return (
    <div style={{ background: "#f5ad4b    " }} className="text-white row ">
      {/* <div className=" d-flex py-5 align-items-center"> */}
        
        <Button Link to ={{ pathname: "https://cm.maxient.com/reportingform.php?AdelphiUniv&layout_id=18"}} target="_blank" aria-label="report">FILE REPORT</Button>

      {/* </div> */}
    </div>
  );
};

export default index;
