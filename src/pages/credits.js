import { useRouter } from 'next/router';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Credit() {
  const router = useRouter();
  return (
    <div className="wrapper ">
      <Header />
      
      <div className="container flex flex-wrap">
        <div className='w-full'>  
          <h1 className='text-3xl custom-font lg:text-5xl text-center mb-20'>Credits</h1>
        </div>
      </div>
  
      <div className='description p-10 w-4/6 mx-auto'>
        <p className="text-center">Thanks to <a href="https://www.freepik.com/free-vector/vector-illustration-mountain-landscape_1215613.htm#query=illustrations&position=13&from_view=keyword&track=sph">Image by vectorpocket</a> on Freepik</p>
      </div>
  
      <Footer />
    </div>
  );
}
export default Credit;
