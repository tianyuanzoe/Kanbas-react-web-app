import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook,FaCreativeCommons,FaQuestionCircle} from "react-icons/fa";
import { BsFillCalendar2WeekFill,BsInboxFill,BsClockFill } from "react-icons/bs";
import { GiVideoConference } from "react-icons/gi";
import NEU from "../Icons/neu.avif";

import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox:<BsInboxFill className="wd-icon" />,
    History:<BsClockFill className="wd-icon" />,
    Studio:<GiVideoConference className="wd-icon" />,
    Commons:<FaCreativeCommons className="wd-icon" />,
    Help:<FaQuestionCircle className="wd-icon" />,
  
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" >
      <div className="list-group-item wd-icon">
        <img src={NEU} alt="neu" />
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "wd-active"}`}
        >
        <div>
        {link === "Account" ? (
          <div className="grey-icon">{linkToIconMap[link]}</div>
        ) : (
          linkToIconMap[link]
        )}
      </div>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;

