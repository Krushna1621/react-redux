import {useSelector,useDispatch} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)

  const incrementhandler=()=>{
        dispatch({type:'increment',amount:2})
  }

  const increasehandler=()=>{
        dispatch({type:'increase',amount:5})
  }

  const decrementhandler=()=>{
        dispatch({type:'decrement',amount:2})
  }


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={increasehandler}>Increased by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
