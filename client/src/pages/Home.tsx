import * as React from 'react';
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

import './timeline.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        Home
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}
