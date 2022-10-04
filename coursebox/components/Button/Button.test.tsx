import React from 'react';
import { render, screen } from '../../test-utils';

import userEvent from '@testing-library/user-event';

import { Button } from './Button';
// in the test-library we have the render method that renders something on the screen;

describe('Button test cases', () => {
  it('Render check', () => {
    //in jest we can create a mock function
    const onClick = jest.fn();
    //for the render function we can use the "asFragment" function to detec our
    //render behavior providing a sintaxe the we gonna use to match snapshots
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>);

    //comparing next and previous snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  // it('Check onClick callback', () => {
  //   const onClick = jest.fn();

  //   render(<Button onClick={onClick}>button</Button>);

  //   //we can use the screen method to access DOM and find some element / make some actions ex:
  //   // screen.debug();
  //   //another ex:
  //   const element = screen.getByRole('button');

  //   //with the user event library we can emulate user actions
  //   userEvent.click(element);

  //   //here we check if our mockfunction is been called onClick
  //   expect(onClick).toHaveBeenCalled();
  // });
});
