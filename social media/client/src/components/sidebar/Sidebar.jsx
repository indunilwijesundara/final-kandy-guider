import "./sidebar.css";

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="icon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
           <ChatIcon className="icon"></ChatIcon>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <PlayCircleIcon className="icon"></PlayCircleIcon> 
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <GroupsIcon className="icon"></GroupsIcon> 
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
           <BookmarkIcon className="icon"></BookmarkIcon>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <HelpIcon className="icon"></HelpIcon>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
         <WorkIcon className="icon"></WorkIcon>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
           <EventIcon className="icon"></EventIcon>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
           <SchoolIcon className="icon"></SchoolIcon>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
