import React, { useState } from "react";
/*
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
*/
/*
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // console.log(`before setState: ${count}`);
    setCount(count + 1);
    console.log(count);
    setCount(count + 1);
    console.log(count);
    // will not increse twice the second setCount it will not work to solve this use arrow function
    // console.log(`after setState: ${count}`);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}
export default Counter;
*/

function Counter() {
  const [currentCount, setCount] = useState(0);

  function increment() {
    //console.log(`before setState: ${count}`);
    setCount((currentCount) => currentCount + 1);
    console.log(currentCount);
    setCount((currentCount) => currentCount + 1);
    console.log(currentCount);
    // the second setCount will take value from first one 
    //console.log(`after setState: ${count}`);
  }

  return (
    <div onClick={increment}>I have been clicked {currentCount} times</div>
  );
}
export default Counter;

