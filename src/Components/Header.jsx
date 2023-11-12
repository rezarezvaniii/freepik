import React from 'react';
// import freepikLogo from "../assets/picture/copyright 1.svg"
import freepikLogo from "../assets/picture/freepiklogo.svg"
import menuesideSvg from "../assets/picture/icons8-menu.svg"
import { useState } from 'react';


const Header = () => {
  const [sidemenue, setSidemenue] = useState(false);
  console.log(sidemenue)



  return (
    <>
  
      {
        sidemenue ?
          <div className='bg-[#121212] transition-all h-screen fixed w-1/2 z-30 p-5'>
            <div onClick={() => setSidemenue(false)} className='w-full flex'>
              <img className='w-10' src={menuesideSvg} alt="" />
              gfmnmkmdsngakldsn
            </div>
            <div className=' flex flex-col gap-8 mt-4 overflow-y-scroll'>

              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                وکتور
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                عکس ها
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                همه عکس ها
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                آیکون ها
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                ویدیوها
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                PSD
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                3D
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                فونت ها
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                دسته بندی
              </p>
              <p className='font-semibold inline text-[13px] text-[#b1b1b1] cursor-pointer text-base'>
                بیشتر
              </p>


            </div>
          </div> :
          null

      }



      <div className='bg-[#2E5FCF] w-full h-16 max-[1120px]:px-4 px-24 flex justify-between'>
        <div className=' w-11/12 h-full flex  justify-between'>
          <div className=' h-full flex items-center justify-between w-9/12 max-[980px]:hidden'>
            <svg width="153" height="22" viewBox="0 0 712 105" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M188.21 66.26C187.89 65.93 188.12 65.38 188.58 65.38H190.54C190.54 65.38 190.63 65.38 190.68 65.38C207.77 63.64 222.05 52.6 222.05 33.01C222.05 10.44 203.84 0.0100098 182.98 0.0100098H85.28C83.97 0.0100098 82.9 1.07001 82.9 2.39001V102.54C82.9 103.85 83.96 104.92 85.28 104.92H116.48C117.79 104.92 118.86 103.86 118.86 102.54V70.56C118.86 69.25 119.92 68.18 121.24 68.18H141.52C144.33 68.18 147.01 69.39 148.88 71.49L177.77 104.11C178.39 104.39 178.93 104.63 179.55 104.91H220.73C222.84 104.91 223.9 102.37 222.42 100.86L188.22 66.26H188.21ZM175.2 44.68H121.23C119.92 44.68 118.85 43.62 118.85 42.3V27.13C118.85 25.82 119.91 24.75 121.23 24.75H174.42C182.05 24.75 187.03 28.49 187.03 34.4C187.03 41.25 182.36 44.67 175.2 44.67V44.68Z"></path>
              <path d="M582.55 0.0100098H551.36C550.046 0.0100098 548.98 1.07557 548.98 2.39001V68.87C548.98 70.1844 550.046 71.25 551.36 71.25H582.55C583.864 71.25 584.93 70.1844 584.93 68.87V2.39001C584.93 1.07557 583.864 0.0100098 582.55 0.0100098Z"></path>
              <path d="M582.55 85.41H551.36C550.046 85.41 548.98 86.4756 548.98 87.79V102.54C548.98 103.854 550.046 104.92 551.36 104.92H582.55C583.864 104.92 584.93 103.854 584.93 102.54V87.79C584.93 86.4756 583.864 85.41 582.55 85.41Z"></path>
              <path d="M711.02 101.78L670.88 48.63C669.98 47.44 670.06 45.79 671.06 44.69L708.97 3.11001C710.05 1.92001 709.21 0.0100098 707.6 0.0100098H674.8C673.93 0.0100098 673.1 0.380012 672.52 1.02001L635.92 41.25H635.9C635.78 41.38 635.62 41.48 635.42 41.48H634.1C633.75 41.48 633.48 41.2 633.47 40.86V2.2C633.47 0.990005 632.49 0.0100098 631.28 0.0100098H601.29C600.08 0.0100098 599.1 0.990005 599.1 2.2V102.6C599.1 103.71 600 104.61 601.11 104.61H631.45C632.56 104.61 633.46 103.71 633.46 102.6V83.91C633.46 83.13 633.76 82.37 634.29 81.8L647.61 67.55C647.61 67.55 647.73 67.37 648 67.37H649.8C650.02 67.37 650.15 67.55 650.15 67.55L676.99 103.37C677.57 104.15 678.49 104.61 679.46 104.61H709.6C711.06 104.61 711.9 102.94 711.01 101.77L711.02 101.78Z"></path>
              <path d="M270.58 23.98H301.09C302.4 23.98 303.47 22.92 303.47 21.6V2.38C303.47 1.07 302.41 0 301.09 0H237.98C236.67 0 235.6 1.06 235.6 2.38V102.53C235.6 103.84 236.66 104.91 237.98 104.91H301.09C302.4 104.91 303.47 103.85 303.47 102.53V83.31C303.47 82 302.41 80.93 301.09 80.93H270.36C269.05 80.93 267.98 79.87 267.98 78.55V66.09C267.98 64.66 269.14 63.49 270.58 63.49H301.09C302.4 63.49 303.47 62.43 303.47 61.11V42.36C303.47 41.05 302.41 39.98 301.09 39.98H270.58C269.15 39.98 267.98 38.82 267.98 37.38V26.54C267.98 25.11 269.14 23.94 270.58 23.94V23.98Z"></path>
              <path d="M352.6 23.98H383.11C384.42 23.98 385.49 22.92 385.49 21.6V2.38C385.49 1.07 384.43 0 383.11 0H320C318.69 0 317.62 1.06 317.62 2.38V102.53C317.62 103.84 318.68 104.91 320 104.91H383.11C384.42 104.91 385.49 103.85 385.49 102.53V83.31C385.49 82 384.43 80.93 383.11 80.93H352.38C351.07 80.93 350 79.87 350 78.55V66.09C350 64.66 351.16 63.49 352.6 63.49H383.11C384.42 63.49 385.49 62.43 385.49 61.11V42.36C385.49 41.05 384.43 39.98 383.11 39.98H352.6C351.17 39.98 350 38.82 350 37.38V26.54C350 25.11 351.16 23.94 352.6 23.94V23.98Z"></path>
              <path d="M35.87 23.98H66.38C67.69 23.98 68.76 22.92 68.76 21.6V2.38C68.76 1.07 67.7 0 66.38 0H3.27001C1.96001 0 0.890015 1.06 0.890015 2.38V102.53C0.890015 103.84 1.95001 104.91 3.27001 104.91H30.88C32.19 104.91 33.26 103.85 33.26 102.53L33.28 66.1C33.28 64.67 34.44 63.5 35.88 63.5H66.39C67.7 63.5 68.77 62.44 68.77 61.12V42.37C68.77 41.06 67.71 39.99 66.39 39.99H35.88C34.45 39.99 33.28 38.83 33.28 37.39V26.55C33.28 25.12 34.44 23.95 35.88 23.95L35.87 23.98Z"></path>
              <path d="M496.49 0.0100098H402.03C400.72 0.0100098 399.65 1.07001 399.65 2.39001V102.54C399.65 103.85 400.71 104.92 402.03 104.92H433.23C434.54 104.92 435.61 103.86 435.61 102.54V69.39C435.61 68.72 436.15 68.18 436.82 68.18H496.65C520.63 68.18 538.8 55.68 538.8 33.61C538.8 11.54 520.63 0.0100098 496.5 0.0100098H496.49ZM491.95 44.68H437.98C436.67 44.68 435.6 43.62 435.6 42.3V27.13C435.6 25.82 436.66 24.76 437.98 24.76H491.17C498.8 24.76 503.78 28.49 503.78 34.41C503.78 41.26 499.11 44.68 491.95 44.68Z"></path>
            </svg>

            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>وکتور</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>عکس ها</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>همه عکس ها</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>آیکون ها</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>ویدیوها</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>PSD</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>3D</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>فونت ها</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>دسته بندی</p>
            <p className='font-semibold text-[13px] text-white hover:text-[#b1b1b1] cursor-pointer '>بیشتر</p>

          </div>
          <div className='flex text-white font-semibold text-[13px] max-[980px]:hidden items-center gap-5 pl-5'>
            <p className='hover:text-[#b1b1b1] cursor-pointer'>فروش محتوا</p>
            <p className='hover:opacity-80 cursor-pointer text-[#f4980a]'>خرید</p>
          </div>
          <div onClick={() => setSidemenue(true)} className='min-[980px]:hidden  w-10 h-full flex items-center'>
            <img src={menuesideSvg} alt="" />
          </div>


        </div>

        <div className='w-1/12 max-[1108px]:w-2/12 max-[450px]:w-4/12 max-[450px]:w-5/12 h-full max-[612px]:w-3/12 text-white flex justify-between items-center gap-4'>

          <p className='hover:text-[#b1b1b1] cursor-pointer'>ورود</p>
          <p className='hover:text-[#b1b1b1] cursor-pointer'>ثبت نام</p>
        </div>

      </div>


    </>
  );
}

export default Header;