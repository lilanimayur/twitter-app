import React from 'react'
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twittericon"/>

            <SidebarOptions active text="Home" Icon={HomeIcon}/>
            <SidebarOptions text="Explore" Icon={SearchIcon}/>
            <SidebarOptions text="Notifications" Icon={NotificationsIcon}/>
            <SidebarOptions text="Messages" Icon={MailOutlineIcon}/>
            <SidebarOptions text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarOptions text="Lists" Icon={ListAltIcon}/>
            <SidebarOptions text="Profile" Icon={PersonOutlineIcon}/>
            <SidebarOptions text="More" Icon={MoreHorizIcon}/>

            <Button varient="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar
