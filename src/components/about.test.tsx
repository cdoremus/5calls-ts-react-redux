import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { create } from 'react-test-renderer';
import About from './about';

describe('AboutComponent', () => {
  beforeEach((done) => {
    done();
  });
  it('should be able to instantiate component', () => {
      const aboutComponent = TestUtils.renderIntoDocument(
        <About />
      );
      expect(aboutComponent).toBeDefined();
    });

  it('should check snapshot', () => {
      const component = create(<About />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

  afterEach((done) => {
    done();
  });
});

