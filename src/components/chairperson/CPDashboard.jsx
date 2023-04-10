import React from "react";
import { useParams } from "react-router-dom";
const CPDashboard = () => {
  const params = useParams();
  const { tab } = params;
  console.log(tab)

  return (
    <>
      <div className="m-4 md:m-1">
        <div className="container mx-auto flex justify-center mt-12 h-20 rounded-t-2xl bg-gradient-to-r from-light-blue-300 to-blue-500 w-full md:w-1/2 ">
          <h1 className="py-7 font-custom text-white font-bold text-xl md:text-2xl">
            Chairperson Dashboard
          </h1>
        </div>
        <div className="container border-b   mx-auto bg-white flex justify-center h-auto py-4 md:h-92 rounded-b-2xl w-full md:w-1/2 ">
          <div class="grid grid-cols-1 gap-4 mt-5 md:mt-8 sm:grid-cols-2 w-[40vh] md:w-[70vh] justify-center">
            <div class="bg-[#B1D9EB] hover:bg-[#84cced] m-2 rounded-xl text-center   h-40 md:h-56 p-4">
              <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-400 mt-10 md:mt-16 comitName  font-bold text-3xl md:text-2xl">
                Committee 1
              </h1>
              <p className="mt-3 font-bold  text-md text-white">
                Committee name
              </p>
            </div>
            <div class="bg-[#6EA7DB] hover:bg-[#84cced] m-2 rounded-xl text-center h-40 md:h-56 p-4">
              <h1 className="text-white mt-10 md:mt-16 font-custom  font-bold text-2xl md:text-2xl">
                50
              </h1>
              <p className="mt-3 font-bold text-md text-white">Total Members</p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default CPDashboard;
