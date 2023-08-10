import React from 'react';
import jotirmoy from '../images/team/jotirmoy.jpeg'
import fayad from '../images/team/fayad.jpg'
import arno from '../images/team/arno.jpeg'
import tunisha from '../images/team/tunisha.JPG'
import ratul from '../images/team/ratul.JPG'
import mehjabeen from '../images/team/mehjabeen.jpg'
import Ferdous from '../images/team/Ferdous.png'
import nahid from '../images/team/nahid.jpg'
import parveg from '../images/team/parveg.jpeg'
import jaman from '../images/team/jaman.jpg'
import mahmudul from '../images/team/mahmudul.jpg'
import arabi from '../images/team/arabi.jpg'


import { AiOutlineGithub } from 'react-icons/ai';
import { LiaResearchgate } from 'react-icons/lia';
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';

const Team = () => {
    const advisors = [
        {
            name: "Mohammad Shidujaman, PhD",
            designaytion: <p > <span className='text-sm text-rose-500'>Assistant Professor </span> <br /> Department of Computer Science & Engineering</p>,
            profile: jaman,
            bio: <p>
                Dr. Mohammad Shidujaman currently working as an Assistant Professor in the Department of Computer Science and Engineering (CSE) School of Engineering, Technology and Science (SETS), Independent University, Bangladesh (IUB), Dhaka, Bangladesh. His research interests include Creativity and Innovation, Robotics and AI for Society, Human-Machine Interaction, AI Ethics and Policy, Social Robotics, Design Research, Cognitive Psychology, Cross-Cultural Design, User-Centered Design/Human-Centric Computing and Behavioral Analytics, Assistive Technology in Education, Healthcare and Entertainment, New Interaction Paradigm, Anthropomorphism, Wireless Power Transmission, Traveling Salesman Problem etc.
                <br />
                As a roboticist, He has no dought that Human-Robot Interaction going to transform the whole technological world very soon, His present research focuses on AI-Driven emotion-based Human-Machine Interaction (HMI) in a complex scenario. Devices with autonomous mobility (robots) can be used for various interesting applications in-home or office environments. His model based on human-robot interaction with emotional attachment is to carry out the novel artistic relation with such a new technology. The end goal is how we can create and develop HRI technologies in a more systematic and impactful way, such that the developed technologies will have an immediate impact and practical applications to solve daily imperative-demanding social problems.
                <br />

                He is actively serving IEEE Region 10 Humanitarian Technology Activities (IEEE R10 HTA) and IEEE Robotics and Automation Society Technical Committee on Cognitive Robotics (IEEE RAS TC CR) as a committee member. He is also serving various robotics and design-related journals and conferences as an editorial board member, organizing committee member, workshop organizer, and reviewer.
                <br />

                Besides academia, he has also experience working with the industry like Autonomous Vehicle Company iDriverplas as an R&D Engineer which specializes in technological innovation and product development in the field of intelligent vehicles, and with Discovery Communications ltd. as an IT Manager.
                <br />

                Dr. Jaman is a member of IEEE, ACM, IEB, CIEHF.
            </p>,
            contact: {
                phone: "",
                email: "shidujaman@iub.edu.bd",
                linkedin: "https://www.linkedin.com/in/mohammad-shidujaman-phd-104a2848/",
                website: "",
                github: "",
                researchGate: "https://www.researchgate.net/profile/Mohammad-Shidujaman"
            }

        },
        {
            name: "Abul Al Arabi",
            designaytion: <p > <span className='text-sm text-rose-500'>HCI and Robotics enthusiast</span> <br />College Station, Texas, United States</p>,
            profile: arabi,
            bio: <p>Hi, this is Abul Al Arabi. As a substance, I am a Human. Currently, I am a Ph.D. student at HCIED Lab, Texas A&M University, Department of CSE. My research interest is in the area of Human-Computer Interaction, Robotics, and ML. I completed my undergrad in EEE from Bangladesh University of Engineering and Technology (BUET). Previously, I was a research associate and adjunct faculty for robotics at Independent University Bangladesh, and lecturer at Northern University Bangladesh. Also, served as consultant and R&D engineer in different companies.
            </p>,
            contact: {
                phone: "",
                email: "abulalarabi@tamu.edu",
                linkedin: "https://www.linkedin.com/in/abul-al-arabi/",
                website: "http://abulalarabi.com/",
                github: "https://github.com/abulalarabi/",
                researchGate: "https://www.researchgate.net/profile/Abul-Al-Arabi"
            }

        }
    ]


    const attendants = [
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
                github: "https://github.com/suadfayed",
                researchGate: ""
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
                github: "https://github.com/samiunarno",
                researchGate: ""
            }

        },
        {
            name: "Mahmudul Hasan",
            mainrole: "Software Team",
            role: "Software Team, Mechanical Team, Electrical Team",
            profile: mahmudul,
            education: "BSc. Computer Science & Engineering at Independent Univesity,  Bangladesh.",
            bio: <p>I am a dedicated MERN stack developer and robotics enthusiast on an exciting journey of learning and innovation. Currently pursuing a BSc. in Computer Science and Engineering at Independent University, Bangladesh, I am adept in harnessing the power of JavaScript, Java, Python, HTML, CSS, Arduino, and C++.<br /> <br />
                With a keen interest in robotics, I am constantly immersed in captivating projects that fuse technology and creativity. My love for building both virtual and physical worlds drives my commitment to mastering web development and robotics. As I evolve, I look forward to bringing these passions to life and contributing to the ever-evolving realm of technology.
                <br />
                <br />

                Thank you for visiting, and I invite you to explore the convergence of my web development and robotics endeavors.</p>,
            experience: "Sucessfully done 8 MERN stake website and workded on several  Robotics Projects like RC, Soccer bot, Line follower Robot, Maze solver etc. ",
            skills:
                <span className='flex justify-around'>
                    <ul className='ml-3'>
                        <li >1. MERN</li>
                        <li >2. Illustrator </li>
                        <li >3. Communication</li>
                        <li >4. Auto Desk (Fussion 360)</li>
                    </ul>
                    <ul className='ml-3'>
                        <li >5. Arduino</li>
                        <li >6. PCB Design</li>
                        <li >7. Basic Electronics</li>
                    </ul>
                </span>,
            contribution: ``,
            contact: {
                phone: "+8801571382855",
                email: "work.mahmudulhasan@gmail.com",
                linkedin: "https://www.linkedin.com/in/mahmudul-hasan-030a31228/",
                website: "https://portfolio-32df2.web.app/",
                github: "https://github.com/wanna-be-pro",
                researchGate: "https://www.researchgate.net/profile/Mahmudul-Hasan-133"
            }

        },
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
                github: "https://github.com/Jotimoy",
                researchGate: ""
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

                email: "tunisha.bristy@gmail.com",
                linkedin: "https://www.linkedin.com/in/tunisha-yanoor-bristy-246630230/",
                website: "https://app.netlify.com/teams/tunisha-bristy/overview",
                github: "https://github.com/Tunisha-Bristy ",
                researchGate: ""
            }

        },
        {
            name: "Mohammad Arshad Hossain Ratul",
            mainrole: "Mechanical Team",
            role: "Mechanical Team, Science Team",
            profile: ratul,

            education: "A-level form Maple Leaf International School and O-level from Academia School",
            bio: `I am a robot enthusiast who likes to make and play with robots. I have expertise on making robots like autonomous maze solver, soccer bot, RC racing bots and robotic arm, my previous experiences taught me to innovate ideas and improve the performance of the robot . I am also a professional teacher of physics and biology which gives me more knowledge of how mechanical parts will move and the how the science tasks are done. `,
            experience: "Worked on many hardware projects like autonomous maze solver, soccer bot, rc bot and robotic arm.",
            skills: "Critical thinking, Handling mechanical instruments and research on any part of the rover.",
            contribution: `I am helping in mechanical and science team's mechanical part to build the rover and work properly.`,
            contact: {
                phone: "01841501748",
                email: "ratularshad@gmail.com",
                linkedin: "https://www.linkedin.com/in/mohammad-arshad-hossain-ratul-727b311aa/",
                website: "https://mycvratul.netlify.app",
                github: "https://github.com/ArshadRatul",
                researchGate: ""
            }

        },
        {
            name: "Mehejabine Islam Momo",
            mainrole: "Science Team",
            role: "Science Team",
            profile: mehjabeen,

            bio: `An undergrad student majoring in biochemistry and biotechnology. Enthusiastic and passionate about research. Worked in content writing, publication coordinating, social media coordinating, and event management. Contributing to the part of research paper and publication writing for the Mars rover team. `,
            education: "BSc. in Biochemistry and Biotechnology at Independent University, Bangladesh",
            experience: "Have done thesis in isolating bacteriophages from water samples and characterizing them.",
            skills: "Content writing, Social media coordinating, event management.",
            contribution: `Researched and analyzed the tests done by the science teams in the previous year, researched and analyzed the tests that can be done for the science mission, and finalized the 4 main parts of the science mission test. `,
            contact: {
                phone: "01620776688",
                email: "momomehejabin05@gmail.com",
                linkedin: "https://www.linkedin.com/in/mehejabin-islam-67817821a/",
                website: "",
                github: "https://github.com/Mehejabine",
                researchGate: ""
            }

        },
        {
            name: "Shafkat Alam Ferdous",
            mainrole: "Science Team",
            role: "Science Team",
            profile: Ferdous,

            bio: `For having a biology background education, I can lend my expertise for finding the biological factors whether if there was or currently any signs of life in Mars by conducting a series of tests and providing logical answers by these tests.`,
            education: "Currently studying Biotechnology and Biochemistry in Independent University, Bangladesh.",
            experience: "Have done thesis in isolating bacteriophages from water samples and characterizing them.",
            skills: "Molecular Biology & Microbiological techniques, Bioinformatics tools.",
            contribution: `As the science team member, I will calibrate and analyze the data that will be detected by the rover if there is life or not within the soil samples and give proper explanation what was detected from the tests. `,
            contact: {
                phone: "01957527113",
                email: "shafkatalam1998@gmail.com",
                linkedin: "https://www.linkedin.com/in/shafkat-alam-731306247/",
                website: "",
                github: "https://github.com/ShafkatAF",
                researchGate: ""
            }

        },
        {
            name: "Mohammad Nahid Al Islam",
            mainrole: "Science Team",
            role: "Science Team",
            profile: nahid,

            bio: `As a senior Biochemistry and Biotechnology student at Independent University, Bangladesh, my passion for science and creativity drives my involvement with TEAM ATTENDANT, IUB, in the University Rover Challenge's Science Mission Task. With a strong grasp of experimental techniques and molecular biology, I am well-equipped to contribute effectively.

My roles as Content Moderator and Managing Editor within IUB's STEM community, along with my YouTube channel "Nahid bujhai," demonstrate my ability to simplify intricate scientific concepts. I possess adept research and documentation skills, essential for navigating research articles during mission construction. Proficient in life detection tests, geographical data analysis, and Science Mission User Interface design, I am committed to advancing exploration.

My presentation skills and collaborative nature further enhance the University Rover Challenge's prospects. I am poised to represent Independent University, Bangladesh, internationally, embodying a dedication to discovery and innovation.`,
            education: "Currently studying Biotechnology and Biochemistry in Independent University, Bangladesh.",
            experience: "As the founding director of the STEM community at Independent University, Bangladesh (IUB), I have contributed to establishing an independent nonprofit initiative that fosters a vibrant community of students passionate about science, technology, engineering, and mathematics (STEM). Our mission is to connect and develop like-minded individuals, providing them with a platform to explore their interests, collaborate on innovative projects, and engage in impactful initiatives. Through various workshops, seminars, and interactive sessions, we have nurtured a culture of curiosity and learning, inspiring the next generation of STEM enthusiasts.  In parallel with my dedication to the STEM community IUB, I have actively engaged in groundbreaking research for my senior project, focusing on the molecular detection and extraction of an anti-cancer protein from a pathogenic bacterial strain. This ambitious endeavor is being conducted in close collaboration with BRAC University, and the lab work takes place at the state-of-the-art Life Sciences laboratory at Independent University, Bangladesh. This research not only showcases my commitment to advancing scientific knowledge but also demonstrates my ability to thrive in multidisciplinary collaborations, where innovative ideas and expertise converge to address critical challenges in the field of biochemistry and biotechnology.",
            skills: "Microsoft Office Suite, Content Creation, Teaching, Literature Review, Laboratory Skills for Life Detection tests and assays, Teamwork and Collaboration",
            contribution: `"Science Team
- Set up Life detection tests and assays
- Capture and analyze geographic information
- Design Science mission feedback user interface
- Prepare Presentation of Science mission
- Document Scientific work and aid in literature work"`,
            contact: {
                phone: "+8801770322788",
                email: "mohammadnahid247gmail.com",
                linkedin: "https://www.linkedin.com/in/mohammad-nahid-al-islam-344829268",
                website: "https://www.stemiub.online/team/mohammad-nahid-al-islam",
                github: "https://github.com/247nahid",
                researchGate: ""
            }

        },
        {
            name: "Md.Parvez sultan ",
            mainrole: "Electrical Team",
            role: "Electrical Team",
            profile: parveg,

            bio: <p> As an electrical engineering student, I have a strong foundation in various aspects of electronics and robotics. I have also gained expertise in arduino coding, soldering, PCB designing, mechanical chassis designing which have equipped me with a versatile skill set essential for contributing to the Mars rover mission.

                Expertise:

                <ul className='ml-3'>
                    <li>1. Arduino Coding: I am proficient in writing and debugging Arduino code, enabling me to program the rover's onboard systems, sensors, and actuators. My coding skills extend to efficiently controlling the rover's movements, data collection, and autonomous decision-making algorithms.</li>
                    <li>2. Soldering: With a keen eye for detail and precision, I am adept at soldering delicate electronic components. This skill is crucial for assembling and maintaining the rover's electrical systems and ensuring their reliability in the harsh conditions of Mars.</li>
                    <li>3. PCB Designing: I possess a solid understanding of PCB design principles, which allows me to create custom circuit boards tailored to the mission's specific requirements. My designs focus on compactness, efficiency, and durability to withstand the challenges of space exploration.</li>
                    <li>4. Mechanical Work: In addition to my electrical expertise, I have hands-on experience in mechanical tasks, including designing and building mechanical components. This knowledge comes in handy during rover assembly, testing, and any repairs or modifications needed during the mission.</li>
                    Contributions to the Mars Rover Mission:
                    <li>1. Rover System Integration: As a key member of the team, I played a vital role in integrating various systems of the Mars rover. I ensured seamless communication and collaboration between the electrical, mechanical, and software components, resulting in a fully functional and cohesive rover.</li>
                    <li>2. Autonomous Navigation: Leveraging my Arduino coding skills, I contributed to the development of autonomous navigation algorithms. These algorithms allowed the rover to navigate the Martian terrain independently while avoiding obstacles and optimizing its path to achieve mission objectives.</li>
                    <li>3. Custom PCB Development: I designed and fabricated specialized PCBs to meet the unique requirements of the mission. These custom boards enhanced the rover's efficiency, reduced power consumption, and improved its data processing capabilities.</li>
                    <li>4. Field Testing and Troubleshooting: Throughout the mission's development and testing phases, I actively participated in field trials to validate the rover's performance. I used my soldering and mechanical skills to address any issues or malfunctions promptly, ensuring the rover's readiness for the actual Mars mission.</li>
                    <li>5. Mission Success: As a dedicated member of the team, my passion for robotics and electrical engineering was evident in every aspect of the Mars rover mission. Together with the team, I celebrated the successful deployment of the rover on Mars, knowing that my contributions were instrumental in advancing human knowledge and exploration beyond Earth.</li>
                </ul>


                Overall, my expertise in Arduino coding, soldering, PCB designing, and mechanical work made me an invaluable asset to the Mars rover mission, and I eagerly look forward to more opportunities to contribute to groundbreaking projects in the future.</p>
            ,
            education: "major : Electrical and Electronic Engineering  at Independent University, Bangladesh",
            experience: "my  relevant professional experience 1.participate in 40plus universities Robotics competition 2. successfully completed robotics and automation course 1st 1nd 2nd stage ( Bangladesh Robo camp) 3. vice-chair of robotics and automation society IEEE IUB SBC ( current) 4. treasurer of robotics and automation society IEEE IUB SBC( 2022) 5. research and development director ACM IUB (CURRENT) 6. making various kind of project( Rc car, soccer bot, pick and place robot, Iot base project ,Lfr etc)",
            skills: "Skill  1.	arduino coding 2.	basic Python and C plus plus 3.	PCB designing 4.	basic of 3D modelling 5.	proper knowledge of electronics component 6.	any kind of electrical circuit making 7.	power and motor controlling 8.	simulation 9.	basic of autocad 10.	power drives and power control ",
            contribution: `"As an electrical engineering student, I have a strong foundation in various aspects of electronics and robotics. I have also gained expertise in arduino coding, soldering, PCB designing, mechanical chassis designing which have equipped me with a versatile skill set essential for contributing to the Mars rover mission.
Rover System Integration: As a key member of the team, I played a vital role in integrating various systems of the Mars rover. I ensured seamless communication and collaboration between the electrical, mechanical, and software components, resulting in a fully functional and cohesive rover.
Autonomous Navigation: Leveraging my Arduino coding skills, I contributed to the development of autonomous navigation algorithms. These algorithms allowed the rover to navigate the Martian terrain independently while avoiding obstacles and optimizing its path to achieve mission objectives."`,
            contact: {
                phone: "01842723564",
                email: "parvezdipu1509@gmail.com",
                linkedin: "https://www.linkedin.com/in/parvez-sultan-245143229",
                website: "",
                github: "https://github.com/parvezsultandipu",
                researchGate: ""
            }

        },

    ]
    return (
        <>
            <section className='px-5 flex justify-evenly  gap-5 flex-wrap py-5'>
                {/* Advisors  */}
                <h1 className="text-xl font-bold text-center mt-10">Advisors</h1>

                {
                    advisors.map((advisor, i) => <>

                        <div tabIndex={1} className="collapse h-fit relative bg-red-50 lg:w-[550px] md:w-[45%] sm:w-full">
                            <div className="collapse-title lg:items-start font-medium flex lg:flex-row md:flex-col sm:flex-col md:items-center sm:items-center justify-center">
                                <div className="avatar">
                                    <div className="w-40 rounded ">
                                        <img src={advisor.profile} className="w-full mx-auto" alt="jotirmoy" />
                                    </div>
                                </div>
                                <div className="ml-5 mt-2 text-center">
                                    <h1 className='uppercase text-xl '>{advisor.name}</h1>
                                    <p >{advisor.designaytion}</p>
                                    <p className=' text-sm'>{advisor.education}</p>
                                    <div className="flex justify-evenly w-52 mt-5 text-xl mx-auto">
                                        <a href={`mailto:${advisor.contact.email}`}><BiLogoGmail /></a>
                                        <a href={`${advisor.contact.github}`}><AiOutlineGithub /></a>
                                        <a href={`${advisor.contact.linkedin}`}><BiLogoLinkedin /></a>
                                        <a href={`${advisor.contact.researchGate}`}><LiaResearchgate /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse-content border-t-2 pt-2">

                                <p className="text-rose-500">Biography:  <span className='text-black'>{advisor.bio}</span></p> <br />
                                {/* <p className="text-rose-500">Contributions to the Mission:  <span className='text-black'>{attendant.contribution}</span></p> <br /> */}


                            </div>
                        </div>

                    </>)
                }
            </section>
            <h1 className="text-xl font-bold text-center mt-10">Team Members</h1>
            <section className='px-5 flex justify-evenly  gap-5 flex-wrap py-5'>

                {
                    attendants.map((attendant, i) => <>
                        <div tabIndex={1} className="collapse h-fit relative bg-red-50 lg:w-[550px] md:w-[45%] sm:w-full">
                            <div className="collapse-title lg:items-start font-medium flex lg:flex-row md:flex-col sm:flex-col md:items-center sm:items-center justify-center">
                                <div className="avatar">
                                    <div className="w-40  rounded ">
                                        <img src={attendant.profile} className="w-full mx-auto" alt="jotirmoy" />
                                    </div>
                                </div>
                                <div className="ml-5 mt-2 text-center">
                                    <h1 className='uppercase text-xl '>{attendant.name}</h1>
                                    <p className='text-sm text-rose-500'>{attendant.mainrole}</p>
                                    <p className=' text-sm'>{attendant.education}</p>
                                    <div className="flex justify-evenly w-52 mt-5 text-xl mx-auto">
                                        <a href={`mailto:${attendant.contact.email}`}><BiLogoGmail /></a>
                                        <a href={`${attendant.contact.github}`}><AiOutlineGithub /></a>
                                        <a href={`${attendant.contact.linkedin}`}><BiLogoLinkedin /></a>
                                        <a href={`${attendant.contact.researchGate}`}><LiaResearchgate /></a>

                                    </div>
                                </div>
                            </div>
                            <div className="collapse-content border-t-2 pt-2">

                                <p className="text-rose-500">Position:  <span className='text-black'>{attendant.role}</span></p> <br />
                                <p className="text-rose-500">Experience:  <span className='text-black'>{attendant.experience}</span></p> <br />
                                <p className="text-rose-500">Skills:  <span className='text-black'>{attendant.skills}</span></p> <br />
                                <p className="text-rose-500">Biography:  <span className='text-black'>{attendant.bio}</span></p> <br />
                                {/* <p className="text-rose-500">Contributions to the Mission:  <span className='text-black'>{attendant.contribution}</span></p> <br /> */}


                            </div>
                        </div>
                    </>)
                }
            </section>



        </>
    );
};

export default Team;