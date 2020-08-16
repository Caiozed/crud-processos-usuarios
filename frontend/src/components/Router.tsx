import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
  } from "react-router-dom";


import RoutesData  from "../routes/index";
import { makeStyles } from '@material-ui/core';

  
const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

const Routes = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Switch>
                {RoutesData.map((route: any, i) => (
                    <Route key={i} path={route.path} exact component={route.component} children={route.children}/>
                ))}
            </Switch>
        </main>
    );
}

export default Routes;