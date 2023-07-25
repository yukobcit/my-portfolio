/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log("Email sent successfully.");
        setName("");
        setEmail("");
        setMessage("");
        alert("Thank you! Email sent successfully.");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Failed to send email.", error);
    }
  };

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
            <div className="custom-font lg:text-3xl text-center mb-5">
              About Me
            </div>
            <div className="flex flex-wrap justify-center  md:justify-start text-center">
              <p className="bio  w-7/12 mx-4 mb-4 text-left md:mx-auto mt-10">
                I recently graduated from BCIT's Software Systems Developer
                program and I am a{" "}
                <span className="text-orange-400">
                  full-stack web developer
                </span>
                . In 2017, I moved from Japan to Canada. During my time in
                Japan, I was involved in creating databases using FileMaker.
                <br></br>
                In school, I focused mainly on{" "}
                <span className="text-green-600">web development</span>, but I
                also had the opportunity to work on projects in collaboration
                with a company where I utilized React Native for mobile
                development. I am also interested in mobile development and
                enjoy exploring that area.
                <br></br>I have a strong desire to work on a variety of projects
                within a short period of time, as I believe it helps in
                enhancing my skills and knowledge. Currently, I am independently
                learning Unity for fun.{" "}
              </p>
              <div className=" w-4/12 flex flex-col items-center mt-4 mb-4">
                <Image
                  src="/images/yuko_ishida_450.jpg"
                  width={180}
                  height={180}
                  alt="yuko-img"
                />
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
                <p>
                  This is for pick up restaurant to handle their full-customized
                  order
                </p>
              </div>
              <div className="project-card w-72 mb-4 mx-auto">
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
                <p>
                  This service is for managing events. In this case we focused
                  for golf events.
                </p>
              </div>
              <div className="project-card w-72 mb-4 mx-auto">
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
                <p>
                  This is for the gamers to record their journey of their games!
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="contact-inputs mt-10 mx-3">
              <div className="contact-title custom-font lg:text-3xl text-center mb-10">
                Contact
              </div>
              <form className="" onSubmit={handleSubmit}>
                <div className="md:flex items-center justify-between">
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="flex flex-col mb-5 md:mr-5 w-full md:w-1/2">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="h-40"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex justify-center mt-5 ">
                <button
                
                  type="submit"
                  className="mb-5 w-48 shadow-lg bg-emerald-500 shadow-emerald-500/50 text-white rounded px-2 py-1"
                >
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
