import React from 'react';
import jotirmoy from '../images/team/jotirmoy.jpeg'
import fayad from '../images/team/fayad.jpg'
import arno from '../images/team/arno.jpeg'
import tunisha from '../images/team/tunisha.JPG'


import { AiOutlineGithub, AiFillPhone } from 'react-icons/ai';
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';

const Team = () => {
    const advisors = [
        {
            name: "robosanto",
            designaytion: "Professor",
            roel: "kichu ekta",
            profile: "profile photo",
            bio: `
            "As an electrical engineering student, I have a strong foundation in various aspects of electronics and robotics. I have also gained expertise in arduino coding, soldering, PCB designing, mechanical chassis designing which have equipped me with a versatile skill set essential for contributing to the Mars rover mission.

                Expertise:
                1. Arduino Coding: I am proficient in writing and debugging Arduino code, enabling me to program the rover's onboard systems, sensors, and actuators. My coding skills extend to efficiently controlling the rover's movements, data collection, and autonomous decision-making algorithms.

                2. Soldering: With a keen eye for detail and precision, I am adept at soldering delicate electronic components. This skill is crucial for assembling and maintaining the rover's electrical systems and ensuring their reliability in the harsh conditions of Mars.

                3. PCB Designing: I possess a solid understanding of PCB design principles, which allows me to create custom circuit boards tailored to the mission's specific requirements. My designs focus on compactness, efficiency, and durability to withstand the challenges of space exploration.

                4. Mechanical Work: In addition to my electrical expertise, I have hands-on experience in mechanical tasks, including designing and building mechanical components. This knowledge comes in handy during rover assembly, testing, and any repairs or modifications needed during the mission.

                Contributions to the Mars Rover Mission:
                1. Rover System Integration: As a key member of the team, I played a vital role in integrating various systems of the Mars rover. I ensured seamless communication and collaboration between the electrical, mechanical, and software components, resulting in a fully functional and cohesive rover.

                2. Autonomous Navigation: Leveraging my Arduino coding skills, I contributed to the development of autonomous navigation algorithms. These algorithms allowed the rover to navigate the Martian terrain independently while avoiding obstacles and optimizing its path to achieve mission objectives.

                3. Custom PCB Development: I designed and fabricated specialized PCBs to meet the unique requirements of the mission. These custom boards enhanced the rover's efficiency, reduced power consumption, and improved its data processing capabilities.

                4. Field Testing and Troubleshooting: Throughout the mission's development and testing phases, I actively participated in field trials to validate the rover's performance. I used my soldering and mechanical skills to address any issues or malfunctions promptly, ensuring the rover's readiness for the actual Mars mission.

                5. Mission Success: As a dedicated member of the team, my passion for robotics and electrical engineering was evident in every aspect of the Mars rover mission. Together with the team, I celebrated the successful deployment of the rover on Mars, knowing that my contributions were instrumental in advancing human knowledge and exploration beyond Earth.

                Overall, my expertise in Arduino coding, soldering, PCB designing, and mechanical work made me an invaluable asset to the Mars rover mission, and I eagerly look forward to more opportunities to contribute to groundbreaking projects in the future.
"`,
            contact: {
                phone: "01842723564",
                email: "parvezdipu1509@gmail.com",
                linkedin: "https://www.linkedin.com/in/parvez-sultan-245143229",
                website: "",
                github: "https://github.com/parvezsultandipu"
            }

        }
    ]
    const teamLeaders = [
        {
            name: "Md. Fayed Al Monir",
            mainrole: "Mechanical Team",
            role: "Mechanical Team",
            profile: fayad,
            education: "Bachelor of Science in Mechanical Engineering",
            bio: `This is Md. Fayed Al Monir, currently working as mechanical team lead and acting team leader of IUB Mars Rover Project. I have completed my undergraduate program in Mechanical Engineering from IUBAT. I have been working with several research projects at IUB such as quadruped robot project, CanSat project since 2022. I have expertise in Computer Aided Design, Finite Element Analysis, Computational Fluid Dynamics, and Mathematical Model Analysis. My ultimate goal is to prepare Mars Rover V3 and team members for URC 2024.`,
            experience: "I have been working with several research projects at IUB such as quadruped robot project, CanSat project since 2022. In these project I supervised the research, design and development of the mechanical sector ",
            skills: "Computer Aided Design, Finite Element Analysis, Computational Fluid Dynamics, and Mathematical Model Analysis.",
            contribution: " As a team leader, my ultimate goal is to prepare Mars Rover V3 and team members for URC 2024.",
            contact: {
                phone: "01725521123",
                email: "suadfayed28@gmail.com",
                linkedin: "https://www.linkedin.com/in/fayed-al-monir/",
                website: "",
                github: "https://github.com/suadfayed"
            }

        },
        {
            name: "Samiun Mahmud Arno",
            mainrole: "Electrical Team",
            role: "Software Team, Mechanical Team, Electrical Team",
            profile: arno,
            education: "BSc. Computer Science & Engineering",
            bio: `Meet Samiun Mahmud Arno, a passionate and dedicated individual in the field of Computer Science and Engineering. With a profound expertise in Robotics and IoT Automation, My journey in the world of technology has been nothing short of remarkable. A versatile researcher with a keen focus on intelligent machines, I delves into the realms of Image Processing, Machine Learning, and AI with unparalleled enthusiasm.`,
            experience: "Research On Robotic Hand with Human Interaction ,Humanoid Robot Human Interaction ,Brain Tumor Detection ,Advancement Of Mars Rover , Bangla Nameplate Detector ,Robotic Arm With Gesture Movement ,Yolo Algorithm ",
            skills: <ul className='ml-3'>
                <li >1.Arduino</li>
                <li >2.Iot</li>
                <li >3.Yolo Algorithm</li>
                <li >4.OpenCV</li>
                <li >5.Human Interaction Language</li>
                <li >6.Speach Detection</li>
                <li >7.Machine Learning</li>
                <li >8.Artificial Intellegents</li>
                <li >9.Rasberry Pi</li>
                <li >10.PCB Design</li>
                <li >11.Solidworks</li>
                <li >12.Embaded System</li>
                <li >13.Renessas</li>
                <li >14.Communication System `</li>
            </ul>,
            contribution: `
                "As the Electric Team Leader for the Mars rover mission:

                Spearheaded the design and implementation of the rover's electrical systems.
                Lead a team of skilled engineers in executing complex electrical projects.
                Developed innovative solutions for power management and efficient energy usage on the rover.
                Ensured seamless integration of electrical components, contributing to the rover's overall functionality.
                Played a pivotal role in troubleshooting and resolving electrical issues during testing and simulations.
                Contributed to mission success by delivering a reliable and robust electrical infrastructure for the rover's exploration on Mars.
                Orchestrated the development and deployment of advanced sensor systems, enabling the rover to navigate autonomously and make critical decisions during its exploration missions.
                Implemented fail-safe mechanisms and redundancy measures in the electrical systems, ensuring the rover's reliability and resilience in the harsh Martian environment.
                Collaborated closely with other team leaders to ensure seamless integration of the electrical systems with mechanical, software, and scientific components of the rover, achieving a cohesive and fully functional robotic platform.
                Conducted rigorous testing and validation of the electrical systems under extreme conditions, guaranteeing their performance and readiness for the challenging mission on Mars.
                Pioneered the use of innovative energy-saving techniques, extending the rover's operational lifetime and optimizing resource utilization for prolonged scientific research.
                Mentored and empowered team members, fostering a culture of innovation, excellence, and collaboration within the Electric Team.
                "`,
            contact: {
                phone: "01797444062",
                email: "attendantarno@gmail.com",
                linkedin: "https://ca.linkedin.com/in/samiun-mahmud-arno-5ba300189",
                website: "https://samiunarno.github.io/samiunarnopro/",
                github: "https://github.com/samiunarno"
            }

        }
    ]

    const attendants = [
        {
            name: "JOTIRMOY MOLLICK",
            mainrole: "Software Team",
            role: "Software Team, Mechanical Team, Electrical Team, Science Team",
            profile: jotirmoy,
            education: "BSc. in Computer Science, Independent University, Bangladesh",
            bio: `I'm highly skilled and dedicated member of the Mars rover mission's Software Team. With a passion for space exploration and a strong background in software engineering, I'm brings a unique set of skills and expertise to the team. His commitment to advancing human knowledge and understanding of the Red Planet has been invaluable to the success of the mission.`,
            experience: "Jotirmoy has accumulated several years of professional experience in the field of software engineering. Before joining the Mars rover team, he worked on various high-profile projects, including developing Remort Control car for space, Electronic Muscle Stimulator and exploration. His background includes extensive work on robotics, AI, and real-time systems, making him a key asset in designing and implementing the rover's software architecture.",
            skills: "Software development in C++ and Python, Robotics and autonomous systems Real-time system, design and implementation.",
            contribution: `
                "Jotirmoy's contributions to the Mars rover mission have been outstanding. He played a crucial role in designing and optimizing the rover's software algorithms, enabling it to navigate the challenging Martian terrain with remarkable precision. His expertise in AI and machine learning facilitated the rover's ability to adapt to unexpected situations, making it more resilient and efficient in its exploration tasks.

Furthermore, Jotirmoy's collaborative approach and effective communication skills have greatly enhanced the coordination between the different teams, resulting in a seamless integration of software and hardware components. His dedication to ensuring the rover's successful functioning, even under the most demanding conditions, has been highly commendable.

As a team player and a problem solver, Jotirmoy continues to contribute significantly to the Mars rover mission, bringing humanity one step closer to unlocking the mysteries of our neighboring planet.
"`,
            contact: {
                phone: "01749804854",
                email: "jotirmoymollick@gmail.com",
                linkedin: "https://www.linkedin.com/in/jotirmoy-mollick-b67865240",
                website: "",
                github: "https://github.com/Jotimoy"
            }

        },
        {
            name: "Tunisha Yanoor Bristy",
            mainrole: "Mechanical Team",
            role: "Mechanical Team, Science Team",
            profile: tunisha,

            education: "completed  O level and A level in science background. currently studying CSE at IUB.",
            bio: `I am from CSE department and I have been helping and doing work on mechanical and science team. I was present at all the workshops and I have helped the mechanical team to dismantle and re-build version 2. I will completely help with my skills to make version 3 better and innovative.`,
            experience: "I have worked on both hardware and software projects such as Soft robotic hand gripper, blind stick, autonomous maze solver, soccer bot. I have made mobile apps and websites using django, flutter, php and many more languages.",
            skills: "I am a team player, self motivated, effective communicator. I know many programming languages and I have build many websites and mobile apps and hardware projects.",
            contribution: `I am helping in mechanical and science team's mechanical part to build the rover and work properly.`,
            contact: {
                phone: "01738805546",
                email: "tunisha.bristy@gmail.com",
                linkedin: "https://www.linkedin.com/in/tunisha-yanoor-bristy-246630230/",
                website: "https://app.netlify.com/teams/tunisha-bristy/overview",
                github: "https://github.com/Tunisha-Bristy "
            }

        },
        {
            name: "Tunisha Yanoor Bristy",
            mainrole: "Mechanical Team",
            role: "Mechanical Team, Science Team",
            profile: tunisha,

            education: "completed  O level and A level in science background. currently studying CSE at IUB.",
            bio: `I am from CSE department and I have been helping and doing work on mechanical and science team. I was present at all the workshops and I have helped the mechanical team to dismantle and re-build version 2. I will completely help with my skills to make version 3 better and innovative.`,
            experience: "I have worked on both hardware and software projects such as Soft robotic hand gripper, blind stick, autonomous maze solver, soccer bot. I have made mobile apps and websites using django, flutter, php and many more languages.",
            skills: "I am a team player, self motivated, effective communicator. I know many programming languages and I have build many websites and mobile apps and hardware projects.",
            contribution: `I am helping in mechanical and science team's mechanical part to build the rover and work properly.`,
            contact: {
                phone: "01738805546",
                email: "tunisha.bristy@gmail.com",
                linkedin: "https://www.linkedin.com/in/tunisha-yanoor-bristy-246630230/",
                website: "https://app.netlify.com/teams/tunisha-bristy/overview",
                github: "https://github.com/Tunisha-Bristy "
            }

        },
    ]
    return (
        <>


            {/* team Leaders */}
            <h1 className="text-xl font-bold text-center mt-10">Team Leaders</h1>
            <section className='px-5 flex justify-evenly  gap-5 flex-wrap py-5'>
                {
                    teamLeaders.map((leader, i) => <>
                        <div key={i} tabIndex={1} className="collapse h-fit relative bg-red-50 lg:w-[40%] md:w-[45%] sm:w-full">
                            <div className="collapse-title lg:items-start font-medium flex lg:flex-row md:flex-col sm:flex-col md:items-center sm:items-center justify-center">
                                <div className="avatar">
                                    <div className="w-40 rounded ">
                                        <img src={leader.profile} className="w-full mx-auto" alt={leader.profile} />
                                    </div>
                                </div>
                                <div className="ml-5 mt-2 text-center">
                                    <h1 className='uppercase text-xl '>{leader.name}</h1>
                                    <p className='text-sm text-rose-500'>{leader.mainrole}</p>
                                    <p className=' text-sm'>{leader.education}</p>
                                    <div className="flex justify-evenly w-52 mt-5 text-xl mx-auto">
                                        <a href={`tel:${leader.contact.phone}`}><AiFillPhone /></a>
                                        <a href={`mailto:${leader.contact.email}`}><BiLogoGmail /></a>
                                        <a href={`${leader.contact.github}`}><AiOutlineGithub /></a>
                                        <a href={`${leader.contact.linkedin}`}><BiLogoLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-content border-t-2 pt-2">

                                <p className="text-rose-500">Role/Position:  <span className='text-black'>{leader.role}</span></p> <br />
                                <p className="text-rose-500">Experience:  <span className='text-black'>{leader.experience}</span></p> <br />
                                <p className="text-rose-500">Skills:  <span className='text-black'>{leader.skills}</span></p> <br />
                                <p className="text-rose-500">Biography:  <span className='text-black'>{leader.bio}</span></p> <br />
                                <p className="text-rose-500">Contributions to the Mission:  <span className='text-black'>{leader.contribution}</span></p> <br />


                            </div>
                        </div>
                    </>)
                }
            </section>

            <h1 className="text-xl font-bold text-center mt-10">Team Members</h1>
            <section className='px-5 flex justify-evenly  gap-5 flex-wrap py-5'>

                {
                    attendants.map((attendant, i) => <>
                        <div tabIndex={1} className="collapse h-fit relative bg-red-50 lg:w-[40%] md:w-[45%] sm:w-full">
                            <div className="collapse-title lg:items-start font-medium flex lg:flex-row md:flex-col sm:flex-col md:items-center sm:items-center justify-center">
                                <div className="avatar">
                                    <div className="w-40 rounded ">
                                        <img src={attendant.profile} className="w-full mx-auto" alt="jotirmoy" />
                                    </div>
                                </div>
                                <div className="ml-5 mt-2 text-center">
                                    <h1 className='uppercase text-xl '>{attendant.name}</h1>
                                    <p className='text-sm text-rose-500'>{attendant.mainrole}</p>
                                    <p className=' text-sm'>{attendant.education}</p>
                                    <div className="flex justify-evenly w-52 mt-5 text-xl mx-auto">
                                        <a href={`tel:${attendant.contact.phone}`}><AiFillPhone /></a>
                                        <a href={`mailto:${attendant.contact.email}`}><BiLogoGmail /></a>
                                        <a href={`${attendant.contact.github}`}><AiOutlineGithub /></a>
                                        <a href={`${attendant.contact.linkedin}`}><BiLogoLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-content border-t-2 pt-2">

                                <p className="text-rose-500">Role/Position:  <span className='text-black'>{attendant.role}</span></p> <br />
                                <p className="text-rose-500">Experience:  <span className='text-black'>{attendant.experience}</span></p> <br />
                                <p className="text-rose-500">Skills:  <span className='text-black'>{attendant.skills}</span></p> <br />
                                <p className="text-rose-500">Biography/Summary:  <span className='text-black'>{attendant.bio}</span></p> <br />
                                <p className="text-rose-500">Contributions to the Mission:  <span className='text-black'>{attendant.contribution}</span></p> <br />


                            </div>
                        </div>
                    </>)
                }
            </section>



        </>
    );
};

export default Team;