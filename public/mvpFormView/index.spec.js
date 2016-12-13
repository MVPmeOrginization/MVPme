import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import {MvpSubmission} from './index.js';

describe('MVP Submission View', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<MvpSubmission />);

  // it('Should contain an email form input.', (done) => {
  //   const actual = renderer.getRenderOutput();
  //   const expected = 'name="email" type="email"';
  //   expect(actual).toIncludeJSX(expected);
  //   done();
  // });
});
