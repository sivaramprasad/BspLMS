'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Ensure axios is installed (npm install axios)
import Banner from 'components/admin/nft-marketplace/Banner';
import NftCard from 'components/card/NftCard';
import HistoryItem from 'components/admin/nft-marketplace/HistoryItem';
import TopCreatorTable from 'components/admin/nft-marketplace/TableTopCreators';

const Marketplace = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from the API
  useEffect(() => {
    axios.get('https://www.backstagepass.co.in/reactapi/featured_courses_api.php')
      .then((response) => {
        setCourses(response.data); // Store fetched courses data
        setLoading(false);  // Stop loading after data is fetched
      })
      .catch((err) => {
        setError('There was an error fetching the courses data!');
        setLoading(false);
      });
  }, []); // Runs only once after the first render

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      {/* NFT Banner */}
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <Banner />

        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
        <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
          Featured Courses
        </h4>
      </div>

      </div>

      {/* Section Title */}
      
      {/* Loading or Error Message */}
      {loading && (
        <div className="text-center text-gray-500">Loading courses...</div>
      )}

      {error && (
        <div className="text-center text-red-500">{error}</div>
      )}

      {/* NFTs trending card */}
      <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <NftCard
              key={index}
              title={course.title}
              image={course.image}  // You can replace this with an optimized image path if needed
              courseId={course.id}
              path={course.urlpath}
              shortname={course.shortname}
            />
          ))
        ) : (
          <div className="col-span-1 text-center text-gray-500">No courses available.</div>
        )}
      </div>

      {/* Additional sections can go here, e.g., History Item, Top Creators */}
      {/* <HistoryItem /> */}
      {/* <TopCreatorTable /> */}
    </div>
  );
};

export default Marketplace;
