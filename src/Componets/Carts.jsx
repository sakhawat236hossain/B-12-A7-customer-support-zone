import React from 'react';
import bgCatrImg1 from "../assets/vector1.png";
import bgCatrImg2 from "../assets/vector2.png";

const Cart = ({status,resolved}) => {
    return (
      
             <div className="p-5 sm:grid grid-cols-1 md:grid grid-cols-2 gap-5 py-10 max-w-[1200px] mx-auto">
        {/* 1 */}
        <div className="relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md p-5  md:p-7 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
       
          <div className="absolute flex justify-between items-center w-full h-full px-2 md:px-5 opacity-70 md:opacity-50 pointer-events-none">
            <img className="h-24 sm:h-32 md:h-40" src={bgCatrImg1} alt="" />
            <img className="h-24 sm:h-32 md:h-40" src={bgCatrImg2} alt="" />
          </div>

          {/* Content */}
          <h1 className="font-bold text-2xl sm:text-3xl md:text-[35px] text-white z-10 text-center">
            In Progress
          </h1>
          <p className="font-semibold text-lg sm:text-xl md:text-[22px] text-white z-10 text-center mt-2">
            {status.length}
          </p>
        </div>

        {/* 2 */}
       <div className="relative bg-gradient-to-r from-[#54CF68] to-[#00827A] shadow-2xl mt-3 rounded-md p-5 md:p-7 flex flex-col items-center justify-center overflow-hidden">
          
          <div className="absolute flex justify-between items-center w-full h-full px-2 md:px-5 opacity-70 md:opacity-50 pointer-events-none">
            <img className="h-24 sm:h-32 md:h-40" src={bgCatrImg1} alt="" />
            <img className="h-24 sm:h-32 md:h-40" src={bgCatrImg2} alt="" />
          </div>

          {/* Content */}
          <h1 className="font-bold text-2xl sm:text-3xl md:text-[35px] text-white z-10 text-center">
            Resolved
          </h1>
          <p className="font-semibold text-lg sm:text-xl md:text-[22px] text-white z-10 text-center mt-2">
           {resolved.length}
          </p>
        </div>
      </div>
      
    );
};

export default Cart;