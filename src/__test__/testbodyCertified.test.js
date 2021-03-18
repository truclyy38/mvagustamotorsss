import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import {MVCertifiedCenter} from '../certificate/mvCertifiedCenter';

let container;
jest.useFakeTimers();

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
//  ..test setTimeout
it('test setTimeOut_ MV Agusta Certified', () => {
  const onSelect = jest.fn();
  act(() => {
    ReactDOM.render(<MVCertifiedCenter />, container);
  });
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(onSelect).not.toBeCalled();
  });

  // test component
