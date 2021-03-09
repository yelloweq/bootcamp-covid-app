import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import Home from './components/pages/Home/';

class App extends React.Component {

    state = {
        data: {},

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({ data: fetchedData })
    }

    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Home />;
            </div>
            //     <div className={styles.container}>
            //         <Cards data={data}/>
            //         <CountryPicker />
            //         <Chart />
            //     </div>
        );
    }
}
        

export default App;
