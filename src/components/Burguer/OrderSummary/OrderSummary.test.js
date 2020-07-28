import React from 'react';
import { render } from '@testing-library/react';

import OrderSummary from './OrderSummary';

describe('Tests about order summary component', () => {
  test('should show order summary', () => {
    const ingredients = { salad: 1, bacon: 2, cheese: 1, meat: 2 };
    const { getAllByTitle } = render(<OrderSummary ingredients={ingredients} />);
    const ingredientsNodes = getAllByTitle(/ingredients/i);
    const salad = ingredientsNodes[0];
    const bacon = ingredientsNodes[1];
    const cheese = ingredientsNodes[2];
    const meat = ingredientsNodes[3];

    expect(salad).toHaveTextContent(/salad: 1/);
    expect(bacon).toHaveTextContent(/bacon: 2/);
    expect(cheese).toHaveTextContent(/cheese: 1/);
    expect(meat).toHaveTextContent(/meat: 2/);
  });

  test('should check if element has title attribute', () => {
    const ingredients = { salad: 1, bacon: 2, cheese: 1, meat: 2 };
    const { getAllByTitle, debug } = render(<OrderSummary ingredients={ingredients} />);
    const ingredientsNodes = getAllByTitle(/ingredients/i);
    [...ingredientsNodes].forEach((ing) => {
      expect(ing).toHaveAttribute('title', 'ingredients');
      debug();
    });
  });
});