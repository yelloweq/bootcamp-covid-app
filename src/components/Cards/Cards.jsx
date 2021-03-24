import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from '../Cards/Cards.module.css';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { fetchData } from '../../api';

import cx from 'classnames';


const Cards = (props) => {
    const { props: { props: { confirmed, deaths, recovered, lastUpdate } }, update } = props;
    let updateDate = lastUpdate;

    if (!confirmed) {
        return (
            <div className="loading-screen">
                <h1>Loading data...</h1>
            </div>
        );
    }

    if (update != undefined){
        confirmed.value = update.confirmed.value;
        deaths.value = update.deaths.value;
        recovered.value = update.recovered.value;
        updateDate = update.lastUpdate;
    }


    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography align="center" color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography align="center" variant="h5">
                            <CountUp start={0} delay={0.15} end={confirmed.value} duration={2.5} separator="," redraw={true}/>
                        </Typography>
                        <Typography align="center" color="textSecondary">{new Date(updateDate).toDateString()}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                        <Typography align="center" color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography align="center" variant="h5">
                            <CountUp start={0} delay={0.15} end={recovered.value} duration={2.5} separator="," redraw={true}/>
                        </Typography>
                        <Typography align="center" color="textSecondary">{new Date(updateDate).toDateString()}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography align="center" color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography align="center" variant="h5">
                            <CountUp start={0} delay={0.15} end={deaths.value} duration={2.5} separator="," redraw={true} />
                        </Typography>
                        <Typography align="center" color="textSecondary">{new Date(updateDate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
         </div>

    )
}

export default Cards;