import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const DashBoard = () => {
  return (
    <section>
      <div>
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 col-sm-12 col-12 d-flex justify-content-center"></div>
      </div>
    </section>
  );
};

export default DashBoard;
