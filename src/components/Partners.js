import React,{useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from "aos";
import "aos/dist/aos.css";
// Import your sponsor images
import sponsor1 from '../img/news1.png'
import sponsor2 from '../img/news2.png'
import sponsor3 from '../img/news3.png'
// Add more sponsors as needed

const Partners = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className=''>
    <div className='container' >
    <div className="sponsor-slider pt-3 pb-5" data-aos="fade-up" data-aos-duration="4500">
      <div className="title mb-3 cleaner-h2 pt-5" >
                            <h5 className="text-primary">Our Proud Partners</h5>
                {/* <h1 className="mb-4">Experienced Team Members</h1> */}
                        </div>
      <Slider {...settings} className='pt-5' >
        <div > 
          <img src="https://droit.energy/wp-content/uploads/2017/10/testimonial-logo-1-300x284.png" alt="Sponsor 1" />
        </div>
        <div>
          <img src="https://droit.energy/wp-content/uploads/2017/10/testimonial-logo-2-150x150.png" alt="Sponsor 2" />
        </div>
        <div>
          <img src="https://droit.energy/wp-content/uploads/2017/11/depositphotos_43436725-stock-illustration-icon-design-element-13.png" alt="Sponsor 3" />
        </div>
        
        <div>
          <img src="https://droit.energy/wp-content/uploads/2017/11/depositphotos_43436725-stock-illustration-icon-design-element-15.png" alt="Sponsor 4" />
        </div>
        <div>
          <img src="https://droit.energy/wp-content/uploads/2017/11/depositphotos_43436725-stock-illustration-icon-design-element-16.png" alt="Sponsor 5" />
        </div>
        <div>
          <img src="https://droit.energy/wp-content/uploads/2017/11/depositphotos_43436725-stock-illustration-icon-design-element-17.png" alt="Sponsor 6" />
        </div>

        <div>
          <img src="https://droit.energy/wp-content/uploads/2017/11/depositphotos_43436725-stock-illustration-icon-design-element-14-1.png" alt="Sponsor 7" />
        </div>

        {/* Add more sponsors here */}
      </Slider>
    </div>
    </div>
    </div>
    </>
  );
};

export default Partners;
