'use client';
import Banner from 'components/admin/nft-marketplace/Banner';
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
          <NftCard
            title="Bachelor's in Computer Science & Game Development"            
            image={NFt11}
          />
          <NftCard
            title="Bachelor's in Game Art & Design"            
            image={NFt12}
          />
          <NftCard
            title="Bachelor's in Augmented Reality & Virtual Reality"            
            image={NFt13}
          />
          <NftCard
            title="Master’s Game Technology"            
            image={NFt14}
          />
          <NftCard
            title="Advanced Diploma in Game Development"            
            image={NFt15}
          />
          <NftCard
            title="Advanced Diploma in 3D Game Art & Digital Sculpting"            
            image={NFt16}
          />
          <NftCard
            title="Diploma in Game Development with Unity"            
            image={NFt17}
          />
        </div>

        {/* Recenlty Added setion */}
       
        {/* Recently Add NFTs */}
      
      </div>

      {/* right side section */}

      {/* <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable tableData={tableDataTopCreators} />
        <div className="mb-5" />
        <HistoryItem />
      </div> */}
    </div>
  );
};

export default Marketplace;
