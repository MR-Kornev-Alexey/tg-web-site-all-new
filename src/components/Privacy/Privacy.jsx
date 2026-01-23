import React, { useState } from 'react';
import {
    Container, Box, Typography, Accordion, AccordionSummary,
    AccordionDetails, Button, Link, Divider, List, ListItem,
    ListItemText, Paper, Fade
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DownloadIcon from '@mui/icons-material/Download';

export default function PrivacyPolicyPage() {
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sections = [
        {
            id: 'section1',
            title: '1. Определение терминов',
            content: (
                <>
                    <Typography paragraph>
                        1.1 В настоящей Политике конфиденциальности используются следующие термины:
                    </Typography>

                    <List dense sx={{ pl: 4, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="Администрация сайтов (ботов) (далее – Администрация) – уполномоченные сотрудники на управление сайтами и ботами врача и психолога Елены Корневой, которые организуют и (или) осуществляют обработку персональных данных, а также определяют цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными."
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="Персональные данные - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных)."
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="Обработка персональных данных - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных."
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="Конфиденциальность персональных данных - обязательное для соблюдения Администрацией или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания."
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="Ресурсы Елены Корневой - это совокупность связанных между собой веб-страниц, размещенных в сети Интернет по уникальным адресам (URL): elenakorneva.ru, mrk.digital, kornevgmbh.com а также их субдоменах"
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="Субдомены - это страницы или совокупность страниц, расположенные на доменах третьего уровня, принадлежащие Ресурсам Елены Корневой, а также другие временные страницы, внизу который указана контактная информация Администрации."
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="Пользователь Ресурсов Елены Корневой (далее Пользователь) – лицо, имеющее доступ к Ресурсам Елены Корневой, посредством сети Интернет и использующее информацию, материалы и продукты Ресурсов Елены Корневой."
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="Cookies — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта."
                            />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText
                                primary="IP-адрес — уникальный сетевой адрес узла в компьютерной сети, через который Пользователь получает доступ на Ресурсы Елены Корневой."
                            />
                        </ListItem>
                    </List>
                </>
            )
        },
        {
            id: 'section2',
            title: '2. Общие положения',
            content: (
                <>
                    <Typography paragraph>
                        2.1. Использование Ресурсов Елены Корневой Пользователем означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.
                    </Typography>
                    <Typography paragraph>
                        2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование Ресурсов Елены Корневой.
                    </Typography>
                    <Typography paragraph>
                        2.3. Настоящая Политика конфиденциальности применяется к Ресурсам Елены Корневой. Ресурсы Елены Корневой не контролируют и не несут ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на Ресурсах Елены Корневой.
                    </Typography>
                    <Typography paragraph>
                        2.4. Администрация не проверяет достоверность персональных данных, предоставляемых Пользователем.
                    </Typography>
                </>
            )
        },
        {
            id: 'section3',
            title: '3. Предмет политики конфиденциальности',
            content: (
                <>
                    <Typography paragraph>
                        3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации при регистрации на Ресурсах Елены Корневой или при подписке на информационную e-mail рассылку.
                    </Typography>
                    <Typography paragraph>
                        3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения форм на Ресурсах Елены Корневой и включают в себя следующую информацию:
                    </Typography>
                    <List dense sx={{ pl: 4, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="фамилию, имя, отчество Пользователя;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="фамилию, имя, отчество детей Пользователя, его дата рождения;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="метрические и другие данные ребенка, необходимые для прохождения тестов;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="контактный телефон Пользователя;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="адрес электронной почты (e-mail);" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="место жительство Пользователя (при необходимости);" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="фотографии (при необходимости)." />
                        </ListItem>
                    </List>
                    <Typography paragraph>
                        3.3. Ресурсы Елены Корневой защищают Данные, которые автоматически передаются при посещении страниц и ботов:
                    </Typography>
                    <List dense sx={{ pl: 4, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="IP адрес;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="ID бота;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="информация из cookies;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="информация о браузере;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="время доступа;" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="реферер (адрес предыдущей страницы)." />
                        </ListItem>
                    </List>
                    <Typography paragraph>
                        3.3.1. Отключение cookies может повлечь невозможность доступа к частям сайта, требующим авторизации.
                    </Typography>
                    <Typography paragraph>
                        3.3.2. Ресурсы Елены Корневой осуществляют сбор статистики об IP-адресах своих посетителей. Данная информация используется с целью предотвращения, выявления и решения технических проблем.
                    </Typography>
                    <Typography paragraph>
                        3.4. Любая иная персональная информация неоговоренная выше (история посещения, используемые браузеры, операционные системы и т.д.) подлежит надежному хранению и нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. настоящей Политики конфиденциальности.
                    </Typography>
                </>
            )
        },
        {
            id: 'section4',
            title: '4. Цели сбора персональной информации пользователя',
            content: (
                <>
                    <Typography paragraph>
                        4.1. Персональные данные Пользователя Администрация может использовать в целях:
                    </Typography>
                    <List dense sx={{ pl: 4, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Идентификации Пользователя, зарегистрированного на Ресурсах Елены Корневой для его дальнейшей авторизации." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Предоставления Пользователю доступа к персонализированным данным на Ресурсах Елены Корневой." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Ресурсов Елены Корневой обработки запросов и заявок от Пользователя." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Создания учетной записи для использования частей Ресурсов Елены Корневой, если Пользователь дал согласие на создание учетной записи." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Уведомления Пользователя по электронной почте." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Предоставления Пользователю эффективной технической поддержки при возникновении проблем, связанных с использованием Ресурсов Елены Корневой." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Предоставления Пользователю с его согласия специальных предложений, новостной рассылки и иных сведений от имени Ресурсов Елены Корневой." />
                        </ListItem>
                    </List>
                </>
            )
        },
        {
            id: 'section5',
            title: '5. Способы и сроки обработки персональной информации',
            content: (
                <>
                    <Typography paragraph>
                        5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.
                    </Typography>
                    <Typography paragraph>
                        5.2. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации.
                    </Typography>
                    <Typography paragraph>
                        5.3. При утрате или разглашении персональных данных Администрация вправе не информировать Пользователя об утрате или разглашении персональных данных.
                    </Typography>
                    <Typography paragraph>
                        5.4. Администрация принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
                    </Typography>
                    <Typography paragraph>
                        5.5. Администрация совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.
                    </Typography>
                </>
            )
        },
        {
            id: 'section6',
            title: '6. Права и обязанности сторон',
            content: (
                <>
                    <Typography paragraph>
                        6.1. Пользователь вправе:
                    </Typography>
                    <List dense sx={{ pl: 4, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Принимать свободное решение о предоставлении своих персональных данных, необходимых для использования Ресурсов Елены Корневой и давать согласие на их обработку." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Пользователь имеет право на получение у Администрации информации, касающейся обработки его персональных данных, если такое право не ограничено в соответствии с федеральными законами. Пользователь вправе требовать от Администрации уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав. Для этого достаточно уведомить Администрацию по указаному E-mail адресу." />
                        </ListItem>
                    </List>
                    <Typography paragraph>
                        6.2. Администрация обязана:
                    </Typography>
                    <List dense sx={{ pl: 4, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя, за исключением п.п. 5.2. настоящей Политики Конфиденциальности." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку, обычно используемого для защиты такого рода информации в существующем деловом обороте." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с момента обращения или запроса Пользователя, или его законного представителя либо уполномоченного органа по защите прав субъектов персональных данных на период проверки, в случае выявления недостоверных персональных данных или неправомерных действий." />
                        </ListItem>
                    </List>
                </>
            )
        },
        {
            id: 'section7',
            title: '7. Ответственность сторон',
            content: (
                <>
                    <Typography paragraph>
                        7.1. Администрация, не исполнившая свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством Российской Федерации, за исключением случаев, предусмотренных п.п. 5.2. и 7.2. настоящей Политики Конфиденциальности.
                    </Typography>
                    <Typography paragraph>
                        7.2. В случае утраты или разглашения Конфиденциальной информации Администрация не несёт ответственность, если данная конфиденциальная информация:
                    </Typography>
                    <List dense sx={{ pl: 4, mb: 2 }}>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Стала публичным достоянием до её утраты или разглашения." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Была получена от третьей стороны до момента её получения Администрацией Ресурса." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', pl: 0 }}>
                            <ListItemText primary="Была разглашена с согласия Пользователя." />
                        </ListItem>
                    </List>
                    <Typography paragraph>
                        7.3. Пользователь несет полную ответственность за соблюдение требований законодательства РФ, в том числе законов о рекламе, о защите авторских и смежных прав, об охране товарных знаков и знаков обслуживания, но не ограничиваясь перечисленным, включая полную ответственность за содержание и форму материалов.
                    </Typography>
                    <Typography paragraph>
                        7.4. Пользователь признает, что ответственность за любую информацию (в том числе, но не ограничиваясь: файлы с данными, тексты и т. д.), к которой он может иметь доступ как к части сайта Блог Елены Корневой, несет лицо, предоставившее такую информацию.
                    </Typography>
                    <Typography paragraph>
                        7.5. Пользователь соглашается, что информация, предоставленная ему как часть Ресурсов Елены Корневой, может являться объектом интеллектуальной собственности, права на который защищены и принадлежат другим Пользователям, партнерам или рекламодателям, которые размещают такую информацию на Ресурсах Елены Корневой.
                    </Typography>
                    <Typography paragraph>
                        Пользователь не вправе вносить изменения, передавать в аренду, передавать на условиях займа, продавать, распространять или создавать производные работы на основе такого Содержания (полностью или в части), за исключением случаев, когда такие действия были письменно прямо разрешены собственниками такого Содержания в соответствии с условиями отдельного соглашения.
                    </Typography>
                    <Typography paragraph>
                        7.6. В отношение текстовых материалов (статей, публикаций, находящихся в свободном публичном доступе на Ресурсах Елены Корневой) допускается их распространение при условии, что будет дана ссылка на Ресурсы Елены Корневой.
                    </Typography>
                    <Typography paragraph>
                        7.7. Администрация не несет ответственности перед Пользователем за любой убыток или ущерб, понесенный Пользователем в результате удаления, сбоя или невозможности сохранения какого-либо Содержания и иных коммуникационных данных, содержащихся на Ресурсах Елены Корневой или передаваемых через него.
                    </Typography>
                    <Typography paragraph>
                        7.8. Администрация не несет ответственности за любые прямые или косвенные убытки, произошедшие из-за: использования либо невозможности использования сайта, либо отдельных сервисов; несанкционированного доступа к коммуникациям Пользователя; заявления или поведение любого третьего лица на сайте.
                    </Typography>
                    <Typography paragraph>
                        7.9. Администрация не несет ответственность за какую-либо информацию, размещенную пользователем на сайте Блог Елены Корневой, включая, но не ограничиваясь: информацию, защищенную авторским правом, без прямого согласия владельца авторского права.
                    </Typography>
                </>
            )
        },
        {
            id: 'section8',
            title: '8. Разрешение споров',
            content: (
                <>
                    <Typography paragraph>
                        8.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем и Администрацией, обязательным является предъявление претензии (письменного предложения или предложения в электронном виде о добровольном урегулировании спора).
                    </Typography>
                    <Typography paragraph>
                        8.2. Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно или в электронном виде уведомляет заявителя претензии о результатах рассмотрения претензии.
                    </Typography>
                    <Typography paragraph>
                        8.3. При не достижении соглашения спор будет передан на рассмотрение Арбитражного суда г. Москва.
                    </Typography>
                    <Typography paragraph>
                        8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией применяется действующее законодательство Российской Федерации.
                    </Typography>
                </>
            )
        },
        {
            id: 'section9',
            title: '9. Дополнительные условия',
            content: (
                <>
                    <Typography paragraph>
                        9.1. Администрация вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.
                    </Typography>
                    <Typography paragraph>
                        9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на Ресурсах Елены Корневой если иное не предусмотрено новой редакцией Политики конфиденциальности.
                    </Typography>
                    <Typography paragraph>
                        9.3. Все предложения или вопросы касательно настоящей Политики конфиденциальности следует сообщать по адресу: info@mrk.digital
                    </Typography>
                    <Typography paragraph>
                        9.4. Действующая Политика конфиденциальности размещена на странице по адресу http://elenakorneva.ru/privacy
                    </Typography>
                </>
            )
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
            {/* Шапка с навигацией */}
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 3, md: 4 },
                    mb: 4,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    backgroundColor: '#fafafa'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PrivacyTipIcon sx={{ mr: 2,
                        color: '#1976d2',
                        fontSize: {xs: 24, md: 36} }} />
                    <Box>
                        <Typography variant="h4" component="h1" fontWeight={600} sx={{fontSize: {xs: 24, md: 36}}}>
                            Политика конфиденциальности
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Елена Корнева – врач и психолог
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />


                <Typography variant="body2" color="text.secondary" paragraph>
                    Обновлено: 22 января 2026 года
                    <br />
                    г. Москва, Елена Корнева (самозанятая)
                </Typography>
            </Paper>

            {/* Основной контент с аккордеонами */}
            <Box sx={{ mb: 6 }}>
                <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: '#f5f5f5' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <DescriptionIcon sx={{ mr: 2, color: '#666', mt: 0.5 }} />
                        <Box>
                            <Typography variant="body1" paragraph>
                                Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) распространяется на всю информацию, которую Ресурсы Елены Корневой могут получить о Пользователе.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Политика действует при использовании:
                            </Typography>
                            <List dense sx={{ pl: 2, mb: 2 }}>
                                <ListItem sx={{ display: 'list-item', py: 0 }}>
                                    <ListItemText primary="Сайтов на доменах elenakorneva.ru, mrk.digital, kornevgmbh.com (включая все поддомены)" />
                                </ListItem>
                                <ListItem sx={{ display: 'list-item', py: 0 }}>
                                    <ListItemText primary="Telegram, Max и ВК ботов, используемые в интересах Елены Корневой " />
                                </ListItem>
                                <ListItem sx={{ display: 'list-item', py: 0 }}>
                                    <ListItemText primary="Сопутствующих программ и продуктов" />
                                </ListItem>
                            </List>
                            <Typography variant="body1">
                                Под Ресурсами Елены Корневой понимаются все перечисленные выше сайты, боты и программы.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>

                {sections.map((section) => (
                    <Accordion
                        key={section.id}
                        expanded={expanded === section.id}
                        onChange={handleAccordionChange(section.id)}
                        sx={{
                            mb: 2,
                            '&:before': { display: 'none' },
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px !important',
                            overflow: 'hidden'
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                backgroundColor: expanded === section.id ? '#f0f7ff' : '#fff',
                                borderBottom: expanded === section.id ? '1px solid #e0e0e0' : 'none',
                                '&:hover': { backgroundColor: '#f5f5f5' }
                            }}
                        >
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                                {section.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ p: 3, backgroundColor: '#fafafa' }}>
                            <Fade in={expanded === section.id}>
                                <Box>{section.content}</Box>
                            </Fade>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            {/* Контактная информация и быстрая навигация */}
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 3, md: 4 },
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    backgroundColor: '#f5f5f5'
                }}
            >
                <Typography variant="h6" component="h2" gutterBottom fontWeight={600}>
                    Контактная информация
                </Typography>

                <List dense>
                    <ListItem sx={{ px: 0 }}>
                        <ListItemText
                            primary="Адрес для вопросов по политике конфиденциальности:"
                            secondary="info@mrk.digital"
                            primaryTypographyProps={{ fontWeight: 500 }}
                        />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                        <ListItemText
                            primary="Основные сайты:"
                            secondary={
                                <>
                                    <Link href="https://elenakorneva.ru" target="_blank" sx={{ display: 'block' }}>
                                        elenakorneva.ru
                                    </Link>
                                    <Link href="https://mrk.digital" target="_blank" sx={{ display: 'block' }}>
                                        mrk.digital
                                    </Link>
                                    <Link href="https://kornevgmbh.com" target="_blank" sx={{ display: 'block' }}>
                                        kornevgmbh.com
                                    </Link>
                                </>
                            }
                            primaryTypographyProps={{ fontWeight: 500 }}
                        />
                    </ListItem>
                </List>
            </Paper>

            {/* Кнопка для возврата вверх */}
            <Fade in={window.scrollY > 300}>
                <Button
                    variant="contained"
                    onClick={handleBackToTop}
                    startIcon={<ArrowUpwardIcon />}
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        right: 24,
                        borderRadius: '50%',
                        minWidth: 56,
                        width: 56,
                        height: 56,
                        boxShadow: 3
                    }}
                />
            </Fade>
        </Container>
    );
}