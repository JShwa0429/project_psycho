import React from 'react';
import { Route } from 'react-router';
import Example from '../components/example';
import Home from '../components/home';
import Test from '../components/test';

export default function UserInput() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/example" component={Example} />
      <Route path="/test" component={Test} />
    </div>
  );
}
