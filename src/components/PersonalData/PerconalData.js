import React from 'react';
import {
    Container,
    Typography,
    Box,
    Paper,
    Divider,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';
import {
    CheckCircle as CheckCircleIcon,
    Gavel as GavelIcon,
    Security as SecurityIcon,
    Download as DownloadIcon
} from '@mui/icons-material';

const ConsentTextDisplay = () => {
    const consentTextSections = [
        {
            title: '1. Общие положения',
            content: `Настоящее Согласие на обработку персональных данных (далее – Согласие) предоставляется 
      Корневой Елене Викторовне (самозанятой), являющейся оператором персональных данных, в соответствии с 
      требованиями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных».`
        },
        {
            title: '2. Состав персональных данных',
            content: `Я даю согласие на обработку следующих персональных данных:<br/>
      • Фамилия, имя, отчество<br/>
      • Дата рождения<br/>
      • Контактный телефон<br/>
      • Адрес электронной почты<br/>
      • Паспортные данные<br/>
      • Адрес регистрации<br/>
      • Данные о ребенке (ФИО, дата рождения, особенности развития)`
        },
        {
            title: '3. Цели обработки',
            content: `Обработка персональных данных осуществляется в следующих целях:<br/>
      • Оказание консультационных услуг в сфере детской психологии и развития<br/>
      • Заключение и исполнение договора на оказание услуг<br/>
      • Информирование о проводимых мероприятиях и программах<br/>
      • Обратная связь и коммуникация в процессе оказания услуг`
        },
        {
            title: '4. Способы обработки',
            content: `Обработка персональных данных осуществляется как с использованием средств автоматизации, 
      так и без использования таких средств, включая сбор, запись, систематизацию, накопление, хранение, 
      уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), 
      обезличивание, блокирование, удаление, уничтожение персональных данных.`
        },
        {
            title: '5. Срок действия согласия',
            content: `Согласие действует с момента его подписания до момента отзыва в письменной форме. 
      Отзыв согласия не влияет на законность обработки персональных данных, осуществленной до момента отзыва.`
        },
        {
            title: '6. Права субъекта персональных данных',
            content: `Я подтверждаю, что мне разъяснены мои права как субъекта персональных данных, 
      установленные главой 3 Федерального закона №152-ФЗ, в том числе право:<br/>
      • На получение информации, касающейся обработки моих персональных данных<br/>
      • На уточнение, блокирование или уничтожение персональных данных<br/>
      • На отзыв настоящего согласия<br/>
      • На обжалование действий или бездействия оператора`
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <SecurityIcon sx={{ fontSize: 36, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" component="h3" fontWeight={600} gutterBottom sx={{fontSize: {xs: 24, md: 36}}}>
                    Текст согласия на обработку персональных данных
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Официальный документ для ознакомления
                </Typography>
            </Box>

            {/* Информационный блок */}
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    mb: 6,
                    backgroundColor: '#f0f7ff',
                    border: '1px solid #1976d2',
                    borderRadius: 2
                }}
            >
                <Typography variant="body1" paragraph>
                    <GavelIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    <strong>Внимание:</strong> Данный документ является официальным согласием на обработку
                    персональных данных в соответствии с требованиями законодательства РФ.
                    Заполнение и подписание данного согласия является обязательным условием для оказания услуг.
                </Typography>
            </Paper>

            {/* Основной текст согласия */}
            <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, mb: 6 }}>
                {consentTextSections.map((section, index) => (
                    <Box key={index} sx={{ mb: index === consentTextSections.length - 1 ? 0 : 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            {section.title}
                        </Typography>

                        {/* Правильный синтаксис для dangerouslySetInnerHTML */}
                        <Typography
                            variant="body1"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                            paragraph
                        />

                        {index < consentTextSections.length - 1 && <Divider sx={{ my: 3 }} />}
                    </Box>
                ))}
            </Paper>

            {/* Контактные данные оператора */}
            <TableContainer component={Paper} variant="outlined" sx={{ mb: 6 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                Оператор персональных данных
                            </TableCell>
                            <TableCell>Корнева Елена Викторовна (самозанятая)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                Адрес для корреспонденции
                            </TableCell>
                            <TableCell>г. Москва</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                Электронная почта
                            </TableCell>
                            <TableCell>info@mrk.digital</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                Основание обработки
                            </TableCell>
                            <TableCell>Согласие субъекта персональных данных</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                Срок хранения данных
                            </TableCell>
                            <TableCell>5 лет с момента окончания оказания услуг</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Кнопки действий */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Button
                    variant="outlined"
                    href="/privacy"
                >
                    Политика конфиденциальности
                </Button>
            </Box>
        </Container>
    );
};

export default ConsentTextDisplay;