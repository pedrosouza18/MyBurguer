import React from 'react';

const orderSummary = ({ ingredients }) => {
  return (
    <>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients:</p>
      <ul>
        {
          Object.entries(ingredients).map(([key, value], index) => {
            return (
              <li key={index}>
                <span style={{ textTransform: 'capitalize' }}>{key}</span>: {value}
              </li>
            );
          })
        }
      </ul>
      <p>Continue to checkout?</p>
    </>
  );
};

export default orderSummary;