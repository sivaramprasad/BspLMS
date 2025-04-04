'use client';
import React, { useEffect, useState } from 'react';
import Banner from 'components/admin/nft-marketplace/Banner';
import axios from 'axios';  // Make sure to install axios (npm install axios)
import NFt11 from '/public/img/nfts/csd.webp';
import NFt12 from '/public/img/nfts/gad.webp';
import NFt13 from '/public/img/nfts/arvr.webp';
import NFt14 from '/public/img/nfts/msc.webp';
import NFt15 from '/public/img/nfts/adgd.webp';
import NFt16 from '/public/img/nfts/3dart.webp';
import NFt17 from '/public/img/nfts/gdu.webp';


import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';
import HistoryItem from 'components/admin/nft-marketplace/HistoryItem';
import TopCreatorTable from 'components/admin/nft-marketplace/TableTopCreators';
import NftCard from 'components/card/NftCard';



const Marketplace = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetching data from the PHP API
    axios.get('https://www.backstagepass.co.in/reactapi/featured_courses_api.php')
      .then((response) => {
        console.log(response);
        setCourses(response.data); // Set the fetched data to state
      })
      .catch((error) => {
        console.error("There was an error fetching the courses data!", error);
      });
  }, []); // Empty array to run this effect only once when the component mounts
 
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Featured Courses
          </h4>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {courses.map((course, index) => (
            <NftCard
              key={index}
              title={course.title}
              image={course.image}
              courseId={course.id}
              path={course.urlpath}
              shortname={course.shortname}
            />
          ))}
        </div>

        {/* Recently Added section */}
        {/* You can add more sections here if necessary */}
      </div>
    </div>
  );
};

export default Marketplace;
