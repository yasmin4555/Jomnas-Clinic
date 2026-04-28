import { assets } from "../assets/assets";
import Slide2 from"../images/Slide2.png";
import Slide3 from"../images/Slide3.jpg";
import Slide4 from"../images/Slide4.jpg";
import Slide5 from"../images/Slide5.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const About= () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
    return(
   <div >
   <div className="text-center text-2xl pt-10 text-gray-500">
   <p>ABOUT<span className="text-black-700 font-semibold">US</span></p>
  
   
    </div>
    <div className="Aboutus-container">
      <div>
    <p className="font-semibold text-mr-left">In Our Clinic You can find yourself Comfortable,
    We have also Top doctors in dermatology and in internal medicine and in plastic surgery,
    with the most new latest professional devices,
    the clinic is managed by Dr Jomna Atta Dermatology specialist.
  </p>
    </div>

    <div>
<img src={assets.Aboutus} className="about-image" alt=""  />

</div>

 
<br></br>
<br></br>
            <h2>Our Services</h2>
            <div>
            <ul>
                <li>Hydra facial</li>
                <li>Filler and Botox</li>
                <li>Plastic surgery</li>
                <li>Internal examination</li>
            </ul>
            </div>

            <br></br>
            <br></br>
            <br></br>
<Slider {...settings} className="about-us-slider">
              <div>
                <img src={Slide2} className='about-us-Slider' alt="Slide 2" />


                </div>
                <div>
                  <img src ={Slide3}  className='about-us-Slider' alt="Slide 3" />

                  </div>

              <div>
                <img src ={Slide4}  className='about-us-Slider' alt="Slide 4" />

                    </div>

                    <div>
                <img src ={Slide5}  className='about-us-Slider'  alt="Slide 5"/>

                    </div>
              </Slider>

   </div>
   </div>
   
    )
}

export default About;
