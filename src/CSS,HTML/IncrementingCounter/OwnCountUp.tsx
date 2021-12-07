import React from "react";

const Counter = ({start, end}:{start: number, end: number}) => {
    // useState maintains the value of a state across
    // renders and correctly handles its changes
    const [count, setCount] = React.useState<number>(start);
    // useMemo only executes the callback when some dependency changes
    const increment = React.useMemo(() => end/200, [end]);
  
    // The logic of your counter
    // Return a callback to "unsubscribe" the timer (clear it)
    const doIncrement = () => {
      if(count < end) {
        const timer = setTimeout(
          () => setCount(
            count < (end - increment)
              ? count + increment
              : end
          ),
          3);
        return () => clearTimeout(timer);
      }
    }
  
    // useEffect only executes the callback once and when some dependency changes
    React.useEffect(doIncrement, [count, end, increment]);
  
    // Render the counter's DOM
    return (
      <div>{count.toFixed()}</div>
    )
  }

  export default Counter;