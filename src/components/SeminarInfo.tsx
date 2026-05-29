import {useNavigate} from "@tanstack/react-router";

type SeminarInfoProps = {
  id: string;
  title: string;
  preview: string;
}

export default function SeminarInfo({id, title, preview}: SeminarInfoProps) {
  const navigate = useNavigate();


  return (
      <div id={`seminar-${id}`} className="flex flex-row justify-between imte p-4 hover:bg-e2 transition-colors duration-200 rounded-xl"
           onClick={() => navigate({to: `/seminar/${id}`})}
      >
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-xl">{title}</p>
          <p className="">{preview}</p>
        </div>
      </div>

  )
}