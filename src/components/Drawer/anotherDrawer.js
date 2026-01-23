import React, {useEffect, useState} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from "@mdi/react";
import {
    mdiMessageCogOutline,
    mdiHomeOutline,
    mdiLaptopAccount,
    mdiAccountMultiple,
    mdiListBoxOutline,
    mdiNoteMultipleOutline,
    mdiFileDocumentCheckOutline, mdiShieldAccount, mdiFileDocument, mdiAccountLock, mdiGavel, mdiClipboardCheck,
} from "@mdi/js";

import "./Drawer.css"
import {Link} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';


const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function DrawerLeft() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const supportSupport = [
        {
            id: 1,
            title: "Политика конфиденциальности",
            icon: <Icon path={mdiShieldAccount} size={1} />,
            link: "/privacy",
            color: "#1976d2", // синий
            description: "Правила обработки и защиты персональных данных"
        },
        {
            id: 2,
            title: "Пользовательское соглашение",
            icon: <Icon path={mdiFileDocument} size={1} />,
            link: "/terms",
            color: "#2e7d32", // зеленый
            description: "Условия использования сайта и услуг"
        },
        {
            id: 3,
            title: "Согласие на обработку персональных данных",
            icon: <Icon path={mdiAccountLock} size={1} />,
            link: "/personal",
            color: "#ed6c02", // оранжевый
            description: "Форма согласия на обработку данных"
        },
        {
            id: 4,
            title: "Публичная оферта",
            icon: <Icon path={mdiGavel} size={1} />,
            link: "/offer",
            color: "#9c27b0", // фиолетовый
            description: "Договор на оказание консультационных услуг"
        },
        {
            id: 5,
            title: "Правила оказания услуг",
            icon: <Icon path={mdiClipboardCheck} size={1} />,
            link: "/service-rules",
            color: "#d32f2f", // красный
            description: "Условия и порядок предоставления услуг"
        }
    ];
    const supportMain = [
        {
            id: 0,
            title: "Главная",
            icon: <Icon path={mdiHomeOutline} size={1}/>,
            link: "/",
            checkStar: false
        },
        {
            id: 3,
            title: "Консультация",
            icon: <Icon path={mdiLaptopAccount} size={1}/>,
            checkStar: true,
            link: "/consultation"
        },
        {
            id: 2,
            title: "Ведение",
            icon: <Icon path={mdiAccountMultiple} size={1}/>,
            checkStar: false,
            link: "/conduct"
        },
        {
            id: 1,
            title: "Курсы",
            icon: <Icon path={mdiListBoxOutline} size={1}/>,
            checkStar: false,
            link: "/course"
        },
        {
            id: 2,
            title: "Мини-курсы",
            icon: <Icon path={mdiListBoxOutline} size={1}/>,
            checkStar: false,
            link: "mini-course"
        },
        {
            id: 5,
            title: "Зачем я веду блог",
            icon: <Icon path={mdiListBoxOutline} size={1}/>,
            checkStar: false,
            link: "manifest"
        }
    ]

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open} sx={{backgroundColor: "white"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ color: "#2f2f2f",mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link
                        href="https://t.me/MrkDigital?text=Запрос формата работы"
                        target="_blank"
                        underline="none"
                        sx={{
                            maxWidth: { xs: 44, sm: 260 },
                            height: { xs: 44, sm: 40 },
                            px: { xs: 1, sm: 2 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: { xs: 0, sm: 1 },
                            backgroundColor: '#f5f5f5',
                            color: '#666',
                            transition: 'all .2s ease',
                            whiteSpace: 'nowrap',

                            '&:hover': {
                                backgroundColor: '#eaeaea',
                                textDecoration: 'none',
                            },
                        }}
                    >
                        <TelegramIcon
                            sx={{
                                fontSize: { xs: 20, sm: 22 },
                            }}
                        />

                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                fontSize: { sm: 14 },
                                fontWeight: 500,
                            }}
                        >
                            Запросить формат работы
                        </Box>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {supportMain.map((index) => (
                        <ListItem key={index.id} disablePadding>
                               <Link href={index.link}>
                                    <ListItemButton>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {index.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={index.title} sx={{opacity: open ? 1 : 0}}
                                                      className="listItemText"/>
                                    </ListItemButton>
                                </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {supportSupport.map((index) => (
                        <ListItem key={index.id} disablePadding>
                            <Link href={index.link}>
                                <ListItemButton>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={index.title} sx={{opacity: open ? 1 : 0}}
                                                  className="listItemText"/>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Drawer>
            <Main open={open}>
                <Typography paragraph>
                </Typography>
            </Main>
        </Box>
    );
}
