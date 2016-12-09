import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import LoginForm from './loginForm.js';

describe('Login form', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<LoginForm />);

  it('Should contain an email form input.', (done) => {
    const actual = renderer.getRenderOutput();
    const expected = 'name="email" type="email"';
    expect(actual).toIncludeJSX(expected);
    done();
  });

  it('Should contain an password form input.', (done) => {
    const actual = renderer.getRenderOutput();
    const expected = 'name="password" type="password"';
    expect(actual).toIncludeJSX(expected);
    done();
  });

  it('Should contain a submit button.', (done) => {
    const actual = renderer.getRenderOutput();
    const expected = 'type="submit"';
    expect(actual).toIncludeJSX(expected);
    done();
  });
});
