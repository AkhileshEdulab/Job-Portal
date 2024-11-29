
import { Link, useLocation } from "react-router-dom";
const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-job" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Jobs", url: "/post-job" },
    { name: "Posted Jobs", url: "/posted-job" },
  ];
  const location = useLocation();
  return (
    <div className="flex gap-4 text-mine-shaft-300 h-full items-center">
      {links.map((link, index) => (
        <div
          key={index} 
          className={`${
            location.pathname === link.url
              ? "text-bright-sun-400 border-b-bright-sun-400"
              : "border-transparent"
          } border-b-[3px] h-full flex items-center`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
