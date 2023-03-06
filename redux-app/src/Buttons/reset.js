import { useDispatch } from "react-redux"
import { resetCounter } from "../reducers/countSlice"

const ResetCount = () => {

  const dispatch = useDispatch();

  return (
    <button className="btn btn-warning" onClick={() => dispatch(resetCounter())}>reset</button>
  )
}

export default ResetCount