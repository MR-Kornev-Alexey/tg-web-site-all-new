import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../Typography/Typography';
import AppFooter from '../AppFooter/AppFooter';
import AppAppBar from '../AppAppBar/AppAppBar';
import AppForm from '../AppForm/AppForm';
import { email, required } from '../Form/Validation';
import RFTextField from '../Form/RFTextField';
import FormButton from '../Form/FormButton';
import FormFeedback from '../Form/FormFeedback';
import withRoot from '../WithRoot/WithRoot';

function SignIn() {
    const [sent, setSent] = React.useState(false);

    const validate = (values) => {
        const errors = required(['email', 'password'], values);

        if (!errors.email) {
            const emailError = email(values.email);
            if (emailError) {
                errors.email = emailError;
            }
        }

        return errors;
    };

    const handleSubmit = () => {
        setSent(true);
    };

    return (
        <React.Fragment>
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        Sign In
                    </Typography>
                    <Typography variant="body2" align="center">
                        {'Not a member yet? '}
                        <Link
                            href="#"
                            align="center"
                            underline="always"
                        >
                            Sign Up here
                        </Link>
                    </Typography>
                </React.Fragment>
                <Form
                    onSubmit={handleSubmit}
                    subscription={{ submitting: true }}
                    validate={validate}
                >
                    {({ handleSubmit: handleSubmit2, submitting }) => (
                        <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
                            <Field
                                autoComplete="email"
                                autoFocus
                                component={RFTextField}
                                disabled={submitting || sent}
                                fullWidth
                                label="Email"
                                margin="normal"
                                name="email"
                                required
                                size="large"
                            />
                            <Field
                                fullWidth
                                size="large"
                                component={RFTextField}
                                disabled={submitting || sent}
                                required
                                name="password"
                                autoComplete="current-password"
                                label="Password"
                                type="password"
                                margin="normal"
                            />
                            <FormSpy subscription={{ submitError: true }}>
                                {({ submitError }) =>
                                    submitError ? (
                                        <FormFeedback error sx={{ mt: 2 }}>
                                            {submitError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </FormSpy>
                            <FormButton
                                sx={{ mt: 3, mb: 2 }}
                                disabled={submitting || sent}
                                size="large"
                                color="secondary"
                                fullWidth
                            >
                                {submitting || sent ? 'In progress…' : 'Sign In'}
                            </FormButton>
                        </Box>
                    )}
                </Form>
                <Typography align="center">
                    <Link underline="always" href="#">
                        Forgot password?
                    </Link>
                </Typography>
            </AppForm>
        </React.Fragment>
    );
}

export default withRoot(SignIn);
