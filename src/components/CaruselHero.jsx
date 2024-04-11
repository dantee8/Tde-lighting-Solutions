import { Carousel } from "flowbite-react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import led1 from "../assets/boomled.jpeg";
import led2 from "../assets/ledwall.jpeg";
import led3 from "../assets/ledwash.jpeg";

const CaruselHero = () => {
  const bannerImages = [led1, led2, led3];

  return (
    <div className=" w-[80vw]   shadow-xl rounded-lg m-auto border-2 mt-3">
      <Carousel
        className="lg:h-[50vh]   sm:h-[20vh] h-[20vh]  rounded-md shadow-lg"
        leftControl={<MdKeyboardArrowLeft className="w-10 h-10" />}
        rightControl={<MdKeyboardArrowRight className="w-10 h-10" />}
        pauseOnHover
        slideInterval={7000}
      >
        {bannerImages.map((banner) => {
          return (
            <div key={banner} className="flex items-center justify-center ">
              <img
                className="md:w-48 md:h-48 sm:w-40 sm:h-40 w-28 h-28 lg:w-96 lg:h-96 object-contain "
                src={banner}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CaruselHero;
