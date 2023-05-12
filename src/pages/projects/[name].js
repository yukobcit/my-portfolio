import { useRouter } from 'next/router';
import projectsData from '../../../public/data/projects.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

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
          <Swiper
            navigation
            pagination
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={30}
          >
            {project.imagePaths.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div>
            <h1>Project {project.title}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
