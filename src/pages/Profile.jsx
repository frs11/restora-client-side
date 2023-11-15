import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <div className="w-full lg:w-10/12 mx-auto my-10">
        <h1 className="text-4xl text-center">
          User{" "}
          <span className="text-violet-500 dark:text-violet-300">Profile</span>
        </h1>
        <div className=" w-2/3 mx-auto rounded-lg">
          <div className="flex justify-center mt-10">
            <img
              className="w-56 rounded-full border border-violet-500"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://source.unsplash.com/random/200x200/?img=1"
              }
              alt="user profile pic"
            />
          </div>
          <div className="mx-auto w-full lg:w-4/5 bg-base-300 dark:bg-slate-400 p-5 rounded-md shadow mt-10">
            <h1 className="text-lg font-semibold">
              Name:{" "}
              <span className="text-gray-500 dark:text-gray-700">
                {user?.displayName ? user.displayName : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              User ID:{" "}
              <span className="text-gray-500 dark:text-gray-700 text-base">
                {user?.uid ? user.uid : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Email:{" "}
              <span className="text-gray-500 dark:text-gray-700">
                {user?.email ? user.email : "Unavailable"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Phone Number:{" "}
              <span className="text-gray-500 dark:text-gray-700">
                {user?.phoneNumber ? user.phoneNumber : "017XXXXXXXX"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Email Verification:{" "}
              <span className="text-gray-500 dark:text-gray-700">
                {user?.emailVerified ? "Verified" : "Not verified yet"}
              </span>
            </h1>
            <h1 className="text-lg font-semibold mt-2">
              Profile Creation Date:{" "}
              <span className="text-gray-500 dark:text-gray-700 text-base">
                {user?.metadata?.creationTime
                  ? user.metadata?.creationTime
                  : "Unknown"}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
