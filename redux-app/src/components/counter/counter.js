import PlusCount from "../../Buttons/plus"
import MinusCount from '../../Buttons/minus'
import ResetCount from "../../Buttons/reset"

const Counter = () => {

  return (
    <div className="btn-group">
        <PlusCount/>
        <MinusCount/>
        <ResetCount/>
    </div>
  )
}

export default Counter