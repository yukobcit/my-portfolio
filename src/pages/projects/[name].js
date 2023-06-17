import { useRouter } from 'next/router';
import projectsData from '../../../public/data/projects.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Image from "next/image";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {FaGithub } from "react-icons/fa";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Project() {
  const router = useRouter();
  // get project name from route
  const { name } = router.query;
  const project = projectsData[name];

  console.log(project);
  return (
    <div className="wrapper ">
      <Header />
      {project && (
        <div className="container flex flex-wrap ">
          <div className='w-full'>
            <h1 className='text-3xl custom-font lg:text-5xl text-center mb-20'>{project.title}</h1>
          </div>
        </div>
      )}
      <div className='flex flex-wrap w-5/6 mx-auto'>
        {project && (
          <div className='w-full md:w-1/2 mb-10'>
            <Swiper
              navigation
              pagination
              autoplay={{ delay: 4000 }}
              loop
              spaceBetween={30}
              className="w-full custom-swiper"
            >
              {project.imagePaths.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className='flex items-center justify-center'>
                    <Image src={image} width={400} height={400} alt={image} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {project && (
          <div className='w-full md:w-2/5 text-center mx-auto'>
            <div className='description p-10 '>
              <p>{project.summary}</p>
              <a href={project.githubUrl}>
                    <FaGithub size={32} className="mt-5" />
              </a>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
  
  
}


export default Project;
