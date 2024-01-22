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
import {useNavigate} from 'react-router-dom';
import Icon from "@mdi/react";
import {
    mdiAccountChild,
    mdiLogoutVariant,
    mdiMessageCogOutline,
    mdiFolderPlus,
    mdiCartOutline,
    mdiStarFourPoints,
    mdiMultimedia,
    mdiLaptopAccount,
    mdiApplication,
    mdiNoteMultipleOutline,
    mdiFileDocumentCheckOutline,
    mdiHumanBabyChangingTable
} from "@mdi/js";
import {useTelegram} from "../../hooks/useTelegram";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import "./Drawer.css"
import {setDataFromApi} from "../Redux/actions";
import {Link} from "@mui/material";

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
const {user, userId , onClose } = useTelegram();
export default function PersistentDrawerLeft() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [responseData, setResponseData] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const title = useSelector((state) => state.mainTitle);
    const dataUser = useSelector((state) => state.userData);
    const support = [
        {
            id: 1,
            title: "Выход",
            icon: <Icon path={mdiLogoutVariant} size={1}/>,
            command: onClose
        }
    ]
    const supportSupport = [
        {
            id: 0,
            title: "Поддержка",
            icon: <Icon path={mdiMessageCogOutline} size={1}/>,
            link: "https://t.me/mrk_service",
        },
        {
            id: 1,
            title: "Политика конфидициальности",
            icon: <Icon path={mdiNoteMultipleOutline} size={1}/>,
            link: "/privacy",
        },
        {
            id: 2,
            title: "Пользовательское соглашение",
            icon: <Icon path={mdiFileDocumentCheckOutline} size={1}/>,
            link: "/terms",
        }
    ]
    const supportMain = [
        {
            id: 0,
            title: "Личный кабинет",
            icon: <Icon path={mdiAccountChild} size={1}/>,
            link: "/",
            checkStar: false
        },
        {
            id: 1,
            title: "Курсы от Елены",
            icon: <Icon path={mdiCartOutline} size={1}/>,
            checkStar: false,
            link: "/course"
        },
        {
            id: 2,
            title: "Web-приложения",
            icon: <Icon path={mdiApplication} size={1}/>,
            checkStar: false,
            link: "/sections"
        },
        {
            id: 3,
            title: "Домашние задания",
            icon: <Icon path={mdiMultimedia} size={1}/>,
            checkStar: true,
            link: "/hw"
        },
        {
            id: 4,
            title: "Гайды для мам",
            icon: <Icon path={mdiHumanBabyChangingTable} size={1}/>,
            checkStar: true,
            link: "/guides_mom"
        }
    ]
    const supportStar = [
        {
            id: 0,
            title: "Растим звезду 3.0",
            icon: <Icon path={mdiStarFourPoints} size={1}/>,
            checkStar: true,
            link: "/star"
        },

        {
            id: 1,
            title: "Вебинары",
            icon: <Icon path={mdiLaptopAccount} size={1}/>,
            checkStar: true,
            link: "/web_star"
        }
    ]
    const userTelegram = localStorage.getItem('userTelegram');

    useEffect(() => {
        const fetchData = async () => {
            // navigate("/login");
            // const backendUrl = process.env.NODE_ENV === 'production'
            //     ? 'https://elenakorneva.site/dataUserForPersonalArea'
            //     : 'http://localhost:8080/dataUserForPersonalArea';
            const backendUrl = 'https://elenakorneva.site/dataUserForPersonalArea'
            const dataToAPI = process.env.NODE_ENV === 'production'
                ? { chatId: user?.id,
                    userTelegram: userTelegram}
                // : { chatId: '1081994928' };
                : { chatId: user?.id,
                    userTelegram: userTelegram};
            try {
                // Отправка POST-запроса с данными на бэкенд
                const response = await axios.post(backendUrl, dataToAPI);
                if (response.data.userTelegram === null){
                    navigate("/login");
                } else {
                    await setResponseData(response.data);
                    dispatch(setDataFromApi(response.data));
                    localStorage.setItem('userTelegram', JSON.stringify(response.data?.userTelegram?.chatId))
                }
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const checkStar = (check) => {
        return dataUser?.userTelegram?.access_intensive_3_0 === true;
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open} sx={{backgroundColor: "#3a5493"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                        <Box className="box-header">
                            <Box className="title">{title}</Box>
                            <Box className="title" > {userTelegram}</Box>
                        </Box>
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
                {checkStar() && (
                    <List>
                        {supportStar.map((index) => (
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
                )}
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
                <List>
                    {support.map((index) => (
                        <ListItem key={index.id} disablePadding>
                            <ListItemButton onClick={index.command}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index.icon}
                                </ListItemIcon>
                                <ListItemText primary={index.title} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <Typography paragraph>
                </Typography>
            </Main>
        </Box>
    );
}
