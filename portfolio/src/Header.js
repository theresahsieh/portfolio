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
import * as myStyles from "./MyStyles.js";

import t2 from "./Pages/resources/logo.png";
const useStyles = makeStyles({
    name: {
        position: "absolute",
        left: "4rem",
        color: "black",
        textDecoration: "none",
    },
    navBar: {
        position:"fixed",
        backgroundColor: "white",
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.04)",
    },
    navDisplayFlex: {
        display: `flex`,
        float: `right`,
    },
    linkText: {
        textDecoration: `none`,
    },
    navListText: {
        color: myStyles.grey.one,
        fontSize: "1rem"
    },
    navListButton: {
        "&$selected": {
            backgroundColor: "transparent",
        },
        "&:hover": {
            backgroundColor: "transparent",
        },
        "&:hover::before": {
            position: "absolute",
            bottom: "0px",
            visbility: "hidden",
            transform: "scaleX(1)",
        },
        "&::before": {
            content: '""',
            position: "absolute",
            left: "10%",
            right: "10%",
            width: "80%",
            bottom: "0",
            border: `1px solid ${myStyles.purple.zero}`,
            visbility: "hidden",
            transform: "scaleX(0)",
            transition: "all 0.3s ease-in-out 0s",
        },
    },
    menuButton: {
        float: `right`,
    },
    drawer: {
        top: "64px",
        "@media (max-width: 600px)": {
            top: "56px"
        },
        backgroundColor: `${myStyles.purple.zero}`,
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.05), 0px 2px 4px -1px rgba(0,0,0,0.05)",
    },
    drawerLink: {
        textAlign: "center",
        "&:hover": {
            backgroundColor: "transparent",
        },
        "&:hover::before": {
            position: "absolute",
            bottom: "0px",
            visbility: "hidden",
            transform: "scaleX(1)",
        },
        "&::before": {
            content: '""',
            position: "absolute",
            left: "10%",
            right: "10%",
            width: "80%",
            bottom: "0",
            border: "1px solid white",
            visbility: "hidden",
            transform: "scaleX(0)",
            transition: "all 0.3s ease-in-out 0s",
        },
        fontSize: "1rem"
    },
    drawerLinkText: {
        color: "white",
        fontSize: "1rem"
    },
});

const Header = () => {
    const navLinks = [
        { title: "projects", path: "/projects" },
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
            ModalProps={{disableScrollLock:true}}
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
                        <ListItemText
                            primary={title}
                            style={
                                path === location.pathname
                                    ? { color: "black" }
                                    : {}
                            }
                            className={classes.drawerLinkText}
                        />
                    </ListItem>
                ))}
            </ListItem>
        </Drawer>
    ));
    return (
        <div>
            <AppBar className={classes.navBar} position="sticky">
                <Toolbar>
                    <a href="/projects" style={{ display: "flex" }}>
                        <img
                            src={t2}
                            alt="logo"
                            style={{
                                width: "2rem",
                                height: "2rem",
                                pointerEvents: "all",
                            }}
                        />
                        <Typography
                            className={classes.name}
                            component="h1"
                            to={"/"}
                        >
                            Theresa Hsieh
                        </Typography>
                    </a>

                    <div style={{ flex: "1 1 auto" }}></div>
                    <Hidden smDown>
                        <Container
                            maxWidth="md"
                            className={classes.navbarDisplayFlex}
                        >
                            <List
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
                                        <ListItemText
                                            style={
                                                path === location.pathname
                                                    ? { color: myStyles.purple.zero, fontSize:"1rem" }
                                                    : { fontSize:"1rem" }
                                            }
                                            className={`${classes.navListText}`}
                                            primary={title}
                                        />
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
