import { useDispatch, useSelector } from "react-redux"
import { getItem } from "../redux/textSlice"
function LeftPage() {
    const dispatch = useDispatch();
    const item = useSelector(state => state.text.item)
    const helpActive = useSelector(state => state.text.helpActive)
    const helpText = useSelector(state => state.text.helpText)
    return (
        <div className='col d-flex   justify-content-center'>
            <div className='  boxside '>
                <textarea name="textinput" id="textinput" disabled={helpActive} value={helpActive ? helpText : item} className='w-100 h-100 pt-4 ps-2' onChange={(e) => dispatch(getItem(e.target.value))}></textarea>
            </div>
        </div>
    )
}

export default LeftPage