import React from "react";
import { Baby } from "lucide-react";

const AdminUser: React.FC = () => {
  return (
    <div>
      <div className="flex justify-start flex-col  max-w-fit bg-base-gray-dark rounded-br-lg">
        <div className="flex flex-row ml-10px text-base-gray-light">
          <Baby />
          <h3>Users</h3>
          <div className="ml-30px">
            <div className="h-12 flex justify-center mb-2 divide-white ">
              <button className="border-solid border-2 px-4 py-2 rounded-md  min-w-44  bg-base-gray  text-base-gray-dark hover:bg-base-green hover:text-base-gray-light ">
                Add users
              </button>
            </div>
            <div className="h-12 flex justify-center mb-2 divide-white ">
              <button className="border-solid border-2 px-4 py-2 rounded-md  min-w-44  bg-base-gray  text-base-gray-dark hover:bg-base-green hover:text-base-gray-light">
                Users List
              </button>
            </div>
            <div className="h-12 flex justify-center mb-2 divide-white ">
              <button className="border-solid border-2 px-4 py-2 rounded-md  min-w-44  bg-base-gray  text-base-gray-dark hover:bg-base-green hover:text-base-gray-light">
                Update users
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
