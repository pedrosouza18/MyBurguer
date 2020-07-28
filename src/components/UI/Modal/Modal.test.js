import React from 'react';
import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Tests to check modal behavior', () => {
  test('should not show modal components', () => {
    const { getByRole } = render(<Modal />);
    const modalContent = getByRole(/dialog/i);
    expect(modalContent).toHaveStyle('transform: translateY(-100vh)');
    expect(modalContent).toHaveStyle('opacity: 0');
  });

  test('should show modal components', () => {
    const { getByRole } = render(<Modal show={true} />);
    const modalContent = getByRole(/dialog/i);
    expect(modalContent).toHaveStyle('transform: translateY(0)');
    expect(modalContent).toHaveStyle('opacity: 1');
  });

  test('should must have children component', () => {
    const { getByTitle } = render(
      <Modal show={true}>
        <div title="Modal content">Modal content appears</div>
      </Modal>
    );
    const modalContent = getByTitle(/modal content/i);
    expect(modalContent).toHaveTextContent(/modal content appears/i);
  });

  test('should not must have children component', () => {
    const { queryByTitle } = render(<Modal show={true} />);
    const modalContent = queryByTitle(/modal content/i);
    expect(modalContent).toBeNull();
  });
});