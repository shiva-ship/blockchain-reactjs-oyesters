import React from 'react';

import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useParams
  } from "react-router-dom";
import  Page from './components/Page'

class App extends React.Component{
  render() {
	return (
	  <BrowserRouter>
	  <div className="App">
		  <Page />

		  </div>
		  </BrowserRouter>
	);
  }
}

export default App;
