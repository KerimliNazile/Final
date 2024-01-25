
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';



import './index.scss'
import { Navigation } from 'swiper/modules';

export default function Header() {
  return (
    <>
      <Swiper navigation={true}
       modules={[Navigation]} 
       spaceBetween={0}
       slideperview
       className="mySwiper">
       
        <SwiperSlide>
        <div className="HeaderArea">
              <div className="ImgHeader">
                <img src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg" alt="" />
              </div>
              <div className="Text">
                <h1>WELCOME TO</h1>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="HeaderArea">
              <div className="ImgHeader">
                <img src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg" alt="" />
              </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
