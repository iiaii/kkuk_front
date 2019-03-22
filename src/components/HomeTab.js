import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Space from './Space';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
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
  },
});

class HomeTab extends React.Component {
  state = {
        value: 0,
        main: {
        },
        kcube: {

        },
        trainingSpace: [
            {
                title: "축구장",
                subTitle: "09:00 ~ 22:00",
                img: require('../dist/images/soccer.jpg'),
            },
            {
                title: "족구장",
                subTitle: "09:00 ~ 22:00",
                img: require('../dist/images/footvolleyball.jpg'),
            },
            {
                title: "풋살장",
                subTitle: "09:00 ~ 22:00",
                img: require('../dist/images/futsal.jpg'),
            },
            {
                title: "농구장",
                subTitle: "09:00 ~ 22:00",
                img: require('../dist/images/basketball.png'),
            },
            {
                title: "야외광장",
                subTitle: "09:00 ~ 22:00",
                img: require('../dist/images/square.jpg'),
            },
            {
                title: "실내체육관",
                subTitle: "09:00 ~ 22:00 토,일,공휴일 휴관",
                img: require('../dist/images/gym.jpg'),
            },
        ],
        scholarlySpace: [
            {
                title: "Prime 홀",
                subTitle: "09:00 ~ 22:00 학생회관 389석",
                img: require('../dist/images/primehall.jpg'),
            },
            {
                title: "다목적 연습실",
                subTitle: "09:00 ~ 22:00 제2학생회관 20~30명",
                img: require('../dist/images/errorimg.jpg'),
            },
            {
                title: "대회의실",
                subTitle: "09:00 ~ 22:00 100석",
                img: require('../dist/images/errorimg.jpg'),
            },
            {
                title: "소회의실",
                subTitle: "09:00 ~ 22:00 70석",
                img: require('../dist/images/errorimg.jpg'),
            },
            {
                title: "노천극장",
                subTitle: "09:00 ~ 22:00 야외 1,850석",
                img: require('../dist/images/outdoorstage.jpg'),
            },
        ],
        club: {

        }
    };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="메인" />
            <Tab label="K큐브 대여" />
            <Tab label="체육공간 대여" />
            <Tab label="학술공간 대여" />
            <Tab label="그룹/동아리 관리" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <img src={require("../dist/images/konkuk.png")} alt="konkuk"/>
          </TabContainer>
          <TabContainer dir={theme.direction}>K큐브 대여</TabContainer>
          <TabContainer dir={theme.direction}>
            <div>
                <Typography variant="h5" component="h3">
                    체육공간
                </Typography>
                <Space space={this.state.trainingSpace} />
            </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <div>
                <Typography variant="h5" component="h3">
                    학술공간
                </Typography>
                <Space space={this.state.scholarlySpace} />
            </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>그룹/동아리 관리</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

HomeTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(HomeTab);