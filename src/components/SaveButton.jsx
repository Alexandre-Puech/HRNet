import { useDispatch } from "react-redux";
import { addEmployee } from "../store/slices/employee";

export default function SaveButton({ data }) {
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(addEmployee(data));
    console.log("Employee data saved:", data);

    const stored = JSON.parse(localStorage.getItem("employees")) || [];
    stored.push(data);
    localStorage.setItem("employees", JSON.stringify(stored));
  };

  return (
    <button className="save-button" onClick={handleSave}>
      Save
    </button>
  );
}
