import React, { useEffect, useState } from 'react';
import Nft2 from '/public/img/nfts/Nft2.png';
import Nft1 from '/public/img/nfts/Nft1.png';
import Nft3 from '/public/img/nfts/Nft3.png';
import Nft4 from '/public/img/nfts/Nft4.png';
import Nft5 from '/public/img/nfts/Nft5.png';
import Nft6 from '/public/img/nfts/Nft6.png';
import Image from 'next/image';
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md';
import { TbBrandZoom } from "react-icons/tb";
import { FcProcess } from "react-icons/fc";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";

import { FaEthereum } from 'react-icons/fa';
import Card from 'components/card';

const HistoryCard = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the PHP API
    fetch('https://www.backstagepass.co.in/reactapi/class_history.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setHistoryData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to get the status icon based on process
  const getStatusIcon = (process) => {
    switch (process) {
      case 'Completed':
        return <MdCheckCircle className="text-green-500" />;
      case 'Upcoming':
        return <FaRegPlayCircle className="text-yellow-500" />;
      case 'Ongoing Call':
        return <FaRegPauseCircle className="text-blue-500" />;
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card extra="mt-3 !z-5 overflow-hidden">
      {historyData.map((data, index) => (
        <div
          key={index}
          className="flex h-full w-full items-center justify-between bg-white px-3 py-5 hover:shadow-2xl dark:bg-navy-800 dark:hover:bg-navy-700"
        >
          {/* Left Section: Image and Title */}
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-xl overflow-hidden">
              <Image
                width={64}
                height={64}
                className="h-full w-full object-cover"
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-base font-bold text-navy-700 dark:text-white">{data.title}</h5>
              <p className="mt-1 text-sm font-normal text-gray-600">{data.time}</p>
            </div>
          </div>

          {/* Right Section: Status Icon and Process Text */}
          <div className="flex items-center">
            <div className="mr-2 text-xl">{getStatusIcon(data.process)}</div>
            <div className="ml-1 text-sm font-bold text-navy-700 dark:text-white">{data.process}</div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default HistoryCard;
