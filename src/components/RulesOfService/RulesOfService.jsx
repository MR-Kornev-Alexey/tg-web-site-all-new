import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Button,
    Grid,
    Card,
    CardContent,
    Alert,
    Link,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Chip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    Description as DescriptionIcon,
    Gavel as GavelIcon,
    AccessTime as AccessTimeIcon,
    Payment as PaymentIcon,
    Cancel as CancelIcon,
    CheckCircle as CheckCircleIcon,
    Warning as WarningIcon,
    Help as HelpIcon,
    Download as DownloadIcon,
    Print as PrintIcon,
    Share as ShareIcon,
    Article as ArticleIcon,
    Phone as PhoneIcon,
    Email as EmailIcon
} from '@mui/icons-material';

const ServiceRules = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState({ title: '', content: '' });

    const handleDialogOpen = (title, content) => {
        setDialogContent({ title, content });
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Правила оказания услуг - Елена Корнева',
                    text: 'Ознакомьтесь с правилами оказания консультационных услуг',
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Ошибка при использовании Web Share API:', error);
            }
        } else {
            // Fallback для браузеров без поддержки Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert('Ссылка скопирована в буфер обмена!');
        }
    };

    const serviceRulesSections = [
        {
            id: 'general',
            title: '1. Общие положения',
            icon: <ArticleIcon />,
            content: (
                <>
                    <Typography variant="body1" paragraph>
                        1.1. Настоящие Правила оказания услуг (далее — Правила) регулируют порядок оказания
                        консультационных услуг в сфере детской психологии и развития (далее — Услуги).
                    </Typography>
                    <Typography variant="body1" paragraph>
                        1.2. Исполнителем Услуг является Корнева Елена (самозанятая), далее — Исполнитель.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        1.3. Заказчиком Услуг является физическое лицо, заключившее с Исполнителем договор
                        на оказание Услуг, далее — Заказчик.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        1.4. Оказание Услуг осуществляется на условиях настоящих Правил и Публичной оферты.
                    </Typography>
                </>
            )
        },
        {
            id: 'services',
            title: '2. Перечень оказываемых услуг',
            icon: <CheckCircleIcon />,
            content: (
                <>
                    <Typography variant="body1" paragraph>
                        2.1. Исполнитель оказывает следующие виды Услуг:
                    </Typography>
                    <List dense sx={{ pl: 2, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Стратегическая сессия (разовая глубокая консультация)" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Персональное сопровождение семьи" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Диагностика развития ребенка" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Консультации по вопросам воспитания и развития" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Разработка индивидуальных программ развития" />
                        </ListItem>
                    </List>
                    <Typography variant="body1" paragraph>
                        2.2. Подробное описание каждой Услуги и условия её оказания размещены на сайте Исполнителя.
                    </Typography>
                </>
            )
        },
        {
            id: 'order',
            title: '3. Порядок заказа услуг',
            icon: <AccessTimeIcon />,
            content: (
                <>
                    <Typography variant="body1" paragraph>
                        3.1. Заказ Услуг осуществляется через Telegram-бота, сайт Исполнителя или по электронной почте.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        3.2. Для заказа Услуги Заказчик должен:
                    </Typography>
                    <List dense sx={{ pl: 2, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Выбрать вид Услуги" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Оставить заявку с контактными данными" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Согласовать дату и время оказания Услуги" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Оплатить Услугу в соответствии с выбранным тарифом" />
                        </ListItem>
                    </List>
                    <Typography variant="body1" paragraph>
                        3.3. После получения оплаты Исполнитель подтверждает заказ и направляет Заказчику
                        необходимые инструкции.
                    </Typography>
                </>
            )
        },
        {
            id: 'payment',
            title: '4. Оплата услуг',
            icon: <PaymentIcon />,
            content: (
                <>
                    <Typography variant="body1" paragraph>
                        4.1. Стоимость Услуг определяется в соответствии с действующими тарифами,
                        размещенными на сайте Исполнителя.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        4.2. Оплата осуществляется одним из следующих способов:
                    </Typography>
                    <List dense sx={{ pl: 2, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Банковской картой через платежную систему" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Переводом на расчетный счет" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Через систему быстрых платежей (СБП)" />
                        </ListItem>
                    </List>
                    <Typography variant="body1" paragraph>
                        4.3. Оплата должна быть произведена не позднее чем за 24 часа до начала оказания Услуги.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        4.4. Исполнитель предоставляет чек об оплате в электронном виде.
                    </Typography>
                </>
            )
        },
        {
            id: 'cancellation',
            title: '5. Отмена и перенос услуг',
            icon: <CancelIcon />,
            content: (
                <>
                    <Typography variant="body1" paragraph>
                        5.1. Заказчик вправе отменить или перенести Услугу при условии уведомления Исполнителя:
                    </Typography>
                    <List dense sx={{ pl: 2, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText
                                primary="Более чем за 48 часов до начала — полный возврат оплаты"
                                secondary={<Chip label="100% возврат" size="small" color="success" />}
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText
                                primary="От 24 до 48 часов до начала — возврат 50% от стоимости"
                                secondary={<Chip label="50% возврат" size="small" color="warning" />}
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText
                                primary="Менее чем за 24 часа до начала — возврат не производится"
                                secondary={<Chip label="Без возврата" size="small" color="error" />}
                            />
                        </ListItem>
                    </List>
                    <Typography variant="body1" paragraph>
                        5.2. В случае отмены Услуги по инициативе Исполнителя производится полный возврат оплаты.
                    </Typography>
                </>
            )
        },
        {
            id: 'responsibilities',
            title: '6. Обязанности сторон',
            icon: <GavelIcon />,
            content: (
                <>
                    <Typography variant="h6" gutterBottom>
                        6.1. Обязанности Исполнителя:
                    </Typography>
                    <List dense sx={{ pl: 2, mb: 3 }}>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Оказать Услуги в соответствии с заявленным описанием" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Соблюдать конфиденциальность информации, полученной от Заказчика" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Информировать Заказчика об изменениях в условиях оказания Услуг" />
                        </ListItem>
                    </List>

                    <Typography variant="h6" gutterBottom>
                        6.2. Обязанности Заказчика:
                    </Typography>
                    <List dense sx={{ pl: 2, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Своевременно оплачивать Услуги" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Предоставлять достоверную информацию, необходимую для оказания Услуг" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Соблюдать рекомендации и инструкции Исполнителя" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Уважительно относиться к Исполнителю и соблюдать этику общения" />
                        </ListItem>
                    </List>
                </>
            )
        },
        {
            id: 'liability',
            title: '7. Ответственность сторон',
            icon: <WarningIcon />,
            content: (
                <>
                    <Typography variant="body1" paragraph>
                        7.1. Исполнитель несет ответственность за качество оказываемых Услуг в соответствии
                        с законодательством Российской Федерации.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        7.2. Исполнитель не несет ответственности за:
                    </Typography>
                    <List dense sx={{ pl: 2, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Несоблюдение Заказчиком рекомендаций Исполнителя" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Действия третьих лиц" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Обстоятельства непреодолимой силы (форс-мажор)" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', py: 0.5 }}>
                            <ListItemText primary="Результаты, достигнутые Заказчиком после оказания Услуг" />
                        </ListItem>
                    </List>
                    <Typography variant="body1" paragraph>
                        7.3. Максимальная ответственность Исполнителя ограничивается стоимостью оказанной Услуги.
                    </Typography>
                </>
            )
        },
        {
            id: 'confidentiality',
            title: '8. Конфиденциальность',
            icon: <DescriptionIcon />,
            content: (
                <>
                    <Typography variant="body1" paragraph>
                        8.1. Исполнитель обязуется не разглашать конфиденциальную информацию,
                        полученную от Заказчика в процессе оказания Услуг.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        8.2. Заказчик дает согласие на обработку персональных данных в соответствии
                        с Политикой конфиденциальности.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        8.3. Исполнитель вправе использовать обезличенные данные для статистики и
                        улучшения качества услуг.
                    </Typography>
                </>
            )
        }
    ];

    const importantNotes = [
        {
            title: 'Сроки оказания услуг',
            content: 'Стратегическая сессия: 2-2.5 часа. Персональное сопровождение: от 3 месяцев.'
        },
        {
            title: 'Гарантии',
            content: 'Исполнитель гарантирует профессиональный подход, но не гарантирует конкретных результатов.'
        },
        {
            title: 'Формат работы',
            content: 'Онлайн (Zoom, Skype, Telegram) или очно в Москве по предварительной договоренности.'
        }
    ];

    return (
        <>
            <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
                {/* Заголовок страницы */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <DescriptionIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                        Правила оказания услуг
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
                        Условия и порядок предоставления консультационных услуг в сфере детской психологии и развития
                    </Typography>
                </Box>

                {/* Информационный блок */}
                <Alert
                    severity="info"
                    icon={<GavelIcon />}
                    sx={{ mb: 6, '& .MuiAlert-icon': { fontSize: 28 } }}
                >
                    <Typography variant="body1" fontWeight={600}>
                        Внимание! Настоящие Правила являются неотъемлемой частью договора на оказание услуг.
                        Заказывая услуги, вы подтверждаете, что ознакомились и согласны с данными Правилами.
                    </Typography>
                </Alert>

                {/* Основной контент с аккордеонами */}
                <Box sx={{ mb: 8 }}>
                    {serviceRulesSections.map((section) => (
                        <Accordion
                            key={section.id}
                            defaultExpanded={section.id === 'general'}
                            elevation={0}
                            sx={{
                                mb: 2,
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 2,
                                '&:before': { display: 'none' },
                                '&.Mui-expanded': {
                                    borderColor: 'primary.main',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                                }
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    backgroundColor: 'background.paper',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: '8px 8px 0 0',
                                    '&.Mui-expanded': {
                                        backgroundColor: 'rgba(25, 118, 210, 0.04)'
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                    <Box sx={{
                                        mr: 2,
                                        color: 'primary.main',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        {section.icon}
                                    </Box>
                                    <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                                        {section.title}
                                    </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails sx={{ p: 4 }}>
                                {section.content}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                {/* Важные заметки */}
                <Grid container spacing={3} sx={{ mb: 8 }}>
                    {importantNotes.map((note, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                variant="outlined"
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderTop: '4px solid',
                                    borderTopColor: index === 0 ? '#4caf50' : index === 1 ? '#ff9800' : '#2196f3',
                                    '&:hover': {
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                                    }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                                        {note.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {note.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Контактная информация */}
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3, md: 4 },
                        mb: 6,
                        backgroundColor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2
                    }}
                >
                    <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
                        Контактная информация
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ fontWeight: 600, width: '40%' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <PhoneIcon fontSize="small" />
                                            Телефон для вопросов
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Link href="tel:+79999999999" sx={{ textDecoration: 'none' }}>
                                            +7 (999) 999-99-99
                                        </Link>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <EmailIcon fontSize="small" />
                                            Электронная почта
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Link href="mailto:info@mrk.digital" sx={{ textDecoration: 'none' }}>
                                            info@mrk.digital
                                        </Link>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                        Режим работы
                                    </TableCell>
                                    <TableCell>Пн-Пт: 10:00-20:00, Сб: 11:00-17:00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                        Юридический статус
                                    </TableCell>
                                    <TableCell>Самозанятая, Корнева Елена</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

                {/* Юридическая информация */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 3,
                        backgroundColor: 'rgba(0,0,0,0.02)',
                        borderLeft: '4px solid',
                        borderLeftColor: 'primary.main',
                        borderRadius: 2
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        <strong>Дата вступления в силу:</strong> 01 ноября 2023 года
                        <br />
                        <strong>Действующие документы:</strong>
                        <Link href="/offer" sx={{ ml: 1, mr: 2 }}>Публичная оферта</Link>
                        <Link href="/privacy" sx={{ ml: 1, mr: 2 }}>Политика конфиденциальности</Link>
                        <Link href="/personal">Согласие на обработку данных</Link>
                        <br />
                        <strong>Адрес для корреспонденции:</strong> г. Москва
                        <br />
                        <strong>Исполнитель:</strong> Корнева Елена Викторовна (самозанятая)
                    </Typography>
                </Paper>
            </Container>

            {/* Диалоговое окно */}
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    {dialogContent.title}
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        {dialogContent.content}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Закрыть</Button>
                    <Button
                        variant="contained"
                        href="mailto:info@mrk.digital"
                        onClick={handleDialogClose}
                    >
                        Написать на почту
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ServiceRules;