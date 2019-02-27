import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

let first = 0;
let last = 0;
let index_checker = 0;

const colors = {
    selected_color: '#468FF3',
    unselected_color: '',
    disabled_color: '#9F9F9F',
}

const styles = theme => ({
    root : {
        marginTop: -5,
        marginBottom: 40
    },
    time_table: {
        background: 'linear-gradient(45deg, #B8FFE2 10%, #D8FFE2 70%)',
        borderRadius: 7,
        border: 4,
        color: 'white',
        padding: '0 0px',
        boxShadow: '0 1px 1px 1px rgba(0, 0, 1, .2)',
    }
});

class TimeTable extends React.Component {
    state = {
        today_s_time_table: ['', '', '', '', '', '', '', '', '', '', '', '', '']
    };

    handleListItemClick = async (event, index) => {
        index_checker++;
        if (index_checker % 2 === 1) {
            first = index;
            let time_table = await this.reset_selected_area();
            await this.setState({ today_s_time_table: time_table });
        } else {
            last = index;
            index_checker = 0;
            await this.selected_area_maker(this.get_difference());
        }
        await this.props.set_selected_time(this.check_selected_area());
    };

    // 선택된 영역 확인
    check_selected_area () {
        let count = 0;
        let start_time = 0;
        
        for(let i=0 ; i<this.state.today_s_time_table.length ; i++) {
            if (this.state.today_s_time_table[i] === colors.selected_color) {
                count++;
                if(count === 1) {
                    start_time = i + 9;
                }
            }
        };
        return { count: count , start_time: start_time };
    }

    // 선택된 영역이 있다면 취소
    reset_selected_area () {
        let time_table = this.state.today_s_time_table.map((line) => {
            if (line === colors.selected_color) {
                return colors.unselected_color;
            } else {
                return line;
            }
        });
        // 현재 선택한 영역 표시
        time_table[first] = colors.selected_color;

        return time_table;
    }

    // 첫번째 선택과 두번째 선택의 차이 가져오기 (양수)
    get_difference () {
        let difference = last - first;
        // 첫번째 선택과 두번째 선택의 차가 음수일때 양수로 변환
        if (difference < 0) {
            difference *= -1;
            const tmp = last;
            last = first;
            first = tmp;
        }
        return difference;
    }

    // 선택된 영역 표시하기
    selected_area_maker(difference) {
        let time_table = this.state.today_s_time_table;

        // 같은 곳을 두번 선택 했을때 (선택 취소)
        if (difference === 0) {
            time_table[last] = colors.unselected_color;
            this.setState({ today_s_time_table: time_table });
            return;
        }
        // 4시간 초과로 선택했을때
        if (difference >= 4) {
            time_table[first] = colors.unselected_color;
            time_table[last] = colors.unselected_color;
            this.setState({ today_s_time_table: time_table });
            alert('대여 가능한 최대 시간은 4시간입니다');
        } 
        // 4시간 이하로 선택했을때
        else { 
            time_table = time_table.map((line, index) => {
                if (index >= first && index <= last) {
                    return colors.selected_color;
                } else {
                    return colors.unselected_color;
                }
            })
            this.setState({ today_s_time_table: time_table });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.time_table}>
                    {this.props.time_table.map((element, index) => {
                        // 기본 설정
                        let disabled = false;
                        let border_radius = '';
                        let time_txt = (index + 9) + ' - ' + (index + 10);

                        // 예약된 영역 클릭 불가 상태로 변경
                        if (element.club !== '예약가능') {
                            disabled = true;
                        }

                        // 처음과 끝 모서리 둥글게 만들기
                        if(index === 0){
                            border_radius = '7px 7px 0px 0px';
                            // 9시 앞에 0 붙여주기
                            time_txt = '0' + time_txt;
                        } else if(index === 12){
                            border_radius = '0px 0px 7px 7px';
                        }

                        return (
                            <ListItem
                                button={true}
                                disabled={disabled}
                                dense={true}
                                onClick={event => this.handleListItemClick(event, index)}
                                divider={true}
                                style={{ background: disabled ? colors.disabled_color : this.state.today_s_time_table[index], borderRadius: border_radius, }}
                                key={index}
                            >
                                <ListItemText primary={time_txt} />
                                <ListItemText primary={element.club} />
                            </ListItem>
                        );
                    })}
                </div>
            </div>

        );
    }
}

export default withStyles(styles)(TimeTable);
