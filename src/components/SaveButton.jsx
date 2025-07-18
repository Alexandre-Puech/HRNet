import { useDispatch } from "react-redux";
import { addEmployee } from "../store/slices/employee";

export default function SaveButton({ data, onConfirm }) {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addEmployee(data));
    console.log("Employee data saved:", data);

    onConfirm?.();
  };

  return (
    <button className="save-button" onClick={handleSave}>
      Save
    </button>
  );
}
