import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData, graphData } from './api';
import Home from './components/pages/Home/';
import Graph from './components/pages/Graph/Graph';
import Stats from './components/pages/Stats/Stats';

class App extends React.Component {

    state = {
        data: {},

        // (IBN) Can't think of a better name
        data2: {},

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({ data: fetchedData })

        // (IBN) Get data for Graph page
        const fetchedDataForGraph = await graphData();
        console.log(fetchedDataForGraph);
        this.setState({ data2: fetchedDataForGraph })
    }

    render() {
        const { data, data2 } = this.state;
        return (
            <Router>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/stats">
                    <Stats props={data} />
                </Route>
                <Route exact path="/graph">
                    <Stats props={data2} />
                </Route>
                <Route exact path="/" render={ () => <Redirect to="/home" />} />

            </Router>
        );
    }
}

export default App;
