import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import searchIcon from "../../../assets/search icon blue.svg";
import imgnoies from "../../../assets/picture/abstract-blurred-grainy-gradient-background-texture-colorful-digital-grain-soft-noise-effect-pattern-lofi-multicolor-vintage-retro-vhs-glitch-texture_728202-784.avif"
import Footer from "./Footer";

const Unlock = () => {
  return (<>
    <p className='font-semibold text-3xl mt-20 px-16'>
      قفل خالق درونی خود را باز کنید
    </p>

    <p className='text-xl text-[#777] mt-4 px-16'>
      با این مجموعه هایی که با دقت انتخاب شده اند تا تعامل پروژه خود را تقویت کنید، الهام بگیرید.
    </p>

    <Splide
      className="mt-16"
      options={{
        rewind: true,
        gap: '1rem',
        perPage: 4,
        pagination: false,
        arrows: false,
        direction: "rtl",
        breakpoints: {
          1360: {
            perPage: 3,
          },
          990: {
            perPage: 2,
          },
          990: {
            perPage: 1,
          }
        },

        focus: 0,
        width: '100%',
        padding: { left: 0, right: 0 }

      }}

    >
      <SplideSlide className="mr-8">
        <div className='bg-red-500 rounded-2xl w-[350px]  h-[420px] relative rotate-12'>
          <img className="w-full h-full -rotate-12 rounded-2xl absolute " src="https://img.freepik.com/premium-psd/festa-junina-poster-mockup_23-2150195924.jpg?size=626&ext=jpg" alt="" />
        </div>
      </SplideSlide>
      <SplideSlide className="mr-8">
        <div className='bg-red-500 rounded-2xl w-[350px] h-[420px] relative rotate-12'>
          <img className="w-full h-full -rotate-12 rounded-2xl absolute " src="https://img.freepik.com/premium-psd/festa-junina-poster-mockup_23-2150195924.jpg?size=626&ext=jpg" alt="" />
        </div>
      </SplideSlide>
      <SplideSlide className="mr-8">
        <div className='bg-red-500 rounded-2xl w-[350px] h-[420px] relative rotate-12'>
          <img className="w-full h-full -rotate-12 rounded-2xl absolute " src="https://img.freepik.com/premium-psd/festa-junina-poster-mockup_23-2150195924.jpg?size=626&ext=jpg" alt="" />
        </div>
      </SplideSlide>
      <SplideSlide className="mr-8">
        <div className='bg-red-500 rounded-2xl w-[350px] h-[420px] relative rotate-12'>
          <img className="w-full h-full -rotate-12 rounded-2xl absolute " src="https://img.freepik.com/premium-psd/festa-junina-poster-mockup_23-2150195924.jpg?size=626&ext=jpg" alt="" />
        </div>
      </SplideSlide>

    </Splide>

    <p className='font-semibold text-3xl mt-20 px-16 text-center '>
      هوشمندانه ترین انتخاب برای
      <span className='text-[#336aea] ms-2'>
        خلاقانی مانند شما
      </span>
    </p>

    <p className='text-xl text-[#777] mt-4 px-16 text-center'>
      چه به دنبال طرح یا عکس باشید، دارایی عالی را در Freepik پیدا خواهید کرد.
    </p>

    <div className="mt-20 w-full  flex px-16">

      <div className="w-7/12 h-full max-[1096px]:w-full max-[414px]:gap-20 flex flex-col gap-16">
        <div className="w-full h-[25%] flex gap-5">
          <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-gradient-to-br from-[#759aef] to-white">
            <img src={searchIcon} alt="" />

          </div>

          <p className='font-semibold text-[20px] w-8/12 flex flex-col'>
            محتوای سهام با کیفیت بالا
            <span className='text-[15px] text-[#777] '>
              برای حرفه ای جلوه دادن پروژه های خود، تصاویر اسکرول توقف را با بهترین کیفیت دانلود کنید.
            </span>
          </p>

        </div>

        <div className="w-full h-[25%] flex gap-5">
          <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-gradient-to-br from-[#759aef] to-white">
            <img src={searchIcon} alt="" />

          </div>

          <p className='font-semibold text-[20px] w-8/12 flex flex-col '>
            دارایی های آماده استفاده
            <span className='text-[15px] text-[#777] '>
              به هزاران تصویر و طرح آماده برای انتشار دسترسی داشته باشید و پروژه خود را دو برابر سریع آماده کنید.            </span>
          </p>

        </div>
        <div className="w-full h-[25%] flex gap-5">
          <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-gradient-to-br from-[#759aef] to-white">
            <img src={searchIcon} alt="" />

          </div>

          <p className='font-semibold text-[20px] w-8/12 flex flex-col '>
            نتایج جستجوی تضمینی
            <span className='text-[15px] text-[#777] '>
              برای هر پروژه، هر نیازی که باشد، یک تصویر و سبک وجود دارد.
            </span>
          </p>

        </div>
        <div className="w-full h-[25%] flex gap-5">
          <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-gradient-to-br from-[#759aef] to-white">
            <img src={searchIcon} alt="" />

          </div>

          <p className='font-semibold text-[20px] w-8/12 flex flex-col '>
            محتوای تازه هر روز
            <span className='text-[15px] text-[#777] '>
              کتابخانه ما به صورت روزانه به روز می شود تا بتوانید جدیدترین و شیک ترین عکس ها و طرح ها را بیابید.
            </span>
          </p>

        </div>

      </div>

      <div className="w-5/12 h-full max-[1096px]:hidden">
        <img src="https://freepik.cdnpk.net/img/home/resources.webp" alt="" />
      </div>





    </div>


    <div className="h-[450px] relative bg-no-repeat px-16 flex  mt-20">
      <img className="absolute w-full h-full right-0 -z-30" src={imgnoies} alt="" />


      <div className="w-1/2 max-[1000px]:w-full  h-full flex flex-col gap-5 justify-center  ">
        <p className="fontbold text-[17px] text-[#c8c8c8]">
          به تقویم جدید
          <span className=" text-[#fec343] ms-1">
            Freepik خوش آمدید
          </span>
        </p>

        <p className="fontbold text-[24px] text-white ">
          <span className=" text-[#fec343] me-1">
            همه جشن ها و رویدادها
          </span>
          در دسترس شما هستند
        </p>

        <button className="w-28 rounded-lg h-10 bg-white/[0.2] font-semibold text-[15px] text-white transition-all hover:bg-white/[0.4] mt-8">
          مرور تقویم
        </button>



      </div>
      <div className="w-1/2 h-full max-[1000px]:hidden ">
        <img src="https://freepik.cdnpk.net/img/home/calendar.webp" alt="" />
      </div>
    </div>


    <div className="h-[350px] max-[500px]:h-[450px] relative bg-no-repeat mx-8  rounded-xl bg-[#ECF1FD] flex mt-20">
      <div className="w-7/12 max-[870px]:w-full max-[870px]:pl-8 h-full flex flex-col gap-5 pr-8 justify-center ">

        <p className='font-semibold text-3xl text-center  mt-20'>
          <span className='text-[#336aea] me-1'>
            به انجمن سازندگان
          </span>

          Freepik بپیوندید
        </p>

        <p className="fontbold text-[17px] text-[#424242] flex gap-2 ">
          پشت هر تصویر استوک، یک ذهن خلاق وجود دارد. همچنین می توانید محتوا ایجاد کنید و آن را در Freepik بفروشید        </p>

        <button className="w-28 rounded-lg h-10 bg-[#336AEA] font-semibold text-[15px] text-white transition-all hover:bg-[#0065EA] mt-8">
          فروش محتوا
        </button>



      </div>
      <div className="w-5/12 h-full max-[870px]:hidden ">
        <img className="w-[550px] h-full" src="https://freepik.cdnpk.net/img/home/community.webp" alt="" />
      </div>
    </div>

    <Footer />





  </>);
}

export default Unlock;