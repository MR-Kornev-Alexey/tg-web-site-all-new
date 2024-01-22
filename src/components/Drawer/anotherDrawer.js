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
    mdiFileDocumentCheckOutline,
    mdiHumanBabyChangingTable,
    mdiAccountSchoolOutline
} from "@mdi/js";

import "./Drawer.css"
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


export default function DrawerLeft() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

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
            title: "Главная",
            icon: <Icon path={mdiHomeOutline} size={1}/>,
            link: "/",
            checkStar: false
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
            title: "Команда",
            icon: <Icon path={mdiAccountMultiple} size={1}/>,
            checkStar: false,
            link: "/sections"
        },
        {
            id: 3,
            title: "Консультация",
            icon: <Icon path={mdiLaptopAccount} size={1}/>,
            checkStar: true,
            link: "/consultation"
        },
        {
            id: 4,
            title: "Бесплатные уроки",
            icon: <Icon path={mdiAccountSchoolOutline} size={1}/>,
            checkStar: true,
            link: "/free_lessons"
        },
        {
            id: 5,
            title: "Полезное для мам",
            icon: <Icon path={mdiHumanBabyChangingTable} size={1}/>,
            checkStar: true,
            link: "/guides_mom"
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
