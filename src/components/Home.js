import React from 'react';
import Appbar from './App_bar';
import HomeTab from './HomeTab';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    home: {
    },
    app_bar: {
    },
    tab: {
    }
});


class Home extends React.Component {
    state = {
    };

    componentWillMount() {
    }

    async componentDidMount() {
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.home}  >
                <Appbar className={classes.app_bar} />
                <HomeTab className={classes.hometab} />
            </div>
        );
    }
}

export default withStyles(styles)(Home);
