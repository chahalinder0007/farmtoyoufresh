import React, { useEffect, useState } from "react";
import "./style.scss";
// import axios from "axios";

const Counter: React.FC = () => {
  const [orderCount, setOrderCount] = useState(13);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios
  //       .get(
  //         "https://r5r3kctfy7jlaltexpgsdff5pm0iepid.lambda-url.us-east-1.on.aws"
  //       )
  //       .then((res) => {
  //         if (res) {
  //           setOrderCount(res?.data?.order_count);
  //         }
  //       });
  //   }, 30000);
  //   return () => clearInterval(interval);
  // }, [orderCount]);
  return (
    <>
      {orderCount && (
        <div className="counter">
          <p>
            Order placed: <span>{orderCount}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Counter;
