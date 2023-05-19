import { useRouter } from 'next/router';
import projectsData from '../../../public/data/projects.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Project() {
  const router = useRouter();
  // get project name from route
  const { name } = router.query;
  const project = projectsData[name];

  console.log(project);

  return (
    <div>
      {project && (
        <div>
          <div>
            <h1 className='text-3xl'>Project {project.title}</h1>
            <Swiper
            navigation
            pagination
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={30}
          >
            {project.imagePaths.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image} width={400} height={600} alt={project.title}></Image>
              </SwiperSlide>
            ))}
          </Swiper>
            
            <p>{project.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
