// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './index.scss'
// import required modules
import { Navigation } from "swiper/modules";

export default function Review() {
  return (
    <>

      <section id="Perview">

         <div className="TitlePerOne">
            <h3>Customers Say</h3>
           
          </div>
          <div className="TitlePerTwo">
           <h1>REVIEW</h1>
           </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
         
          <SwiperSlide>
            <div className="PreviewArea">
              <div className="ImgPer">
                <img
                  src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg"
                  alt=""
                />
              </div>
              <div className="TextPer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque libero possimus, tempore omnis hic quaerat delectus
                  iure perferendis facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos ipsam repellendus fugit harum ab, aperiam soluta repellat tempora sit quia consectetur quam. Repellendus iusto modi earum itaque esse recusandae.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="PreviewArea">
              <div className="ImgPer">
                <img
                  src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg"
                  alt=""
                />
              </div>
              <div className="TextPer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque libero possimus, tempore omnis hic quaerat delectus
                  iure perferendis facere
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="PreviewArea">
              <div className="ImgPer">
                <img
                  src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg"
                  alt=""
                />
              </div>
              <div className="TextPer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque libero possimus, tempore omnis hic quaerat delectus
                  iure perferendis facere
                </p>
              </div>
            </div>
          </SwiperSlide>
       
      </Swiper>
       </section>
    </>
  );
}
