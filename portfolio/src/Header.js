import * as React from "react";
import {
    AppBar,
    Container,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";

import t2 from "./Pages/resources/logo.png"
const useStyles = makeStyles({
    name: {
      position: "absolute",
      left: "4rem",
      color: "black",
      textDecoration: "none"
    },
    navBar:{
        backgroundColor:"white",
        boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.05)"
    },
    navDisplayFlex: {
        display: `flex`,
        float: `right`,
    },
    linkText: {
        textDecoration: `none`,
    },
    navListText: {
        color: "rgba(0, 0, 0, 0.87)"
    },
    navListButton: {
        '&$selected': {
            backgroundColor: "transparent" 
        },
        '&:hover': {
            backgroundColor: "transparent" 
        },
        '&:hover::before': {
            position: 'absolute',
            bottom: '0px',
            visbility: 'hidden',
            transform: 'scaleX(1)'
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            left: '10%',
            right: '10%',
            width: '80%',
            bottom: "0",
            border: '1px solid #AB72E3',
            visbility: 'hidden',
            transform: 'scaleX(0)',
            transition: 'all 0.3s ease-in-out 0s'
        },
    },
    menuButton: {
        float: `right`,
    },
    drawer: {
        top: "64px",
        marginTop:"0.5rem",
        backgroundColor:"#AB72E3",
        boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.05), 0px 2px 4px -1px rgba(0,0,0,0.05)"
    },
    drawerLink: {
        textAlign:'center',
        "&$selected":{
            color: "red"
        },
        '&:hover': {
            backgroundColor: "transparent" 
        },
        '&:hover::before': {
            position: 'absolute',
            bottom: '0px',
            visbility: 'hidden',
            transform: 'scaleX(1)'
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            left: '10%',
            right: '10%',
            width: '80%',
            bottom: "0",
            border: '1px solid white',
            visbility: 'hidden',
            transform: 'scaleX(0)',
            transition: 'all 0.3s ease-in-out 0s'
        },
    },
    drawerLinkText: {
        color: "white",
    }
});

const Header = () => {
    const navLinks = [
        { title: "projects", path: "/projects" },
        { title: "work", path: "/work" },
        { title: "resume", path: "/resume" },
        { title: "about", path: "/about" },
    ];
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    const classes = useStyles();
    const location = useLocation();

    const MobileDrawer = React.forwardRef((props, ref) => (
        <Drawer
            classes={{ paper: classes.drawer }}
            BackdropProps={{ invisible: true }}
            anchor="top"
            open={props.open}
            onClose={handleDrawer}
            ref={ref}
            variant="temporary"
            transitionDuration={4000}
        >
            <ListItem>
                {navLinks.map(({ title, path }) => (
                    <ListItem
                    button
                    component={Link}
                    to={path}
                    key={title}
                    className={classes.drawerLink}
                    onClick={handleDrawer}
                >
                    <ListItemText primary={title} style={path === location.pathname ?  {color:"black"} : {} } className={classes.drawerLinkText}/>
                </ListItem>
                ))}
            </ListItem>
        </Drawer>
    ));
    return (
        <div>
            <AppBar className={classes.navBar} position="sticky">
                <Toolbar>
                <img src={t2} alt="logo" style={{width: "2rem", height:"2rem", pointerEvents:"all"}} href={"/"}/>
                  <Typography variant="h6" className={classes.name} component={Link}
                                        to={"/"}>Theresa Hsieh</Typography>
                    <div style={{ flex: "1 1 auto" }}></div>
                    <Hidden smDown>
                        <Container
                            maxWidth="md"
                            className={classes.navbarDisplayFlex}
                        >
                            <List
                                component="nav"
                                aria-labelledby="main navigation"
                                className={classes.navDisplayFlex}
                            >
                                {navLinks.map(({ title, path }) => (
                                    <ListItem
                                        button
                                        component={Link}
                                        to={path}
                                        key={title}
                                        className={classes.navListButton}
                                    >
                                        <ListItemText style={path === location.pathname ?  {color:'#7326C0'} : {} } className={`${classes.navListText}`} primary={title} />
                                    </ListItem>
                                ))}
                            </List>
                        </Container>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            aria-label="menu"
                            onClick={handleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <MobileDrawer open={openDrawer} />
        </div>
    );
};
export default Header;
