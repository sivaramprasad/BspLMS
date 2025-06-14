import nft1 from '/public/img/nfts/NftBanner1.png';

 const handleAllcourses = () => {
   const pathpaynow='https://www.backstagepass.co.in/landingpage/short-course';
    window.open(pathpaynow, '_blank'); // Open the URL in a new tab/window
  };
  
const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1.src})` }}
    >
      <div className="w-full">
        <h4 style={{color: "#fff"}} className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Welcome to Dashboard!!
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          {/* #1 Gaming College in India */}
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button  onClick={handleAllcourses} style={{color: "#fff"}} className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
            All Courses
          </button>
          {/* <button style={{color: "#fff"}} className="text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2">
            Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner1;
