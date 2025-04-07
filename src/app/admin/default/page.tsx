'use client';
import React, { useEffect, useState } from 'react';
import Banner from 'components/admin/nft-marketplace/Banner';
import axios from 'axios';  
import NFt11 from '/public/img/nfts/csd.webp';
import NFt12 from '/public/img/nfts/gad.webp';
import NFt13 from '/public/img/nfts/arvr.webp';
import NFt14 from '/public/img/nfts/msc.webp';
import NFt15 from '/public/img/nfts/adgd.webp';
import NFt16 from '/public/img/nfts/3dart.webp';
import NFt17 from '/public/img/nfts/gdu.webp';
import Widget from 'components/widget/Widget';
import { MdBarChart, MdOutlineDateRange,MdOutlineAccessTime  } from 'react-icons/md';
import { TbBrandZoom } from "react-icons/tb";


import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';
import HistoryItem from 'components/admin/nft-marketplace/HistoryItem';
import TopCreatorTable from 'components/admin/nft-marketplace/TableTopCreators';
import EnrolledCard from 'components/card/EnrolledCard';

const Marketplace = () => {
  const [courses, setCourses] = useState([]); // state to hold courses
  const [loading, setLoading] = useState(true); // loading state for API request
  const [error, setError] = useState(null); // error state in case the API call fails

  useEffect(() => {
    // Fetching courses from API
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://www.backstagepass.co.in/reactapi/enrolled_courses_api.php'); // replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json(); // parse the JSON response
        //console.log(data);
        setCourses(data); // update state with fetched courses
        setLoading(false); // stop loading when data is fetched
      } catch (error) {
        setError(error.message); // handle any errors
        setLoading(false);
      }
    };

    fetchCourses(); // call the fetch function
  }, []); // empty dependency array means it runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // show loading indicator while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // show error if the API call fails
  }


  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "column" }}>
              <EnrolledCard
                title={course.title}
                image={course.image}
                courseId={course.courseId}
                urlpath={course.urlpath}
                shortname={course.shortname}
              />
              <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-6">
                <Widget icon={<MdOutlineDateRange className="h-7 w-7" />} title="Date" subtitle={course.date} />
                <Widget icon={<MdOutlineAccessTime className="h-7 w-7" />} title="Time" subtitle={course.time} />
              </div>
              <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-6">
                <Widget icon={<TbBrandZoom className="h-7 w-7" />} title="Link" subtitle={course.zoomLink} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
