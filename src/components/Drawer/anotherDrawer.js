import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
    mdiFileDocumentCheckOutline,
    mdiShieldAccount,
    mdiFileDocument,
    mdiAccountLock,
    mdiGavel,
    mdiClipboardCheck,
} from "@mdi/js";
import { Link, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';

const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
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
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#FCF9F3', // Silk Parchment
    boxShadow: '0 2px 8px rgba(166, 124, 82, 0.1)',
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    minHeight: 64,
    backgroundColor: '#FCF9F3', // Silk Parchment
    color: '#3E2F28', // Bitter Chocolate
    borderBottom: '1px solid rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
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
            color: "#D95D2B", // Signature Orange
        },
        {
            id: 2,
            title: "Пользовательское соглашение",
            icon: <Icon path={mdiFileDocument} size={1} />,
            link: "/terms",
            color: "#A67C52", // Saddle Tan
        },
        {
            id: 3,
            title: "Согласие на обработку персональных данных",
            icon: <Icon path={mdiAccountLock} size={1} />,
            link: "/personal",
            color: "#3E2F28", // Bitter Chocolate
        },
        {
            id: 4,
            title: "Публичная оферта",
            icon: <Icon path={mdiGavel} size={1} />,
            link: "/offer",
            color: "#A67C52", // Saddle Tan
        },
        {
            id: 5,
            title: "Правила оказания услуг",
            icon: <Icon path={mdiClipboardCheck} size={1} />,
            link: "/service-rules",
            color: "#D95D2B", // Signature Orange
        }
    ];

    const supportMain = [
        {
            id: 0,
            title: "Главная",
            icon: <Icon path={mdiHomeOutline} size={1} />,
            link: "/",
            color: "#D95D2B", // Signature Orange
        },
        {
            id: 1,
            title: "Консультация",
            icon: <Icon path={mdiLaptopAccount} size={1} />,
            link: "/consultation",
            color: "#A67C52", // Saddle Tan
        },
        {
            id: 2,
            title: "Ведение",
            icon: <Icon path={mdiAccountMultiple} size={1} />,
            link: "/conduct",
            color: "#3E2F28", // Bitter Chocolate
        },
        {
            id: 3,
            title: "Курсы",
            icon: <Icon path={mdiListBoxOutline} size={1} />,
            link: "/course",
            color: "#A67C52", // Saddle Tan
        },
        {
            id: 4,
            title: "Мини-курсы",
            icon: <Icon path={mdiNoteMultipleOutline} size={1} />,
            link: "/mini-course",
            color: "#3E2F28", // Bitter Chocolate
        },
        {
            id: 5,
            title: "Зачем я веду блог",
            icon: <Icon path={mdiMessageCogOutline} size={1} />,
            link: "/manifest",
            color: "#D95D2B", // Signature Orange
        }
    ];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ minHeight: 64 }}>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            color: '#3E2F28', // Silk Parchment
                            mr: 2,
                            ...(open && { display: 'none' }),
                            '&:hover': {
                                backgroundColor: 'rgba(252, 249, 243, 0.3',
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link
                        href="https://t.me/MrkDigital?text=Запрос формата работы"
                        target="_blank"
                        underline="none"
                        sx={{
                            height: 44,
                            px: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1.5,
                            backgroundColor: 'transparent',
                            color: '#3E2F28', // Bitter Chocolate
                            fontSize: 14,
                            fontWeight: 500,
                            borderRadius: '50px',
                            transition: 'all 0.3s ease',
                            textTransform: 'none',
                            border: '1px solid #A67C52', // Saddle Tan
                            '&:hover': {
                                backgroundColor: 'rgba(166, 124, 82, 0.05)',
                                borderColor: '#D95D2B', // Signature Orange
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        <TelegramIcon sx={{ fontSize: 20 }} />
                        Запросить формат работы
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
                        backgroundColor: '#FCF9F3', // Silk Parchment
                        borderRight: '1px solid rgba(166, 124, 82, 0.2)', // Saddle Tan с прозрачностью
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography variant="h6" sx={{ fontWeight: 400, color: '#3E2F28' }}>
                        Навигация
                    </Typography>
                    <IconButton
                        onClick={handleDrawerClose}
                        sx={{
                            color: '#3E2F28', // Bitter Chocolate
                            '&:hover': {
                                backgroundColor: 'rgba(166, 124, 82, 0.1)',
                            }
                        }}
                    >
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider sx={{ borderColor: 'rgba(166, 124, 82, 0.2)' }} />

                {/* Основные разделы */}
                <Box sx={{ p: 3 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: '#A67C52', // Saddle Tan
                            fontWeight: 500,
                            mb: 2,
                            pl: 1,
                            fontSize: 13,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}
                    >
                        Основные разделы
                    </Typography>
                    <List sx={{ p: 0 }}>
                        {supportMain.map((item) => (
                            <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                                <Link
                                    href={item.link}
                                    underline="none"
                                    sx={{ width: '100%' }}
                                >
                                    <ListItemButton
                                        sx={{
                                            borderRadius: '8px',
                                            py: 1.5,
                                            pl: 2,
                                            transition: 'all 0.2s ease',
                                            borderLeft: '3px solid transparent',
                                            '&:hover': {
                                                backgroundColor: 'rgba(217, 93, 43, 0.05)',
                                                borderLeft: `3px solid ${item.color}`,
                                                transform: 'translateX(4px)',
                                            }
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 40 }}>
                                            <Box
                                                sx={{
                                                    color: item.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.title}
                                            primaryTypographyProps={{
                                                fontSize: 15,
                                                fontWeight: 400,
                                                color: '#3E2F28', // Bitter Chocolate
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Divider sx={{ my: 1, borderColor: 'rgba(166, 124, 82, 0.2)' }} />

                {/* Документы */}
                <Box sx={{ p: 3, pt: 2 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: '#A67C52', // Saddle Tan
                            fontWeight: 500,
                            mb: 2,
                            pl: 1,
                            fontSize: 13,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}
                    >
                        Документы
                    </Typography>
                    <List sx={{ p: 0 }}>
                        {supportSupport.map((item) => (
                            <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                                <Link
                                    href={item.link}
                                    underline="none"
                                    sx={{ width: '100%' }}
                                >
                                    <ListItemButton
                                        sx={{
                                            borderRadius: '6px',
                                            py: 1,
                                            pl: 2,
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(166, 124, 82, 0.05)',
                                            }
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Box
                                                sx={{
                                                    color: item.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.title}
                                            primaryTypographyProps={{
                                                fontSize: 13,
                                                fontWeight: 400,
                                                color: '#3E2F28', // Bitter Chocolate
                                                sx: {
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                }
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Информация в подвале дровера */}
                <Box sx={{
                    p: 3,
                    mt: 'auto',
                    backgroundColor: 'rgba(166, 124, 82, 0.05)', // Saddle Tan с прозрачностью
                    borderTop: '1px solid rgba(166, 124, 82, 0.1)' // Saddle Tan с прозрачностью
                }}>
                    <Typography
                        variant="caption"
                        sx={{
                            color: '#A67C52', // Saddle Tan
                            fontSize: 11,
                            lineHeight: 1.4,
                            display: 'block',
                            mb: 0.5,
                            fontWeight: 500
                        }}
                    >
                        "Элита с пеленок"
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            color: 'rgba(62, 47, 40, 0.6)', // Bitter Chocolate с прозрачностью
                            fontSize: 10,
                            lineHeight: 1.3,
                        }}
                    >
                        © {new Date().getFullYear()} Все права защищены
                    </Typography>
                </Box>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box>
    );
}