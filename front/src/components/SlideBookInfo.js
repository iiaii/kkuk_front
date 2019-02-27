import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import End from './End';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const DialogTitle = withStyles(theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit * 2,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing.unit,
      top: theme.spacing.unit,
      color: theme.palette.grey[500],
    },
  }))(props => {
    const { children, classes, onClose } = props;
    
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing.unit * 2,
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles(theme => ({
    root: {
      borderTop: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit,
    },
  }))(MuiDialogActions);

class SlideBookInfo extends React.Component {
  state = {
    open: false,
    booked_complete: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false , agreement: undefined});
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  try_booking = async event => {
    // 예약 시도 api 호출
    const response = {
        status: 200,
        booked_info: {
            msg: '예약에 성공했습니다!',
            user_info: this.props.user_info,
            space: this.props.space,
            date: this.props.date, 
            selected_time: this.props.selected_time
        }
    }

    if(response.status === 200){
        const booked_info = response.booked_info;
        booked_info.agreement = (this.state.agreement!==undefined);
        booked_info.approver = this.state.approver;
        booked_info.event_contents = this.state.event_contents;
        // await this.setState({ booked_complete: true, booked_info: booked_info });
        alert(booked_info.msg +'\n\n예약자 정보: '+ booked_info.user_info.name +' '+ booked_info.user_info.school_id +' '+ booked_info.user_info.college +'\n대여장소: '+ booked_info.space +'\n대여 날짜: '+ booked_info.date +'\n대여 시간: '+ booked_info.selected_time +'\n승인자: '+ booked_info.approver +'\n행사내용: '+ booked_info.event_contents);
        window.location.assign('/sign-in');
    } else {
        console.log('##$$')
        alert('예약에 실패했습니다')
    }
    this.setState({ open: false , agreement: undefined });
  }

  render() {
    return (
      <div>
          <IconButton color="inherit" onClick={this.handleClickOpen} disabled={this.props.disabled}>
                <CheckCircle fontSize="large" style={{ color: this.props.color }}/>
          </IconButton>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title" onClose={this.handleClose} >
            예약 유의사항 및 선택
          </DialogTitle>
          <DialogContent>
        <FormLabel component="legend" required>유의사항</FormLabel>
        <br/>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >[ 공간대여 유의사항 ]</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {' ܫ 학술/체육시설 공통 사용시 유의사항'}<br/>
                {'    - 실제 사용목적, 구성원 등이 신청서 내용과 동일해야 함'}<br/>
                {'    - 상업적 행위는 불가함 (물품ㆍ서비스 판매, 외부업체 홍보, 판촉 등)'}<br/>
                {'    - 비품 및 시설 파손, 분실 등이 발생하지 않도록 해야 함'}<br/>
                {'    - 음주, 취사, 흡연, 과도한 소음 금지'}<br/>
                {'    - 각종 신청서 또는 첨부자료 위조 금지'}<br/>
                {'    - 공간대여신청서 상의 유의사항 준수'}<br/><br/>
                {' ܫ 체육시설 공간 유의사항'}<br/>
                {'    - 스포츠 목적으로만 사용해야 함'}<br/>
                {'    - 운동복 및 운동화를 필히 착용해야 함(구두착용 금지)'}<br/>
                {'    - 바퀴 달린 용품(인라인스케이트, 휠리스, 스쿠터, 자전거, 차량) 진입 금지함'}<br/>
                {'    - 음주, 흡연, 취사행위 등 금지'}<br/>
                {'    - 껌, 인화성 물질 및 물 이외 기타 음식물 반입 금지'}<br/>
                {'    - 애완동물 반입 금지'}<br/>
                {'    - 주변의 흙을 묻히고 들어가서 오염시키는 행위 금지'}<br/>
                {'    - 임의 시설물 설치 또는 물건 등의 방치 금지'}<br/>
                {'    - 경기장 내에 임시 라인 표식을 위한 페인트, 테이프 사용 금지'}<br/>
                {'    - 우천시 사고위험이 높음으로 가급적 사용 금지'}<br/>
                {'    - 휀스 정면을 향해 공차기 금지 (휀스파손)'}<br/>
                {'    - 경기장 및 공연장 내 전력 사용시 사전 안전교육 의무 이수'}<br/>
                {'    - 감전사고 방지를 위해 스포츠 조명 및 안정기함체 내 접촉 금지'}<br/>
                {'    - 사용 후 주변정리 진행'}<br/>
                {'    - 엠프 사용 등 과도한 소음 금지'}<br/><br/>
                {` ܫ 위 유의사항을 준수하지 않을 경우, 이로 인해 발생한 손망실 비용이 해당 
                단체에 청구되고 교내 공간 사용이 3개월 동안 제한됨. 이에 불구하고 
                문제가 재발할 경우 학생 공간 사용이 1년간 제한될 수 있음.`}
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <FormControlLabel
            control={<Checkbox
                    checked={this.state.agreement!==undefined}
                    onChange={this.handleChange('agreement')}
                    value="agreement"
                    color="primary" />}
            label="위 유의사항을 확인 하였으며 이에 동의합니다"
        />
        <br/>
        <br/>
        <FormLabel component="legend" required>승인자 선택</FormLabel>
        <RadioGroup
            aria-label="approver"
            name="approver"
            value={this.state.value}
            onChange={this.handleChange('approver')}
            row
          >
            <FormControlLabel
              value="administrative_chief"
              control={<Radio color="primary" />}
              label="행정실장(권장)"
            />
            <FormControlLabel
              value="head_professor"
              control={<Radio color="primary" />}
              label="주임교수"
            />
            <FormControlLabel
              value="dean"
              control={<Radio color="primary" />}
              label="학장"
            />
            <FormControlLabel
              value="students_representative"
              control={<Radio color="primary" />}
              label="학생대표(자치기구 및 중앙동아리)"
            />
        </RadioGroup>
        <br/>
        <FormLabel component="legend" required>행사 내용</FormLabel>
        <RadioGroup
            aria-label="event_contents"
            name="event_contents"
            value={this.state.value}
            onChange={this.handleChange('event_contents')}
            row
          >
            <FormControlLabel
              value="regular_meeting"
              control={<Radio color="primary" />}
              label="정기모임"
            />
            <FormControlLabel
              value="official_event"              
              control={<Radio color="primary" />}
              label="공식행사"
            />
            <FormControlLabel
              value="etc"              
              control={<Radio color="primary" />}
              label="기타"
            />
        </RadioGroup>
          </DialogContent>
          <DialogActions>
            {this.state.agreement && this.state.approver && this.state.event_contents ? <Button onClick={this.try_booking} color="primary">
              예약하기
            </Button> : <Button disabled>
              예약하기
            </Button>}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SlideBookInfo;