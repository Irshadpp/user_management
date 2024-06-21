import { useDispatch, useSelector } from 'react-redux'
import {  decrement, increment } from '../utils/userSlice';

const Counter = () => {
    const {count} = useSelector((state)=>state.user);
    
    const dispatch = useDispatch();

  return (
    <div>
      <button
      onClick={()=>dispatch(increment())}
      >INC</button>
      <h1>{count}</h1>
      <button
      onClick={()=>dispatch(decrement())}
      >DEC</button>
    </div>
  )
}

export default Counter
