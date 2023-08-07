import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Gallery = () => {

    const images = [
        {
            src: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/301567565_565036278651678_7327982147430239004_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGHcbAOPxL0Nx_3_xC_dE-XaN5ceropDBRo3lx6uikMFDwe8Z-bSM8HJJmakk5Cc-BRgFLiwTqoMJwSofkr4vTU&_nc_ohc=WBcFRAGoqSUAX8u297q&_nc_ht=scontent.fdac5-2.fna&oh=00_AfAZtwhRYXHkGOR3GZKzv-U_liNBHQc1veJqk9DeoB-dNw&oe=64CFA569"
        },
        {
            src: "https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/47492763_2259865504259308_2404053552470163456_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFIyzSZ5kdDQABixdhmLjZi_R0YTWVQOHL9HRhNZVA4ct6rfDIav02O9NcrzzVQS372cciCvUOr_zZTdzflyuMb&_nc_ohc=1vBPTtzZ4eUAX8yIT-9&_nc_ht=scontent.fdac5-2.fna&oh=00_AfCIUNxJdwLNHzx_UOWBg4rUoWQ7aLlszz4oGk-6pVhMSA&oe=64F2F742 "
        },
        {
            src: "https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/37836751_2162194857359707_3982699774598971392_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeEwMMgBfCmUh9OAJK0vs6k7DJzmuSXc0EAMnOa5JdzQQH7xjcvss2fnanVVaALrHfHFSXL2RDrBirCgeZPyZkCJ&_nc_ohc=--fTT8jtHaYAX-sOxj3&_nc_ht=scontent.fdac5-2.fna&oh=00_AfDShE_mxP8yLnQ74ECzdtmJKEL6Dteg-HpGZrY8H5I13w&oe=64F2CC0B"
        },
        {
            src: "https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/35284212_2117646385147888_1334869573534482432_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFjEFrPzv38XzZHnHcZ2o1HWYHNomZOBPFZgc2iZk4E8fDist4ydWv9EewaUAeciAvySPg4kaToYBW8aaeYJfzG&_nc_ohc=zFQ4bq3GtIoAX-inkit&_nc_ht=scontent.fdac5-1.fna&oh=00_AfBSTbTxAozD3FVzX8EkooU-FyDd1seCGn7HpOmqhx1TwA&oe=64F2CCE8"
        },
        {
            src: "https://scontent.fdac5-1.fna.fbcdn.net/v/t1.18169-9/29573287_2078537372392123_192051020414439670_n.jpg?stp=c51.0.206.206a_dst-jpg_p206x206&_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeGjHmA1e_djhKTaeOBjo90bfKWgM9qd1pt8paAz2p3Wmx9ed1GCji4YHqJzH2pU0mg7Yo5Qw8ynZnfIhta9aUsD&_nc_ohc=W5k6bcpUxjYAX_Enhci&_nc_ht=scontent.fdac5-1.fna&oh=00_AfA640f0Zetmevs7iZzS_5IaeiEYA1rM2C2p7wxNWyoP3g&oe=64F2CB8A"
        },
    ]
    return (
        <div className="container">

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'2.4'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                // pagination={{ el: '.swiper-pagination', clickable: true }}
                // navigation={{
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                //     clickable: true,
                // }}
                // modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container mt-5"
            >
                {
                    images.map((img, i) => <>
                        <SwiperSlide>
                            <img src={img.src} alt="slide_image" className=' h-96 mx-auto' />
                        </SwiperSlide>
                    </>)
                }



            </Swiper>
        </div>
    );
};

export default Gallery;