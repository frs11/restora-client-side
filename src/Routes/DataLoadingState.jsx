import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Contexts/AuthProvider";

const DataLoadingState = ({ children }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-violet-400 mx-auto "></span>
      </div>
    );
  }
  return children;
};
DataLoadingState.propTypes = {
  children: PropTypes.node,
};

export default DataLoadingState;
