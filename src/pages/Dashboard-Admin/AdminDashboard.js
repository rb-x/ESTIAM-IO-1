import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  Grid,
  Box,
  Paper,
  Avatar,
  Badge
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TimelineIcon from "@material-ui/icons/Timeline";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");
document.body.style.backgroundColor = "white";

const drawerWidth = 240;
const StyledBadge2 = withStyles(theme => ({
  badge: {
    backgroundColor: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "70%",
      height: "70%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid #44b700",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#004080"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4)
  }
}));

export default props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1}>
            <Typography variant="h6" noWrap style={{ fontWeight: "bold" }}>
              Administration Dashboard
            </Typography>
          </Box>
          <Box display={{ xs: "none", lg: "block", sm: "block" }}>
            <StyledBadge2
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              variant="dot"
            >
              <Avatar alt="imageProfile" src="https://picsum.photos/200/300" />
            </StyledBadge2>
          </Box>
          <Box p={2} display={{ xs: "none", lg: "block", sm: "block" }}>
            <Typography>Michel Platini</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component="nav" aria-labelledby="navbar">
          <Link
            to="/administration"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Accueil" />
            </ListItem>
          </Link>

          <Link
            to="/administration/dossiers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <SupervisedUserCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Dossiers" />
            </ListItem>
          </Link>

          <Link
            to="/administration/vue-ensemble"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="Vue d'ensemble" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Bonjour Michel Platini !
        </Typography>
        <Typography variant="subtitle1">{moment().format("LLLL")}</Typography>
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <iframe
                title="nombreUtilisateur"
                width="600"
                height="371"
                seamless
                frameBorder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=1693536829&amp;format=interactive"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <iframe
                title="payscarte"
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=1256073064&amp;format=interactive"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <iframe
                title="dataJour"
                width="100%"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=2052018947&amp;format=interactive"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <iframe
                title="dataSemaine"
                width="100%"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=1519287802&amp;format=interactive"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Paper
              style={{
                padding: 20,
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                height: "auto"
              }}
            >
              <iframe
                title="dataSemaine"
                width="100%"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=768430570&amp;format=interactive"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Box
              display="flex"
              style={{
                height: "40vh",
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                backgroundColor: "white"
              }}
            >
              <iframe
                title="devices"
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=1773108436&amp;format=interactive"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Box
              display="flex"
              style={{
                height: "40vh",
                boxShadow: "0px 10px 18px -2px rgba(0,0,0,0.18)",
                borderRadius: 10,
                backgroundColor: "white"
              }}
            >
              <iframe
                title="devices"
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsOxbDG8Pi3ChUwZlNPP2nQD8D0WrFGX4VDB34msFZKl-NRNIFoe6eD5DBu8t4ymecOkR0YbE9wlW5/pubchart?oid=1773108436&amp;format=interactive"
              />
            </Box>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};
