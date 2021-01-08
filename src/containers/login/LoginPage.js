import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    }
}));

export default function LoginPage() {
    const classes = useStyles();
    const history = useHistory();
    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push('/dashboard')
        }
    }, []);
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonOutlineIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginForm />
            </div>
        </Container>
    );
}