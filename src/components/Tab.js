import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TimeTable from './TimeTable';

const colors = {
    tab: '#50B679',
    tab_text: '#FFF',
    content_bottom: '#FFF', //'#50B679',
    content_top: '#efefef', //'#246A40'
}

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ paddingTop: 15 , paddingLeft: 24 , paddingRight: 24, paddingBottom: 60 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
        now_time_table: ['', '', '', '', '', '', '', '', '', '', '', '', '']
    };

    handleChange = async (event, value) => {
        this.setState({ value });
        await this.props.set_selected_date(value);
        await this.props.set_selected_time(this.state.now_time_table[value]);
    };

    handleChangeIndex = index => {
        this.setState({ index: index });
    };

    // 선택한 시간 정보 전달
    set_selected_time = (selected_time_info) => {
        let now_time_table = this.state.now_time_table;
        now_time_table[this.state.value] = selected_time_info;
        this.setState({ now_time_table : now_time_table });
        this.props.set_selected_time(now_time_table[this.state.value]);
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root} >
                <AppBar className={classes.app_bar} position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="off"
                        style={{ background: colors.tab}}
                    >
                        {this.props.time_tables.map((elements, index) => {
                            return <Tab label={elements.date} key={index} style={{ background: colors.tab , color: colors.tab_text}} />;
                        })}
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                    style={{ background: ''/*`linear-gradient(25deg, ${colors.content_bottom} 30%, ${colors.content_top} 70%)`*/}}
                >
                {this.props.time_tables.map((element, index) => {
                    return (
                        <TabContainer style={{ padding: 3 }} dir={theme.direction} key={index} >
                            <TimeTable
                                date={element.date}
                                time_table={element.time_table}
                                key={index}
                                set_selected_time={this.set_selected_time}
                            />
                        </TabContainer>
                    );
                })}
                </SwipeableViews>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);