import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { makeStyles } from "@material-ui/core";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import {
  Link,
  // Switch, Route, BrowserRouter as Router
} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
// import { IconButton } from "@mui/material";

export default function Profile(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const useStyles = makeStyles(() => ({
    profile: {
      fontWeight: "bolder",
      // width: "100%",
      color: "black",
      borderBottom: "1px solid gainsboro",
      background: "white",
    },
    menumargin: {
      marginBottom: "-0.5%",
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Profile">
          <div onClick={handleClick}>
            <FontAwesomeIcon icon={faUserCircle} />
            <small className="ml-2">{props.data}</small>
          </div>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        style={{ marginTop: "4%" }}
      >
        <div className="row">
          <div className="col">
            <MenuItem>
              <Avatar
                alt="Remy Sharp"
                src="./tutor-img/five.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </MenuItem>
          </div>
          <div className="col">
            <MenuItem>
              <span className={classes.profile}>
                <p>{props.username}</p>
                <small>{props.email}</small>
              </span>
            </MenuItem>
          </div>
        </div>

        <MenuItem>
          <Link
            to="/myprofile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className={classes.menumargin}>
              <img
                className="mr-1"
                alt="icon"
                src="https://img.icons8.com/fluency-systems-regular/25/000000/user.png"
              />
              My profile
            </p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/mytutor"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className={classes.menumargin}>
              <img
                className="mr-1"
                alt="icon"
                src="https://img.icons8.com/fluency-systems-regular/25/000000/user-group-man-man.png"
              />
              My tutor
            </p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/mycourse"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className={classes.menumargin}>
              <img
                className="mr-1"
                alt="icon"
                src="https://img.icons8.com/external-becris-lineal-becris/24/000000/external-list-mintab-for-ios-becris-lineal-becris.png"
              />
              My course
            </p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/mysubscription"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className={classes.menumargin}>
              <img
                className="mr-1"
                alt="icon"
                src="https://img.icons8.com/fluency-systems-regular/25/000000/video-playlist.png"
              />
              My Subscription
            </p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/mypaymenthistory"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className={classes.menumargin}>
              <img
                className="mr-1"
                alt="icon"
                src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"
              />
              My payment history
            </p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/favourite"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className={classes.menumargin}>
              <img
                className="mr-1"
                alt="icon"
                src="https://img.icons8.com/material-outlined/25/000000/like.png"
              />
              Favourite
            </p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/paymentmethod"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className={classes.menumargin}>
              <img
                className="mr-1"
                alt="icon"
                src="https://img.icons8.com/windows/25/000000/wallet.png"
              />
              Dark mode
            </p>
          </Link>
        </MenuItem>
        <MenuItem className={classes.menumargin}>
          <AmplifySignOut />
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
