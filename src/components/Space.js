import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    float: 'left',
    width: '330px',
    margin: 10,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class Space extends React.Component {
    state = {}

    handleClick = () => {
        window.location.assign('/reserve');
    };

    componentWillMount() {
    }

    componentDidMount() {
        this._get_time_tables()
    }

    _get_time_tables = async () => {
        // 리퀘스트로 일정표를 가져온다
        const response = {
        }
        if (response.status === 200) {
            this.setState({
                time_tables: response.time_tables,
                selected_date: response.time_tables[0].date
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{margin: 'auto'}}>
                {this.props.space.map((space) => {
                    return (
                        <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt={space.title}
                            className={classes.media}
                            height="150"
                            src={space.img}
                            title={space.title}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {space.title}
                            </Typography>
                            <Typography component="p">
                                {space.subTitle}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button color="primary">
                            자세히
                            </Button>
                            <Button onClick={this.handleClick} color="primary">
                            예약하기
                            </Button>
                        </CardActions>
                        </Card>
                    );
                })}
            </div>
            
        );
    }
}

Space.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Space);