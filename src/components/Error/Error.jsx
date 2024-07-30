import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { clearError, selectErrorMsg } from "../../redux/Slices/errorSlice";
import { useEffect } from "react";

function Error() {
  const errorMesssage = useSelector(selectErrorMsg);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMesssage) {
      toast.info(errorMesssage);
      dispatch(clearError());
    }
  }, [errorMesssage, dispatch]);

  return <ToastContainer position="top-right" autoClose={2000} />;
}

export default Error;
