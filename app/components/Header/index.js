import React, { memo } from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import AppBar from '@material-ui/core/AppBar';
import {makeSelectCredentials,makeSelectUserData} from '../../containers/App/selectors';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImageAvatar from 'components/Avatar';
import { setLogout } from '../../containers/App/actions';
import {Link } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EventIcon from '@material-ui/icons/Event';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';


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
    // color: theme.palette.primary.dark
  },
  tab: {
   minWidth: '80px',
   paddingTop: '1.3rem',
   '&.MuiTab-textColorSecondary.Mui-selected': { 
     color: theme.palette.primary.main
   },
   '&.MuiTabs-indicator':{
    color: theme.palette.primary.main
   }
  },
  indicator: {
    width: '40px !important',
  }
  
}));



function Header({dispatch,logged,userData,theme}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onLogout = () => {
    dispatch(setLogout())
  }
  return (
    // <div>
      /* {logged && 
      <NavBar>
        <ImageAvatar src={userData.photo}/>
        <div>
          <HeaderLink to="/profile">
            <FormattedMessage {...messages.profile} />
          </HeaderLink>
          <HeaderLink onClick={onLogout}>
            <FormattedMessage {...messages.logout} />
          </HeaderLink>
        </div>
      </NavBar>}
     
    </div> */
     <AppBar position="static" className={classes.appbar}>
     <Toolbar className={classes.toolbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            aria-label="icon tabs example"
            className={classes.tabs}
            classes={{indicator: classes.indicator}}
          >
            <Tab icon={<ChatBubbleIcon />} aria-label="chat" className={classes.tab}/>
            <Tab icon={<EventIcon />} aria-label="calendar" className={classes.tab}/>
            <Tab icon={<ViewWeekIcon />} aria-label="event" className={classes.tab} />
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
