import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/App';

describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});
