import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import CheckCircle from '@material-ui/icons/CheckCircle';
import SlideBookInfo from './SlideBookInfo';


const empty_time_txt = '0 ~ 0 : 0시간';

const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        height: 50
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -5,
    },
});

class BottomAppBar extends React.Component {

    set_selected_time() {
        return this.props.selected_time_info.start_time + ' ~ ' + 
                Number(this.props.selected_time_info.start_time + 
                this.props.selected_time_info.count) + ' : ' + this.props.selected_time_info.count + '시간';
    }

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.date}>
                        {this.props.date ? this.props.date : ' '}
                    </div>
                    <div className={classes.time}>
                        {this.props.selected_time_info ? this.set_selected_time() : empty_time_txt}
                    </div>    
                    <div>
                    {this.props.selected_time_info && this.props.selected_time_info.count!==0 ? 
                    <SlideBookInfo color='#9cff88' disabled={false} 
                    user_info={this.props.user_info} 
                    space={this.props.space} 
                    date={this.props.date} 
                    selected_time={this.set_selected_time()}/> : 
                    <SlideBookInfo color='' disabled={true} />}
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

BottomAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);