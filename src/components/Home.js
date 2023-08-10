import React from 'react';
import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'

import homeCover from '../images/homeCover.jpg'

const Home = () => {
    return (
        <>
            <section className={`h-[500px] bg-cover  bg-bottom	`}
                style={
                    { backgroundImage: `url("${homeCover}")` }}

            >
                <div className="w-fit h-full flex justify-center items-center">
                    <div className="lg:w-[300px] md:w-[300px] sm:w-min font-bold lg:ml-20 md:ml-20 sm:ml-10 font-mono p-3  bg-[#b49a73de]  rounded">
                        <h1 className='text-5xl   mt-3 mb-3'>Team Attendant</h1>
                        <p>We are a team from Independent University, Bangladesh (IUB), and we participate in International Space Related Robotics Competitions every year</p>
                        <a href="/team"><button className='btn  bg-accent mt-5 border-0 normal-case text-white  mx-auto hover:bg-[#fca267]'>The Team</button></a>
                    </div>
                </div>

            </section>
            <section className=" font-mono p-5  sm:block md:flex lg:flex justify-evenly mt-5">
                <div className="lg:w-[30%] md:w-[40%] text-justify sm:w-full">
                    <h1 className='text-4xl font-bold'>OUR VISION</h1>
                    <br />
                    <p>Our goal is to build, design and discover the potentials of a world-class Mars Rover, which will provide a continuous flow of scientific information and perform different operations on the rough Martian terrain. With our research and development, we want to be a pioneer in implementing space technology in the development sectors. Our vision is to make our team one of the best among the Mars rover teams across the globe, to take Bangladesh ahead in Mars Rover Challenges.</p>
                </div>
                <br />
                <br />
                <div className="lg:w-[30%] md:w-[45%] text-justify sm:w-full">
                    <h1 className='text-4xl font-bold'>OUR MOTIVATION</h1>
                    <br />
                    <p>In our journey of working with Mars Rover, we got valuable advice, technical assistance and motivation from our teachers, seniors and people working in different fields, all of which encouraged us to build a full-fledged rover. Right from the team’s inception, our predecessors achieved several national and international recognitions. This motivates us every time to think outside the box, and making our rover a matter of national pride doing so.</p>
                </div>

            </section>
            {/* <section className="h-[500px] ">
            </section> */}
            <footer className='bg-[#352a0c5b] h-[150px] pt-10'>
                <div className="flex justify-between items-center w-[100px] mx-auto ">
                    <a target='_blank' rel='noreferrer' href="https://www.facebook.com/teamattendant"><FaFacebookF /></a>
                    <a href="https://www.youtube.com/@teamattendant5235"><AiFillYoutube /></a>
                </div>
                <p className='mx-auto w-fit mt-5'>© 2023 IUB Team Attendant</p>

            </footer>
        </>
    );
};

export default Home;