/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="w-4/6">
          <h1 className="custom-font lg:text-5xl text-center mb-20">
            Welcome! I'm Yuko.
          </h1>
          <div className="about mb-20">
            <h3 className="intro"></h3>
            <div className="custom-font lg:text-3xl text-center mb-5">About Me</div>
            <div className="flex flex-wrap justify-center  md:justify-start text-center">
              <p className="bio  w-7/12 mx-4 mb-4 text-left md:mx-auto mt-10">
                I recently graduated from BCIT's Software Systems Developer program
                and I am a{" "}
                <span className="text-orange-400">full-stack web developer</span>. In
                2017, I moved from Japan to Canada. During my time in Japan, I was
                involved in creating databases using FileMaker.<br></br>
                In school, I focused mainly on{" "}
                <span className="text-green-600">web development</span>, but I also
                had the opportunity to work on projects in collaboration with a
                company where I utilized React Native for mobile development. I am
                also interested in mobile development and enjoy exploring that area.
                <br></br>I have a strong desire to work on a variety of projects
                within a short period of time, as I believe it helps in enhancing my
                skills and knowledge. Currently, I am independently learning Unity
                for fun.{" "}
              </p>
              <div className=" w-4/12 flex flex-col items-center mt-4 mb-4">
                <Image
                  src="/images/yuko_ishida_450.jpg"
                  width={180}
                  height={180}
                  alt="yuko-img" />
                <div className="flex mt-4">
                  <a href="https://github.com/yukobcit">
                    <FaGithub size={32} className="mr-2" />
                  </a>
                  <a href="https://www.linkedin.com/in/yuko-ishida-bcit/">
                    <FaLinkedin size={32} className="mr-2" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100007657662413">
                    <FaFacebook size={32} />
                  </a>

                </div>
              </div>
            </div>
          </div>
          <div className="skills mb-20">
            <div className="skills-title custom-font lg:text-3xl text-center mb-10">
              Skills
            </div>
            <div className="flex flex-wrap justify-around md:justify-start text-center">
              <div className="skill-card md:mx-auto mb-4">
                <Image
                  src="/images/skills-icons/html-logo.png"
                  width={250}
                  height={100}
                  alt="html-logo-img"
                ></Image>
              </div>
              <div className="skill-card md:mx-auto mb-4">
                <Image
                  src="/images/skills-icons/github-mark.png"
                  width={100}
                  height={100}
                  alt="github-img"
                ></Image>
                <p className="slill-name"></p>
              </div>
              <div className="skill-card md:mx-auto mb-4">
                <Image
                  src="/images/skills-icons/react.png"
                  width={100}
                  height={100}
                  alt="react-img"
                ></Image>
                <p className="slill-name"></p>
              </div>
              <div className="skill-card md:mx-auto mb-4">
                <Image
                  src="/images/skills-icons/c-sharp.png"
                  width={100}
                  height={100}
                  alt="c-sharp-img"
                ></Image>
                <p className="slill-name"></p>
              </div>
              <div className="skill-card md:mx-auto mb-4">
                <Image
                  src="/images/skills-icons/aws.png"
                  width={100}
                  height={100}
                  alt="aws-img"
                ></Image>
                <p className="slill-name"></p>
              </div>
            </div>
          </div>
          <div className="projects">
            <div className="projects-title custom-font lg:text-3xl text-center mb-10">
              Projects
            </div>
            <div className="flex flex-wrap justify-around md:justify-start text-center">
              <div className="project-card w-72 mb-4 mx-auto">
                <div className="flex justify-center">
                  <Link href="/projects/food-ordering-app">
                    <Image
                      src="/images/pickandgologo.png"
                      alt="pick-and-go-logo"
                      width={200}
                      height={200}
                    />
                  </Link>
                </div>
                <h3 className="mt-4">Pick and Go</h3>
                <p>This is for pick up restaurant to handle their full-customized order</p>
              </div>
              <div className="project-card w-72 mx-4 mb-4 mx-auto">
                <div className="flex justify-center">
                  <Link href="/projects/event-app">
                    <Image
                      src="/images/TEE-TIME.png"
                      alt="tee-time-logo"
                      width={200}
                      height={200}
                    />
                  </Link>
                </div>
                <h3 className="mt-4">TEE TIME</h3>
                <p>This service is for managing events. In this case we focused for golf events.</p>
              </div>
              <div className="project-card w-72 mx-4 mb-4 mx-auto">
                <div className="flex justify-center">
                  <Link href="/projects/game-journal-app">
                    <Image
                      src="/images/gamejourneylogo.png"
                      alt="game-journey-logo"
                      width={200}
                      height={200}
                    />
                  </Link>
                </div>
                <h3 className="mt-4">Game Journey</h3>
                <p>This is for the gamers to record their journey of their games!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
