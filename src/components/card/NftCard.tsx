import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import Card from 'components/card';
import Image from 'next/image';

interface NftCardProps {
  image: string;
  title: string;
  extra?: string;
  courseId: string;
  path: string;
  shortname: string;
}

const NftCard = ({ title, image, extra, courseId, path, shortname }: NftCardProps) => {
  const [heart, setHeart] = useState(true);
  const enrolled = localStorage.getItem('enrolledcourses');
  const enrolledCourses = enrolled ? enrolled.split(",").map(course => course.trim()) : [];

  const handleViewMore = () => {
    window.open(path, '_blank'); // Open the URL in a new tab/window
  };

  const isEnrolled = enrolledCourses.includes(shortname);

  return (
    <Card extra={`flex flex-col w-full h-full p-4 3xl:p-[18px] bg-white ${extra}`}>
      {/* Conditionally render the "Enrolled" ribbon */}
      {isEnrolled && (
        <div className="cover-ribbon">
          <div className="cover-ribbon-inside">Enrolled</div>
        </div>
      )}

      <div className="h-full w-full">
        <div className="relative w-full">
          {/* Image with Next.js Image Optimization */}
          <Image
            width={500}
            height={300}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt={title}
          />
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </p>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex items-center md:items-start lg:flex-row 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <button
            onClick={handleViewMore}
            style={{color: "#fff", marginRight: "10px"}}
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200"
          >
            View More
          </button>

          <button
            onClick={handleViewMore}
            style={{color: "#fff"}}
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200"
          >
            Pay Now
          </button>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
