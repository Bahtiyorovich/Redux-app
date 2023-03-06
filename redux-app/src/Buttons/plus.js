import { useDispatch } from "react-redux";
import { plusCounter } from "../reducers/countSlice";
const PlusCount = () => {

  const dispatch = useDispatch();

  return (
      <button className="btn btn-primary" onClick={() => dispatch(plusCounter())}>Plus</button>
  )
}

export default PlusCount