'use client';
import React, { useEffect, useState } from 'react';
import BannerC from 'components/admin/nft-marketplace/BannerC';
import NFt11 from '/public/img/nfts/csd.webp';
import NFt12 from '/public/img/nfts/gad.webp';
import NFt13 from '/public/img/nfts/arvr.webp';
import NFt14 from '/public/img/nfts/msc.webp';
import NFt15 from '/public/img/nfts/adgd.webp';
import NFt16 from '/public/img/nfts/3dart.webp';
import NFt17 from '/public/img/nfts/gdu.webp';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import { IoMdTime } from "react-icons/io";
import { TbBrandZoom } from "react-icons/tb";

import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';
import HistoryItem from 'components/admin/nft-marketplace/HistoryItem';
import TopCreatorTable from 'components/admin/nft-marketplace/TableTopCreators';
import NftCard from 'components/card/NftCard';

const Marketplace = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the unified API
    fetch('https://www.backstagepass.co.in/reactapi/class_schedule.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response to debug
        setData(data);  // The data now contains both schedule and history data
      })
      .catch((error) => {
        console.error("Error fetching schedule and history data: ", error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
console.log(data);
  // Destructure the data safely, with fallback values if the data is missing
  const { next_lesson = {}, banner = {}, history = [] } = data;
  const { time = "00:00:00", instructor = "Unknown", zoom = "#" } = next_lesson;
  const { title = "Default Title", subtitle = "Default Subtitle" } = banner;

  // Ensure time is a string and has the correct format before trying to split it
  const timeArray = time ? time.split(':') : ["00", "00", "00"];

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFT Banner */}
        <BannerC title={title} subtitle={subtitle} />

        {/* NFT Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            My Schedule
          </h4>
        </div>

        {/* Recently Added section */}
        {/* You can add other sections here */}
      </div>

      {/* Right side section */}
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        {/* Pass the history data to HistoryItem */}
        <HistoryItem historyData={history} />

        {/* <div className="mainh">
          <div className="mainLL">
            <div className="mainhL">
              <IoMdTime />
            </div>
            <div className="mainhL">
              <ul>
                <li>{timeArray[0]} <br /><span>Hour</span></li>
                <li>:</li>
                <li>{timeArray[1]} <br /><span>Minute</span></li>
                <li>:</li>
                <li>{timeArray[2]} <br /><span>Second</span></li>
              </ul>
            </div>
          </div>
          <div className="mainhR">
            <div className="mainhR-L">
              <p>Your Next lesson with</p>
              <h4>{instructor}</h4>
            </div>
            <div className="mainhR-R">
              <div>
        {zoom ? (
          <a href={zoom} target="_blank" rel="noopener noreferrer" className="zoom-link">
            <TbBrandZoom size={30} />
          </a>
        ) : (
          <p>No Zoom link available</p>
        )}
      </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Marketplace; 
