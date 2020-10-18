import React from 'react'
import  './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import { ExpandMoreOutlined } from '@material-ui/icons';
 
 


function Sidebar() {
    return (
        <>
        <div className="sidebar">
            <SidebarRow  src="https://www.flaticon.com/svg/static/icons/svg/53/53176.svg" title="tejal"/>
            <SidebarRow 
             Icon={LocalHospitalIcon}
             title="covid information centre"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow  Icon={ChatIcon} title="messenger"/>
            <SidebarRow  Icon={StorefrontIcon} title="MarketPlace"/>
            <SidebarRow  Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow  Icon={ExpandMoreOutlined} title="MarketPlace"/>
        </div>
        </>
    )
}
export default Sidebar;