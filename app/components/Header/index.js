import React, { memo, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import AppBar from '@material-ui/core/AppBar';
import {makeSelectCredentials, makeSelectUserData, makeSelectLocation} from '../../containers/App/selectors';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setLogout } from '../../containers/App/actions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EventIcon from '@material-ui/icons/Event';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import { push } from 'connected-react-router'
import ImageAvatar from 'components/Avatar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background:'#fff',
    boxShadow: 'none'
  },
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  tabs: {
    height: '64px',
  },
  tab: {
   minWidth: '80px',
   paddingTop: '1.3rem',

  '&.Mui-selected':{
    color: `${theme.palette.primary.main} !important`
  },
  '&.MuiTab-textColorPrimary':{
    color: theme.palette.secondary.main
  }
  },
  indicator: {
    width: '20px !important',
  },
}));



function Header({dispatch,logged,userData, location}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('nnn',newValue)
    dispatch(push(newValue));

  };

  const onLogout = () => {
    dispatch(setLogout())
  }
  
  return (
     <AppBar position="static" className={classes.appbar}>
     <Toolbar className={classes.toolbar}>
          <Tabs
            value={location.pathname}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
            className={classes.tabs}
            classes={{indicator: classes.indicator}}
            disableRipple
          >
            <Tab icon={<HomeIcon />}  aria-label="home" className={classes.tab} value="/homepage"/>
            <Tab icon={<ChatBubbleIcon />}  aria-label="chat" className={classes.tab} value="/chat"/>
            <Tab icon={<EventIcon />}  aria-label="calendar" className={classes.tab} value="/calendar" />
            <Tab icon={<ViewWeekIcon />}  aria-label="event" className={classes.tab} value="/activities" />
          </Tabs>
         <div>
           <IconButton
             aria-label="account of current user"
             aria-controls="menu-appbar"
             aria-haspopup="true"
             onClick={onLogout}
             color="primary"
           >
              <ExitToAppIcon />
           </IconButton >
           <Link to="/profile">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //  onClick={handleMenu}
              color="primary"
            >
                <ImageAvatar src={userData.photo}/>
            </IconButton>
           </Link>
         </div>
     </Toolbar>
   </AppBar>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  logged: makeSelectCredentials(),
  userData: makeSelectUserData(),
  location: makeSelectLocation(),


});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(Header);
