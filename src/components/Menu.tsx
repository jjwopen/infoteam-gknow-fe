import {useRouterState, useNavigate} from "@tanstack/react-router";

type MenuProps = {
  icon: string;
  text: string;
  path: string;
}

export default function Menu({icon, text, path}: MenuProps) {
  const navigate = useNavigate();
  const {location} = useRouterState();
  const isActive = location.pathname === path;

  return (
      <li className={`flex flex-row items-center w-full py-1 pl-2 pr-10 rounded-xl gap-3.5 ${isActive ? 'bg-e2' : 'hover:bg-e2 transition-colors duration-200'}`} onClick={() => navigate({to: `${path}`})}>
        <span className="material-icons">{icon}</span>
        <p className="font-medium text-lg">{text}</p>
      </li>
  )
}