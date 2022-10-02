import React, { useRef, useEffect } from "react";
import "./Home.css"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// React Animation with iTyped
import { init } from "ityped";

// Imported Photos from assets folder
import shoes1 from "../../assets/shoes1.jpg";
import shoes2 from "../../assets/shoes2.jpg";
import shoes3 from "../../assets/shoes3.jpg";
import shoes4 from "../../assets/shoes4.jpg";
import shoes5 from "../../assets/shoes5.jpg";

const photos = [shoes1, shoes2, shoes3, shoes4, shoes5];

const Home = () => {
  const textAnimation = useRef();

  // useEffect for the animation
  useEffect(() => {
    init(textAnimation.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Swiper and EmailJS Connected to Form"],
    });
  }, []);

  return (
    <main className="home-page-container">
      <h1 className="title" ref={textAnimation}>
      </h1>
      <Swiper
        modules={[Navigation, EffectFade]}
        //navigation
        navigation
        effect
        //effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
        className="myswiper"
      >
        {photos.map((photo, index) => {
          return (
            <SwiperSlide className="swiperslide">
              <div className="image-container">
                <img src={photo.toString()} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default Home;
