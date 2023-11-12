import React from 'react';
import uploadImg from "../../../assets/picture/gallery-svgrepo-com.svg"
import searchImg from "../../../assets/picture/search-alt-1-svgrepo-com.svg"
import dropImg from "../../../assets/picture/arrow-drop-down-svgrepo-com.svg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const TopHead = () => {
  const navegate = useNavigate();


  const [searchtext, setSearchtext] = useState('');

  console.log(searchtext)
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchtext(inputValue);
  };



  return (<>
    <div className='bg-[#2E5FCF] w-full pb-20 pt-10'>

      <p className='text-center font-bold text-white text-4xl flex flex-col gap-6'>
        طرح های عالی، سریعتر ایجاد کنید

        <span className='font-normal text-xl mt'>
          با وکتور، عکس، فیلم، ماکت و موارد دیگر، ایده ها را به طرح های برجسته تبدیل کنید
        </span>
      </p>

      <div className='w-full  flex justify-center mt-8 '>
        <div className='w-8/12 max-[500px]:w-11/12 rounded-md h-14 flex justify-center gap-2'>
          <div className='h-full bg-white w-9/12 max-[500px]:w-full rounded-md flex items-center'>
            {/* <div className='w-3/12 h-full flex justify-center items-center cursor-pointer'>
              <p className='text-sm font-normal flex justify-between items-center gap-4'>
                <span className='flex items-center'>
                  <img src={dropImg} alt="" />
                </span>
                resource
              </p>
            </div> */}
            <input
              type="text"
              className={`text-input max-[860px]:w-10/12 w-11/12 h-1/2 border-r-[2px] pr-5 outline-none`}
              placeholder="تایپ کنید..."
              value={searchtext}
              onChange={handleInputChange}
            />
            <div className='w-1/12 max-[860px]:w-2/12 cursor-pointer h-full flex items-center justify-center'>
              <Link to={`/home/search/${searchtext}`}>

                <img src={searchImg} alt="" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      <p className='flex justify-center gap-4 mt-4 cursor-pointer'>
        <span className='font-semibold text-sm bg-[#5982E1] text-white p-1 rounded-md hover:bg-[#5982E1]/[.06]'>کارت کسب و کار</span>
        <span className='font-semibold text-sm bg-[#5982E1] text-white p-1 rounded-md hover:bg-[#5982E1]/[.06]'>کاغذ دیواری هالووین</span>
        <span className='font-semibold text-sm bg-[#5982E1] text-white p-1 rounded-md hover:bg-[#5982E1]/[.06]'>پس زمینه</span>

      </p>
      <div>

      </div>


      <div className='flex justify-evenly mt-10 max-[950px]:hidden'>
        <div className='w-[16%] h-[172px] flex flex-col justify-between '>
          <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

            <img className='rounded-3xl h-full w-full hover:scale-150 transition-all ' src="https://img.freepik.com/free-photo/_23-2150805314.jpg?size=240&ext=jpg" alt="" />

          </div>
          <p className='text-center font-semibold text-white '>
            وکتورها
          </p>
        </div>

        <div className='w-[16%] h-[172px] flex flex-col justify-between '>
          <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

            <img className='rounded-3xl h-full w-full hover:scale-150 transition-all' src="https://img.freepik.com/free-photo/_23-2150060938.jpg?size=240&ext=jpg" alt="" />


          </div>
          <p className='text-center font-semibold text-white '>
            عکس ها
          </p>
        </div>
        <div className='w-[16%] h-[172px] flex flex-col justify-between '>
          <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

            <img className='rounded-3xl h-full w-full hover:scale-150 transition-all' src="https://img.freepik.com/free-photo/_23-2149816696.jpg?size=240&ext=jpg" alt="" />


          </div>
          <p className='text-center font-semibold text-white '>
            ویدیوها
          </p>
        </div>
        <div className='w-[16%] h-[172px] flex flex-col justify-between '>
          <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

            <img className='rounded-3xl h-full w-full hover:scale-150 transition-all 	' src="https://img.freepik.com/free-photo/_23-2150805314.jpg?size=240&ext=jpg" alt="" />


          </div>
          <p className='text-center font-semibold text-white '>
            قالب
          </p>
        </div>
        <div className='w-[16%] h-[172px] flex flex-col justify-between '>
          <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

            <img className='rounded-3xl h-full w-full hover:scale-150 transition-all 	' src="https://img.freepik.com/free-photo/_23-2148943495.jpg?size=240&ext=jpg " alt="" />


          </div>
          <p className='text-center font-semibold text-white '>
            PSD
          </p>
        </div>

      </div>

      <Splide
        className="mt-16 hidden max-[950px]:flex "
        options={{
          rewind: true,
          gap: '1rem',
          perPage: 4,
          breakpoints: {
            700: {
              perPage: 3
            },
            500: {
              perPage: 2
            }
          },
          pagination: false,
          arrows: false,
          direction: "rtl",
          focus: 0,
          width: '100%',
          padding: { left: 0, right: 0 }

        }}

      >
        <SplideSlide className="mr-8">
          <div className='w-full h-[172px] flex flex-col justify-between '>
            <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

              <img className='rounded-3xl h-full w-full hover:scale-150 transition-all 	' src="https://img.freepik.com/free-photo/_23-2150805314.jpg?size=240&ext=jpg" alt="" />


            </div>
            <p className='text-center font-semibold text-white '>
              PSD
            </p>
          </div>
        </SplideSlide>
        <SplideSlide className="mr-8">
          <div className='w-full h-[172px] flex flex-col justify-between '>
            <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

              <img className='rounded-3xl h-full w-full hover:scale-150 transition-all 	' src="https://img.freepik.com/free-photo/_23-2150805314.jpg?size=240&ext=jpg" alt="" />


            </div>
            <p className='text-center font-semibold text-white '>
              PSD
            </p>
          </div>
        </SplideSlide>
        <SplideSlide className="mr-8">
          <div className='w-full h-[172px] flex flex-col justify-between '>
            <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

              <img className='rounded-3xl h-full w-full hover:scale-150 transition-all 	' src="https://img.freepik.com/free-photo/_23-2150805314.jpg?size=240&ext=jpg" alt="" />


            </div>
            <p className='text-center font-semibold text-white '>
              PSD
            </p>
          </div>
        </SplideSlide>
        <SplideSlide className="mr-8">
          <div className='w-full h-[172px] flex flex-col justify-between '>
            <div className='w-full p-[2px] h-5/6 rounded-3xl border-2 border-[#85A4EC] overflow-hidden'>

              <img className='rounded-3xl h-full w-full hover:scale-150 transition-all 	' src="https://img.freepik.com/free-photo/_23-2150805314.jpg?size=240&ext=jpg" alt="" />


            </div>
            <p className='text-center font-semibold text-white '>
              PSD
            </p>
          </div>
        </SplideSlide>

      </Splide>




    </div >
    <div className='w-full h-20 bg-[#E1E9FC] font-semibold text-lg flex justify-center items-center gap-4'>
      <p>
        برای لذت بردن از دانلود رایگان بیشتر یک حساب کاربری ایجاد کنید

      </p>
      <button className='bg-[#336aea] font-semibold text-base w-44 py-2 rounded-md text-white'>
        ثبت نام رایگان

      </button>
    </div>
  </>);
}

export default TopHead;