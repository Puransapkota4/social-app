
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import VideoLibraryTwoToneIcon from '@mui/icons-material/VideoLibraryTwoTone';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src="./images/elon.jpeg" title="Puran" />
        <SidebarRow 
        Icon={LocalHospitalTwoToneIcon} 
        title="Covid 19 information Center"
        /> 
        <SidebarRow Icon ={EmojiFlagsTwoToneIcon}title='pages'/>
        <SidebarRow Icon ={PeopleAltTwoToneIcon} title='Friends'/>
        <SidebarRow Icon ={ChatTwoToneIcon} title='Messenger'/>
        <SidebarRow Icon ={ShoppingBagTwoToneIcon} title='Marketplace'/>
        <SidebarRow Icon ={VideoLibraryTwoToneIcon} title='Videos'/>
        

    </div>

  );
}

export default Sidebar;
