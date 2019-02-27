import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {MenuItem, TextField, Button} from '@material-ui/core';

import App_bar from './App_bar';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 120,
    },
    mail_read_only: {
        width: 110,
    },
    button: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit+15,
        marginBottom: theme.spacing.unit,
        width: 120,
    }
});

const majors = [
    {
        value: 'USD',
        label: '컴퓨터공학과',
    },
    {
        value: 'EUR',
        label: '건축공학과',
    },
    {
        value: 'BTC',
        label: '전자공학과',
    },
];

class TextFields extends React.Component {
    state = {
        school_id: '',
        pwd: '',
        confirm_pwd: '',
        name: '',
        phone: '',
        major: '1',
        school_mail: '',
        auth_num: '',
        signature: '1',
        currency: 'KOR',
    };

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    restrict_txt_length = (length) => (event) => { 
        event.target.value = Math.max(0, parseInt(event.target.value)).toString().slice(0, length) 
    }

    school_id_double_check = (event) => {
        // TODO: 학번 중복확인
        const response = '201311318';

        if(response !== this.state.school_id){
            alert('가입 가능한 학번입니다');
            return true;
        } else{
            alert('이미 가입된 학번입니다');
            this.setState({school_id: ''})
            return false;
        }
    }

    school_mail_double_check = (event) => {
        // TODO: 건국포털아이디 중복확인
        const response = 'jhun94';
        const school_mail = this.state.school_mail;

        if(response !== school_mail){
            // TODO: 입력한 학교메일 로 인증번호 발송
            alert('인증번호가 '+school_mail+'@konkuk.ac.kr로 발송 되었습니다');
            return true;
        } else{
            alert('이미 가입된 건국포털 아이디입니다');
            this.setState({school_id: ''})
            return false;
        }
    }

    send_auth_num = (title) => (event) => {
        event.preventDefault();

        const double_checked_result = this.double_check(title);

        // TODO: send request to the server
        if(double_checked_result){
            alert('인증번호가 '+this.state.school_mail+'@konkuk.ac.kr 로 발송되었습니다');
            return;
        }
    }

    async is_txt_field_empty () {
        const state = await Promise.all(Object.keys(this.state).map((key) => {
            if(this.state[key].length === 0) {
                return true;
            } else {
                return false;
            }
        }));
        for(let i=0 ; i<state.length ; i++) {
            if(state[i]) {
                return true;
            }
        }
        return false;
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <App_bar />

                <TextField
                    required
                    id="school_id"
                    label="학번"
                    className={classes.textField}
                    onInput={this.restrict_txt_length(9)}
                    onChange={this.handleChange}
                    value={this.state.school_id}
                    type="number" 
                    margin="normal"
                />

                <Button variant="contained" id='school_id_check' className={classes.button} color="primary" onClick={this.school_id_double_check} disabled={ this.state.school_id.length !== 9 ? true : false } >중복확인</Button>

                <br></br>

                <TextField
                    required
                    id="pwd"
                    label="비밀번호"
                    className={classes.textField}
                    onChange={this.handleChange}
                    type="password"
                    margin="normal"
                />

                <TextField
                    required
                    id="confirm_pwd"
                    label="비밀번호 확인"
                    className={classes.textField}
                    onChange={this.handleChange}
                    type="password"
                    margin="normal"
                />

                <br></br>

                <TextField
                    required
                    id="name"
                    label="이름"
                    className={classes.textField}
                    onChange={this.handleChange}
                    margin="normal"
                />

                <br></br>

                
                <TextField
                    required
                    id="phone"
                    label="휴대폰(010제외)"
                    className={classes.textField}
                    onInput={this.restrict_txt_length(8)}
                    onChange={this.handleChange}
                    type='number'
                    margin="normal"
                    helperText='01012345678 -> 12345678'
                />

                {/* <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                /> */}
                
                <br></br>

                <TextField
                    required
                    id="major"
                    select
                    label="전공"
                    className={classes.textField}
                    value={this.state.major}
                    onChange={this.handleChange}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="현재 소속 학과를 선택해주세요"
                    margin="normal"
                >
                    {majors.map(option => (
                        <MenuItem id='major' key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <br></br>
                
                <TextField
                    required
                    id="school_mail"
                    label="건국포털 아이디"
                    className={classes.textField}
                    onChange={this.handleChange}
                    margin="normal"
                    value={this.state.school_mail}
                />
                <TextField
                    id="@konkuk.ac.kr"
                    label="학교 메일"
                    defaultValue="@konkuk.ac.kr"
                    className={classes.mail_read_only}
                    margin="normal"
                    style={{width: '100'}}
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <Button variant="contained" id='send_auth_num' className={classes.button} color="primary" onClick={this.send_auth_num('건국포털 아이디').bind(this)} disabled={ this.state.school_mail.length === 0 ? true : false } >인증번호 발송</Button>

                <br></br>

                <TextField
                    required
                    id="auth_num"
                    label="인증번호"
                    className={classes.textField}
                    onChange={this.handleChange}
                    margin="normal"
                />

                <Button variant="contained" id='auth_num_check' className={classes.button} color="primary" disabled={ this.state.auth_num.length === 0 ? true : false }>인증번호 확인</Button>

                <br></br>

                <Button variant="contained" id='sign_up' className={classes.button} color="primary" disabled={ this.is_txt_field_empty() ? true : false}>가입완료</Button>
                {/* <TextField
                    id="standard-select-currency-native"
                    select
                    label="Native select"
                    className={classes.textField}
                    value={this.state.currency}
                    onChange={this.handleChange}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                >
                    {currencies.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField> */}
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);