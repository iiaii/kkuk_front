import React from 'react';
import Appbar from './App_bar';
import Tab from './Tab';
import BottomAppBar from './BottomAppBar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    reserve: {
    },
    app_bar: {
    },
    tab: {
    }
});


class Reserve extends React.Component {
    state = {
        user_info: {
            name: '최정헌',
            school_id: '201311318',
            college: '소프트웨어융합학부',
            grade: '4학년'
        },
        space: '풋살장',
    };

    componentWillMount() {
    }

    componentDidMount() {
        this._get_time_tables()
    }

    _get_time_tables = async () => {
        // 리퀘스트로 일정표를 가져온다
        const response = {
            status: 200,
            time_tables: [
                {
                    date: '2/23',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '2/24',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '2/25',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '2/26',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '2/27',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '2/28',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '3/1',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '3/2',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '3/3',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
                {
                    date: '3/4',
                    time_table: [
                        { club: '건국민턴', id: 'iiaii' }, // 1
                        { club: '건국민턴', id: 'iiaii' }, // 2
                        { club: '예약가능', id: '' }, // 3
                        { club: '예약가능', id: '' }, // 4
                        { club: '예약가능', id: '' }, // 5
                        { club: '예약가능', id: '' }, // 6
                        { club: '예약가능', id: '' }, // 7
                        { club: '건축15', id: 'jj88' }, // 8
                        { club: '예약가능', id: '' }, // 9
                        { club: '예약가능', id: '' }, // 10
                        { club: '예약가능', id: '' }, // 11
                        { club: '컴공13', id: 'kk777' }, // 12
                        { club: '컴공13', id: 'kk777' }, // 13
                    ],
                },
            ]
        }

        if (response.status === 200) {
            this.setState({
                time_tables: response.time_tables,
                selected_date: response.time_tables[0].date
            });
        }
    }

    // 선택된 날짜 설정
    set_selected_date = (index) => {
        this.setState({ selected_date: this.state.time_tables[index].date });
    }

    // 선택된 시간 설정
    set_selected_time = (selected_time_info) => {
        this.setState({ selected_time_info: selected_time_info });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.reserve}  >
                <Appbar className={classes.app_bar} />
                {this.state.time_tables ? <Tab className={classes.tab} time_tables={this.state.time_tables} set_selected_date={this.set_selected_date} set_selected_time={this.set_selected_time} /> : '...Loading'}
                <BottomAppBar className={classes.bottom_app_bar} 
                date={this.state.selected_date} 
                selected_time_info={this.state.selected_time_info} 
                user_info={this.state.user_info}
                space={this.state.space}  />
            </div>
        );
    }
}

export default withStyles(styles)(Reserve);
