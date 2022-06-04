import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './Testinomial.css'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import React from 'react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import {themeContext} from '../../Context'
import {useContext} from 'react'

const Testinomial = () => {
  const theme = useContext (themeContext);
  
  const darkMode = theme.state.darkMode; 
 const  clients = [
    {
      img: profilePic1,
      review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the'
    },
    {
      img: profilePic2,
      review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the'
    },
    {
      img: profilePic3,
      review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the'
    },
    {
      img: profilePic4,
      review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the'
    }
  ]
  return (
    <div className="t-wrapper" id='Testinomial'>
        <div className="t-heading">
            <span>Client always get</span>
            <span>Exceptional Work</span>
            <span>From me</span>
            <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}>

        {clients.map((client, index) => 
          <SwiperSlide key={index}>
            <div className="testinomial">

            <img src={client.img} alt="" />
            <span style={{color: darkMode? 'white' : ''}}>{client.review}</span>
            </div>
          </SwiperSlide>
)}
        </Swiper>
    </div>
  )
}

export default Testinomial