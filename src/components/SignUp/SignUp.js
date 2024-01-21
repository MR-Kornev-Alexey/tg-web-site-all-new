import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {Field, Form, FormSpy} from 'react-final-form';
import Typography from '../Typography/Typography';
import AppForm from '../AppForm/AppForm';
import {email, required, phone} from '../Form/Validation';
import RFTextField from '../Form/RFTextField';
import FormButton from '../Form/FormButton';
import FormFeedback from '../Form/FormFeedback';
import withRoot from '../WithRoot/WithRoot';
import CloseIcon from '@mui/icons-material/Close';

const productionUrl = 'https://elenakorneva.site/api/auth/sendPaymentDataFromReact';
const developmentUrl = 'http://localhost:8080/api/auth/sendPaymentDataFromReact';

function SignUp({link, closeModal}) {
    const [sent, setSent] = React.useState(false);
    const [formData, setFormData] = useState({});
    const validate = (values) => {
        const errors = required(['firstName', 'lastName', 'email', 'phone'], values);

        if (!errors.email) {
            const emailError = email(values.email);
            if (emailError) {
                errors.email = emailError;
            }
        }
        if (!errors.phone) {
            const phoneError = phone(values.phone);
            if (phoneError) {
                errors.phone = phoneError;
            }
        }
        return errors;
    };

    const handleSubmit = (values) => {
        setSent(true);

        // Store the form data in the state
        setFormData(values);
        const add = {index: link.index, price: link.price, course: link.course}
        // Send the form data to the backend
        const mergedData = {...values, ...add};
        sendFormDataToBackend(mergedData); // Call the function to send the data
    };

    const sendFormDataToBackend = (formData) => {
        // Make a POST request to your backend API
        console.log('formData - ', formData)
        const url = process.env.NODE_ENV === 'production' ? productionUrl : developmentUrl;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json()) // Распарсить JSON-ответ
            .then(data => {
                // Обработать ответ, извлечь data
                const resultData = data.data;
                console.log(resultData);
                setSent(false);
                window.location.href = resultData;
                closeModal();
                // window.open(resultData, '_blank');
                // Далее вы можете делать что-то с resultData
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    };

    return (
        <React.Fragment>
            <AppForm>
                <React.Fragment>
                    <div style={{position: 'relative'}}>
                        <CloseIcon style={{position: 'absolute', top: -30, right: -20}} onClick={closeModal}/>
                        <Typography variant="h4" gutterBottom marked="center" align="center" sx={{fontSize: 22}}>
                            {link.title}
                        </Typography>
                        <Typography variant="h5" gutterBottom marked="center" align="center">
                            Цена {link.price} руб.
                        </Typography>
                    </div>
                </React.Fragment>
                <Form
                    onSubmit={handleSubmit}
                    subscription={{submitting: true}}
                    validate={validate}
                >
                    {({handleSubmit: handleSubmit2, submitting}) => (
                        <Box component="form" onSubmit={handleSubmit2} noValidate sx={{mt: 6}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        autoFocus
                                        component={RFTextField}
                                        disabled={submitting || sent}
                                        fullWidth
                                        label="Ваше имя"
                                        name="firstName"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        component={RFTextField}
                                        disabled={submitting || sent}
                                        fullWidth
                                        label="Ваша фамилия"
                                        name="lastName"
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Field
                                autoComplete="email"
                                component={RFTextField}
                                disabled={submitting || sent}
                                fullWidth
                                label="Ваш Email"
                                margin="normal"
                                name="email"
                                required
                            />
                            <Field
                                autoComplete="phone"
                                fullWidth
                                component={RFTextField}
                                disabled={submitting || sent}
                                required
                                name="phone"
                                label="Ваш номер телефона"
                                type="phone"
                                margin="normal"
                            />
                            <Field
                                autoComplete="promo"
                                fullWidth
                                component={RFTextField}
                                disabled={submitting || sent}
                                name="promo"
                                label="Введите промокод"
                                type="text"
                                margin="normal"
                            />
                            <FormSpy subscription={{submitError: true}}>
                                {({submitError}) =>
                                    submitError ? (
                                        <FormFeedback error sx={{mt: 2}}>
                                            {submitError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </FormSpy>
                            <FormButton
                                sx={{mt: 3, mb: 2}}
                                disabled={submitting || sent}
                                color="secondary"
                                fullWidth
                            >
                                {submitting || sent ? 'Загрузка…' : 'Оплатить'}
                            </FormButton>
                        </Box>
                    )}
                </Form>
            </AppForm>
        </React.Fragment>
    );
}

export default withRoot(SignUp);
