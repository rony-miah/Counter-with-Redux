import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Counter/CounterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch()
  
  return (
    <>
      <h3 className='text-2xl'>{count}</h3>
      <button onClick={() => dispatch(increment())} className='bg-teal-500 p-2 rounded-md mt-5 mr-2 text-white'>Increment</button>
      <button onClick={() => dispatch(decrement())} className='bg-teal-500 p-2 rounded-md mt-5 mr-2 text-white'>Decrement</button>
      <button onClick={() => dispatch(reset())} className='bg-teal-500 p-2 rounded-md mt-5 text-white'>Reset</button>
    </>
  )
}

export default App

