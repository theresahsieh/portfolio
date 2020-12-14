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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    name: {
      position: "absolute"
    },
    navDisplayFlex: {
        display: `flex`,
        float: `right`,
    },
    linkText: {
        textDecoration: `none`,
        color: `white`,
    },
    menuButton: {
        color: `white`,
        float: `right`,
    },
    drawer: {
        top: "64px",
    },
    navLink: {
        textAlign:'center'
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
                    className={classes.navLink}
                    onClick={handleDrawer}
                >
                    <ListItemText primary={title} />
                </ListItem>
                ))}
            </ListItem>
        </Drawer>
    ));
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                  <Typography variant="h6" className={classes.name}>Theresa Hsieh</Typography>
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
                                    >
                                        <ListItemText primary={title} />
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
