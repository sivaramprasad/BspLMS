import nft1 from '/public/img/nfts/NftBanner1.png';

const Banner1 = ({ title, subtitle }) => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1.src})` }}
    >
      <div className="w-full">
        <h4 style={{color: "#f1f1f1", fontWeight: "900"}} className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
         <b> Welcome to </b>
        </h4>
        <h4 style={{color: "#fff"}} className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
        {title}
        </h4>

       
      </div>
    </div>
  );
};

export default Banner1;
