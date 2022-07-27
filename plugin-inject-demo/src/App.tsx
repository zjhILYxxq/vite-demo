import React, { Suspense } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Page1, Page2, Page3 } from './routers';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to="/page1">page1</Link></li>
            <li><Link to="/page2">page2</Link></li>
            <li><Link to="/page3">page3</Link></li>
          </ul>
        </div>
        <div>
          <Suspense fallback="页面加载中">
            <Switch>
              <Route path="/page1">
                <Page1 />
              </Route>
              <Route path="/page2">
                <Page2 />
              </Route>
              <Route path="/page3">
                <Page3 />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  )
}

export default App
