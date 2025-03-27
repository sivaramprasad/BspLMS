import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import { MdFileDownload } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
import { SlCamrecorder } from "react-icons/sl";


const Storage = () => {
  return (
    <Card extra={"w-full h-full p-4"}>
      
      <div className="mb-auto flex flex-col items-center justify-center">
        <div className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">
          <SlCamrecorder />
        </div>
        <p style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%"}} className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
          Recording One <MdFileDownload  />
        </p>
        
      </div>

      {/* Progress bar */}

      {/* <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">25.6 GB</p>
          <p className="text-sm font-medium text-gray-600">50 GB</p>
        </div>
        <div className="mt-2 flex h-3 w-full items-center rounded-full bg-lightPrimary dark:!bg-navy-700">
          <span className="h-full w-1/2 rounded-full bg-brand-500 dark:!bg-white" />
        </div>
      </div> */}
    </Card>
  );
};

export default Storage;
