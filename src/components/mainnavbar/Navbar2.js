import * as React from "react";
import "./Navbar2.css";
import logo from "../Icons/Uworldfinal.jpg";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { mainLogo } from "../Icons/Icons";
import { makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Notification from "../notification/Notification";
import Profile from "../profile/Profile";
const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bolder",
    fontSize: "25px",
    textDecoration: "none",
  },
  searchbar: {
    border: "1px solid gainsboro",
    borderRadius: "15px",
    borderBottomRightRadius: "0",
    borderTopRightRadius: "0",
    // boxShadow: "1px 1px 1px 0 gainsboro",
  },
  profile: {
    fontWeight: "bolder",
    // width: "100%",
    color: "black",
    borderBottom: "1px solid gainsboro",
  },
  menumargin: {
    marginBottom: "-0.5%",
    fontWeight: "bold",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingRight: "35px",
  borderRight: "none",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const classes = useStyles();

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
        </IconButton> */}
        <Notification data="Notifications" />
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge>
            <FontAwesomeIcon icon={faCog} />
          </Badge>
        </IconButton>
        <p>Setting</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FontAwesomeIcon icon={faUserCircle} />
        </IconButton>
        <p>Profile</p> */}
        <Profile data="Profile" username={props.username} email={props.email} />
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 8.2 }}>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <div
            size="large"
            edge="start"
            aria-label="open drawer"
            style={{ marginLeft: "2%", marginBottom: "" }}
          >
            {/* <Link to="/">{mainLogo()}</Link> */}
            <Link to="/">
              <img style={{ height: "40px", width: "100px" }} src={logo} />
            </Link>
          </div>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#00006c" }}>
              <div className={classes.title}>uworld</div>
            </Link>
          </Typography> */}

          <Typography>
            <div className="d-flex">
              <div className="navmenu">
                <Link to="/tutor" className=" ml-3 mt-3 navmenutag">
                  Tutor
                </Link>
              </div>
              <div className="navmenu">
                <Link to="/course" className="ml-3 mt-3 navmenutag">
                  Course
                </Link>
              </div>
              <div className="navmenu">
                <Link to="/mycalender" className="ml-3 mt-3 navmenutag">
                  My&nbsp;calender
                </Link>
              </div>
              <div className="navmenu">
                <Link to="/subscription" className="ml-3 mt-3 navmenutag">
                  Subscription&nbsp;Plan
                </Link>
              </div>
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <div
            className="dropdown"
            style={{
              border: "1px solid gainsboro",
              marginRight: "-38px",
              borderRadius: "7px",
              background: "white",
              zIndex: "200",
              paddingBottom: "1px",
              paddingTop: "1px",
            }}
          >
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              &nbsp;
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/Courses">
                Course
              </Link>
              <Link className="dropdown-item" to="/Tutors">
                Tutor
              </Link>
            </div>
          </div>
          <Search>
            <StyledInputBase
              className={classes.searchbar}
              placeholder="Search your Course / Tutor"
              inputProps={{ "aria-label": "search" }}
            />
            {/* <SearchIconWrapper> */}
            <span
              style={{
                marginLeft: "-35px",
                padding: "9px",
                paddingTop: "8px",
                paddingRight: "12px",
                paddingLeft: "12px",
                borderRadius: "5px",
                background: "#00006c",
                color: "white",
                zIndex: "300",
              }}
            >
              <SearchIcon />
            </span>
            {/* </SearchIconWrapper> */}
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton color="inherit">
              <Badge>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </Badge>
            </IconButton>
            <div style={{ fontSize: "25px", padding: "10px" }}>
              <Badge badgeContent={17} color="error">
                {/* <FontAwesomeIcon icon={faBell} /> */}
                <Notification />
              </Badge>
            </div>
            <IconButton aria-label="account setting" color="inherit">
              <FontAwesomeIcon icon={faCog} />
            </IconButton>
            <div
              style={{
                fontSize: "25px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "10px",
              }}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <FontAwesomeIcon icon={faUserCircle} /> */}
              <Profile username={props.username} email={props.email} />
            </div>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
