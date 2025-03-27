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
  const HistoryData = [
    {
      image: Nft1,
      title: 'Class One',
      time: '10 - 11 AM',
      process: 'Completed'
    },
    {
      image: Nft2,
      title: 'Class Two',
      time: '10 - 11 AM',
      process: 'Ongoing Call'
    },
    {
      image: Nft3,
      title: 'Class Three',
      time: '10 - 11 AM',
      process: 'Upcoming'
    },
    {
      image: Nft4,
      title: 'Class Four',
      time: '10 - 11 AM',
      process: 'Upcoming'
    },
    {
      image: Nft5,
      title: 'Class Five',
      time: '10 - 11 AM',
      process: 'Upcoming'
    },
    {
      image: Nft6,
      title: 'Class Six',
      time: '10 - 11 AM',
      process: 'Upcoming'
    },
  ];

  return (
    <Card extra={'mt-3 !z-5 overflow-hidden'}>
      {/* HistoryCard Header */}
     

      {/* History CardData */}

      {HistoryData.map((data, index) => (
        <div
          key={index}
          className="flex h-full w-full items-center justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center">
              <Image
                width="2"
                height="20"
                className="h-full w-full rounded-xl"
                src={data.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-base font-bold text-navy-700 dark:text-white">
                {' '}
                {data.title}
              </h5>
              <p className="mt-1 text-sm font-normal text-gray-600">
                {' '}
                {data.time}{' '}
              </p>
            </div>
          </div>

          <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white" style={{fontSize: "19px"}}>
            <div>
            {data.process === "Completed" ? <MdCheckCircle className="me-1 text-green-500 dark:text-green-300" /> : null}
            {data.process === "Upcoming" ? <FaRegPlayCircle className="me-1 text-green-500 dark:text-green-300" /> : null }
            {data.process === "Ongoing Call" ? <FaRegPauseCircle  className="me-1 text-green-500 dark:text-green-300" /> : null }
              
              
            </div>
            <div style={{fontSize: "19px"}} className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
              <p> {} </p>
              {data.process}
            </div>
            
          </div>
        </div>
      ))}
    </Card>
  );
};

export default HistoryCard;
