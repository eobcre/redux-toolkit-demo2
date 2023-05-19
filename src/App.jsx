import { useSelector, useDispatch } from 'react-redux';
import { add, minus, addByAmount } from './redux/countSlice';

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(add())}>Increase</button>
      <button onClick={() => dispatch(minus())}>Decrease</button>
      <button onClick={() => dispatch(addByAmount(10))}>Increase by 10</button>
    </>
  );
};

export default App;
