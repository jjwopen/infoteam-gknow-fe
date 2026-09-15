import {useNavigate} from "@tanstack/react-router";

type DepartmentProps = {
  id: number;
  icon: string;
  nameKor: string;
  nameEng: string;
  link: string;
}

export default function Department({id, icon, nameKor, nameEng, link}: DepartmentProps) {
  const navigate = useNavigate();

  return (
      <div id={`department-${id}`}
           className="flex flex-row flex-1 justify-between items-center p-4 hover:bg-e2 transition-colors duration-200 rounded-xl"
           onClick={() => navigate({to: `/prof/${id}`, params: {id: String(id)}, search: {name: nameKor}})}>
        <div className="flex flex-row items-center gap-5 px-5">
          <span className="material-icons text-7xl!">{icon}</span>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">{nameKor}</p>
            <p className="font-semibold text-lg">{nameEng}</p>
            <a className="font-semibold text-lg" href={`https://${link}`} target="_blank">{link}</a>
          </div>
        </div>
        <div>
          <span className="material-icons text-5xl!">arrow_forward</span>
        </div>
      </div>
  )
}