import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
function Header() {
  return (
    <div className="header">
        <div className='header__left'>
            <img
             src="https://tse1.mm.bing.net/th?id=OIP.YEjd9sUvheE5beF6dqP1HwHaGJ&pid=Api&P=0&w=223&h=185" alt='Real friends'
            />
            <div className="header__input">
                <SearchIcon/>
                <input placeholder='Search your interest' type={"text"}/>
            </div>
        </div>

        <div className='header__center'>
            <div className='header__option
            header__option--active'>
                <HomeIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <FlagIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <SubscriptionsIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <LocalConvenienceStoreIcon fontSize='large' />
            </div>
            <div className='header__option'>
                <SupervisedUserCircleIcon fontSize='large' />
            </div> 
        </div>

        <div className='header__right'>
            <div className='header__info'>
                <Avatar img src='https://scontent.fsyd10-1.fna.fbcdn.net/v/t39.30808-6/278099234_4869115556469497_4717359204624575567_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7oNSICvs-lwAX_ZdFRa&_nc_ht=scontent.fsyd10-1.fna&oh=00_AT8H63gaOyoagtzxMqHDoUWtX0rUqfIdSDXleFn3gkW6Cg&oe=62BDB794'/>
                <h4>Puran</h4>
            </div>
            <IconButton>
                 <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsNoneIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header;
