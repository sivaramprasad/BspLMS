import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import Card from 'components/card';
import Image from 'next/image';
 

const NftCard = (props: {
  image: string;
  title: string;
  extra?: string;
  courseId: string; 
  path: string;
  shortname:string;
}) => {
  const { title, image, extra,courseId,path,shortname  } = props;
  const [heart, setHeart] = useState(true);
  const enrolled = localStorage.getItem('enrolledcourses');
  const enrolledCourses = enrolled.split(",").map(course => course.trim());
 
  const handleViewMore = () => {
   
   // window.location.replace(path);
    const urlpath = path; // The URL you want to open
    window.open(urlpath, '_blank'); // Opens in a new tab or window
    
  };
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
     {/* {title === "Bachelor's in Computer Science & Game Development" || title === "Bachelor's in Game Art & Design" ? <div className="cover-ribbon">
     <div className="cover-ribbon-inside">Enrolled</div> */}
{/* Conditionally render the "Enrolled" ribbon */}
{enrolledCourses.includes(shortname) && (
              <div className="cover-ribbon">
                <div className="cover-ribbon-inside">Enrolled</div>
              </div>
            )}

  {/* </div> : null}  */}
      <div className="h-full w-full">
        <div className="relative w-full">
        
          {/* <Image 
            width="2"
            height="20"
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          /> */}
          <Image
            width="2"
            height="20"
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt=""
          />
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {' '}
              {title}{' '}
            </p>
            
          </div>
           

         
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          
        <button
            onClick={handleViewMore} // Redirect to course detail page
            style={{ color: "#fff" }}
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200"
          >
            View More
          </button>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
