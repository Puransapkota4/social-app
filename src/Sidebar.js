
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import EmojiFlagsTwoToneIcon from '@mui/icons-material/EmojiFlagsTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import VideoLibraryTwoToneIcon from '@mui/icons-material/VideoLibraryTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src="https://tse1.mm.bing.net/th?id=OIP.Ff0wv-q93JQHlnpqeKiGzQHaE8&pid=Api&P=0&w=274&h=182" title="Puran" />
        <SidebarRow 
        Icon={LocalHospitalTwoToneIcon} 
        title="Covid 19 information Center"
        /> 
        <SidebarRow Icon ={EmojiFlagsTwoToneIcon}title='pages'/>
        <SidebarRow Icon ={PeopleAltTwoToneIcon} title='Friends'/>
        <SidebarRow Icon ={ChatTwoToneIcon} title='Messenger'/>
        <SidebarRow Icon ={ShoppingBagTwoToneIcon} title='Marketplace'/>
        <SidebarRow Icon ={VideoLibraryTwoToneIcon} title='Videos'/>
        <SidebarRow Icon={ExpandMoreIcon} title='more'/>
        

    </div>

  );
}

export default Sidebar;
