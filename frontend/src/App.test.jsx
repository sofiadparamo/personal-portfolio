import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, fas);

test('renders learn react link', () => {
  render(
    <div>
      <div id="loading-container">
        <div id="loading-icon"/>
      </div>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>);
  const linkElement = screen.getByText(/Projects I've Worked On/i);
  expect(linkElement).toBeInTheDocument();
});
