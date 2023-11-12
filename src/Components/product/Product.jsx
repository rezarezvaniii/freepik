import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import downloadSvg from "../../assets/picture/203344.svg"
import { useEffect } from 'react';
import axios from 'axios';


const Product = () => {

  const { searchtext } = useParams();

  console.log("useparamse : ", searchtext)


  const datapic = [
    { name: "رضا", picture: "https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg?size=626&ext=jpg" },
    { name: "amir", picture: "https://freepik.cdnpk.net/img/banner/microfunnel-flaticon.webp" },
    { name: "hossein", picture: "https://img.freepik.com/free-photo/close-up-human-hand-holding-up-uppercase-capital-letter-h-yellow-background_23-2148188505.jpg?size=626&ext=jpg" },
    { name: "abbass", picture: "https://img.freepik.com/premium-vector/letter-circle-logo-design-hf_713501-322.jpg?size=626&ext=jpg" },
    { name: "taghi", picture: "https://img.freepik.com/free-vector/high-five-retro-vector-layered-typography_53876-177364.jpg?size=626&ext=jpg" },
    { name: "ali", picture: "https://img.freepik.com/free-vector/watercolor-background-design_1345-64.jpg?size=626&ext=jpg" },
    { name: "mohsen", picture: "https://img.freepik.com/free-vector/flat-design-letter-h-logo-template_23-2149355268.jpg?size=626&ext=jpg" },
    { name: "kia", picture: "https://img.freepik.com/free-vector/romantic-love-message-hearts-background_1017-29964.jpg?size=626&ext=jpg" },
    { name: "amin", picture: "https://img.freepik.com/free-vector/love-bubbles-valentine_1085-666.jpg?size=626&ext=jpg" },
    { name: "vahid", picture: "https://img.freepik.com/free-photo/love-romance-perforated-paper-heart_53876-87.jpg?size=626&ext=jpg" },
    { name: "yuness", picture: "https://img.freepik.com/free-photo/standing-man-woman-mountain-with-star-light-hugging-couple-against-purple-milky-way_146671-14040.jpg?size=626&ext=jpg" },
    { name: "yuness", picture: "https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg?size=626&ext=jpg" },
  ]

  const [dialogpic, setDialogpic] = useState(false);
  console.log(dialogpic)

  const [namechange, setNamechange] = useState(null)
  const [picchange, setPicchange] = useState(null)

  const handleDownloader = () => {
    const imageUrl = picchange;

    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'image.jpg';
    downloadLink.target = '_blank';


    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  }


  const handlesetting = (name, picture) => {
    setDialogpic(!dialogpic)
    setNamechange(name)
    setPicchange(picture)
  }

  const [responsed, setResponsed] = useState([]);

  console.log(responsed)

  const fetchListusers = async () => {
    // const url = `https://api.hexarz.com/v1/api/manage/admin/users/list?page=${first}` ;
    const config = {
      method: "get",
      url: `https://sp.cdnpk.net/Rest/Media/1/ExpressSearch/Files?search_parameters[limit]=40&locale=en_US&page=0&product=freepik-js-1&search_parameters[filters][content_type:vector]=1&search_parameters[filters][content_type:photo]=1&search_parameters[words]=${searchtext}`,

    };

    try {
      const response = await axios(config);

      setResponsed(response.data.files)

    } catch (error) {
      console.log(error.toString());
      // Handle error
    }
  };

  useEffect(() => {
    fetchListusers()
  }, [])


  return (
    <>
      {
        dialogpic ?
          <div className='w-full h-screen flex justify-center items-center bg-black/60 fixed z-20 translate-x-1/2 right-1/2 '>
            <div className='w-10/12 h-5/6  bg-white rounded-xl flex'>
              <div className='w-4/12 h-full  flex flex-col justify-between '>
                <div className='pr-5 pt-5'>
                  <button onClick={() => setDialogpic(!dialogpic)} className='w-20 h-10 mb-6 bg-red-500 text-white rounded-xl'>
                    بستن
                  </button>
                </div>

                <div className='w-full flex flex-col gap-5 items-center'>
                  <p className='text-black'>سازنده اثر : {namechange}</p>
                  <button onClick={handleDownloader} className='w-32 flex items-center justify-center gap-2 h-10 mb-6 bg-green-500 text-white rounded-xl'>
                    دانلود
                    <img src={downloadSvg} alt="" />
                  </button>
                </div>

              </div>
              <div className='w-8/12 h-full flex flex-col justify-center items-center'>
                <img className='rounded-2xl w-1/2 h-1/2' src={picchange} alt="" />
              </div>
            </div>

          </div>
          :
          null
      }


      <div className='w-full flex justify-center '>
        <p className='text-gray-400 font-semibold text-2xl mt-5'>نتیجه جستجو برای <span className='font-bold text-black text-2xl'>{searchtext}</span></p>
      </div>
      <div className='w-full px-16 flex justify-between flex-wrap'>

        {
          responsed.map((item, index) => {

            return (
              <>
                {/* <p className=' text-black'>{item.details_url}</p> */}
                <div key={index} className='w-[32%] max-[944px]:w-[47%]  max-[700px]:w-full mt-6 rounded-lg relative'>
                  <img className='rounded-lg h-full w-full' src={item.thumbnail_240_url} alt="" />
                  <div onClick={() => handlesetting(item.category.name, item.thumbnail_240_url)} className='w-full h-full  absolute bg-black/20 opacity-0 cursor-pointer  top-0 hover:opacity-100 transition-all rounded-lg '>
                    <p className='text-white absolute bottom-3 left-4'>{item.category.name}</p>
                  </div>
                </div>
              </>

            )

          })
        }

      </div>

    </>
  );
}

export default Product;