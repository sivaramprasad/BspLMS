'use client';
import { useState } from "react";
import Banner from 'components/admin/recordings/Banner';
import General from 'components/admin/recordings/General';
import Notification from 'components/admin/recordings/Notification';
import Project from 'components/admin/recordings/Project';
import Storage from 'components/admin/recordings/Storage';
import Upload from 'components/admin/recordings/Upload';

const ProfileOverview = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="flex w-full flex-col gap-5 lg:gap-5">
      <div className="tabs-container">
      {/* Tabs Navigation */}
      <div className="tabs">
        <button
          className={activeTab === "tab1" ? "tab active" : "tab"}
          onClick={() => setActiveTab("tab1")}
        >
          Bachelor's in Computer Science & Game Development
        </button>
        <button
          className={activeTab === "tab2" ? "tab active" : "tab"}
          onClick={() => setActiveTab("tab2")}
        >
          Bachelor's in Game Art & Design
        </button>
       
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "tab1" && <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
       



       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       

       
     </div>
     
   }
        {activeTab === "tab2" && <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
       



       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       <div className="col-span-3 lg:!mb-0">
         <Storage />
       </div>
       
       

       
     </div>
     
   }
      </div>   
      </div>
    </div>
      
  );
};

export default ProfileOverview;
