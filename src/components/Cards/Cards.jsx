import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from '../Cards/Cards.module.css';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { fetchData } from '../../api';

import cx from 'classnames';


const Cards = (props) => {
    const { props: { props: { confirmed, deaths, recovered, lastUpdate } }, update } = props;

    if (!confirmed) {
        return (
            <div className="loading-screen">
                <h1>loading</h1>
            </div>
        );
    }


    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography align="center" color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography align="center" variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," redraw={true} useEasing={true}/>
                        </Typography>
                        <Typography align="center" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography align="center" variant="body2">Active cases of covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography align="center" color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography align="center" variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography align="center" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography align="center" variant="body2">Recoveries from covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography align="center" color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography align="center" variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography align="center" color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography align="center" variant="body2">Deaths from covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
         </div>

    )
}

export default Cards;