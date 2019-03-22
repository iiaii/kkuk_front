import React from 'react';
import './Sign_in.css'
import kkuk_down from '../dist/images/kkuk_down.png';
import { Button, TextField } from '@material-ui/core';

class Sign_in extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            pwd: '',
            user_info: {}
        }

        this.handle_change = this.handle_change.bind(this);
    }

    handle_change (event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    async try_sign_in (event) {
        event.preventDefault();

        const id = this.state.id;
        const pwd = this.state.pwd;

        // 유효성 체크
        if (!id) {
            alert('아이디를 입력하세요');
            return;
        }
        if (!pwd) {
            alert('비밀번호를 입력하세요');
            return;
        }

        // 로그인 시도
        // const response = await sign_in(id,pwd);
        const response = {
            status: 200,
            user_info: {
                name: '호로롱',
                school_id: '2013111111',
                college: '소프트웨어융합학부',
                grade: '4학년',
                portal_id: 'iiaii'
            }
        }

        if(response.status === 200) {
            this.setState({ user_info: response.user_info });
            console.log(this.state.user_info)
            window.location.assign('/home');
        } else {
            alert('일치하는 정보가 없습니다');
            return;
        }
    }

    render() {
        return (
            <div className='Sign_in'>
                <div className='title'>건국대학교 통합 예약 시스템</div>
                <img id='logo' src={kkuk_down} alt='kkuk_logo'/>
                <div className='input_area'>
                    <TextField className='input_area' type="text" label="건국포탈 아이디" variant="outlined" id="id" onChange={this.handle_change}/>
                    <br></br>
                    <br></br>
                    <TextField className='input_area' type="password" label="비밀번호" variant="outlined" id="pwd" onChange={this.handle_change} autoComplete="current-password"/>
                </div>
                <div className='btn_area'>
                    <Button variant="contained" className='sign_in' style={{ background: '#246A40', color: 'white' }} onClick={this.try_sign_in.bind(this)}>로그인</Button>
                </div>
                <div className='other_sites'>
                    <Button href='http://www.konkuk.ac.kr/do/Index.do' color="primary" className='sign_up'>건국대학교</Button> | <Button href='https://portal.konkuk.ac.kr/' color="primary" className='account_recovery'>건국 포탈</Button>
                </div>
                <div className='corp' style={{fontSize : 10}}>© 2014 by KONKUK UNIVERSITY</div>
            </div>
        );
    }
}

export default Sign_in;
