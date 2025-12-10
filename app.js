import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-task" component={AddTask} />
        </Switch>
      </TaskProvider>
    </Router>
  );
};

export default App;
