'use client';
import Banner from 'components/admin/nft-marketplace/Banner';
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
import NftCard from 'components/card/NftCard';

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
       

       

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div style={{display: "flex", flexDirection: "column"}} className="">
          <NftCard
            title="Bachelor's in Computer Science & Game Development"            
            image={NFt11}
          />
         <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-6">
        <Widget
          icon={<MdOutlineDateRange  className="h-7 w-7" />}
          title={'Date'}
          subtitle={'25-03-2025'}
        />
         <Widget
          icon={<MdOutlineAccessTime  className="h-7 w-7" />}
          title={'Time'}
          subtitle={'10:05 To 11:05 AM'}
        />
        </div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-6">
         <Widget
          icon={<TbBrandZoom className="h-7 w-7" />}
          title={'Link'}
          subtitle={'https://zoom.us/j/91204891167'}
        />
        </div>
        </div>
        <div style={{display: "flex", flexDirection: "column"}} className="">
          <NftCard
            title="Bachelor's in Game Art & Design"            
            image={NFt12}
          />
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-6">
        <Widget
          icon={<MdOutlineDateRange className="h-7 w-7" />}
          title={'Date'}
          subtitle={'26-03-2025'}
        />
         <Widget
          icon={<MdOutlineAccessTime  className="h-7 w-7" />}
          title={'Time'}
          subtitle={'10:00 To 11:00 AM'}
        /> </div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-6">
         <Widget
          icon={<TbBrandZoom className="h-7 w-7" />}
          title={'Link'}
          subtitle={'https://zoom.us/j/91204891167'}
        />
        </div>
         </div>
         
        </div>

        {/* Recenlty Added setion */}
       
        {/* Recently Add NFTs */}
      
      </div>

     
    </div>
  );
};

export default Marketplace;
