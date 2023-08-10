import React from 'react';

import homeCover from '../images/homeCover.jpg'

const Home = () => {
    return (
        <>
            <section className={`h-[500px] bg-cover  bg-bottom	`}
                style={
                    { backgroundImage: `url("${homeCover}")` }}

            >
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className="lg:w-[300px] font-bold md:w-[250px] font-mono p-3 sm:w-full bg-[#b49a73de] min-h-[400px] rounded">
                        <h1 className='text-5xl   mt-3 mb-3'>Team Attendant</h1>
                        <p>We are a team from Independent University, Bangladesh (IUB), and we participate in International Space Related Robotics Competitions every year</p>
                        <a href="/team"><button className='btn bg-accent mt-5 border-0 normal-case text-white  mx-auto hover:bg-[#fca267]'>The Team</button></a>
                    </div>
                </div>

            </section>
            <section className="h-[500px] bg-[#9fb5b6]"></section>
            <section className="h-[500px] bg-[#a4b8a0]"></section>
            <section className="h-[500px] bg-[#92738a]"></section>
        </>
    );
};

export default Home;