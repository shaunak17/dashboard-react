import React from 'react'
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function LoginForm({ enqueueSnackbar }) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                // Email Rules
                if (!values.email) {
                    errors.email = 'Username is required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                // Password Rules
                if (!values.password) {
                    errors.password = 'Password is required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    if (values.email === "hruday@gmail.com" && values.password === "hruday123") {
                        // Api call here
                        let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiSHJ1ZGF5IiwidHlwZSI6IkFkbWluIn0.QcvJZHSEBlcq92eKyhEdtdvUZu7i0sBp_SjEn_HN9xs";
                        const decoded = jwt_decode(jwt); // Storeit in redux
                        localStorage.setItem('token', jwt);
                        history.push('/dashboard');
                    } else {
                        enqueueSnackbar('User does not exist.', {
                            variant: 'error',
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'right',
                            },
                        })
                    }
                    setSubmitting(false);
                }, 1400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                    <form className={classes.form} onSubmit={handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            helperText={errors.email && touched.email && errors.email}
                            error={touched.email && errors.email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            autoComplete="password"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            helperText={errors.password && touched.password && errors.password}
                            error={errors.password && touched.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={isSubmitting}
                        >
                            Login
                                </Button>
                    </form>
                )}
        </Formik>
    )
}

export default withSnackbar(LoginForm)
