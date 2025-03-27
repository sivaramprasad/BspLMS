'use client';
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
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <BannerC />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
           My Schedule
          </h4>
        
        </div>

        {/* NFTs trending card */}
      

        {/* Recenlty Added setion */}
       
        {/* Recently Add NFTs */}
      
      </div>

      {/* right side section */}

      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2">
      {/* <ComplexTable tableData={tableDataComplex} /> */}
     
        <HistoryItem />

        <div className='mainh'>
          <div className='mainLL'>
          <div className='mainhL'>
              <IoMdTime />
          </div>
          <div className='mainhL'>
              <ul>
                <li>02 <br/><span>Hour</span></li>
                <li>:</li>
                <li>15 <br/><span>Minute</span></li>
                <li>:</li>
                <li>10 <br/><span>Second</span></li>
                </ul>
          </div>
          </div>
          <div className='mainhR'>
              <div className='mainhR-L'>
                <p>Your Next lesso with</p>
                <h4>Mr. Hamed</h4>
                <p>Your Next lesso with</p>
              </div>
              <div className='mainhR-R'>
                <div><TbBrandZoom /></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
