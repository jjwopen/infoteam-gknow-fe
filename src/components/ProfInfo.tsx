type Department = {
  id: number;
  name: string;
  phone: number;
  mail: string;
}

type ProfInfoProps = {
  id: number;
  nameKor: string;
  nameEng: string;
  departments: Department[];
  imageURL: string;
}

export default function ProfInfo({id, nameKor, nameEng, departments, imageURL}: ProfInfoProps) {


  return (
      <div id={`prof-${id}`}
           className="flex flex-row justify-between imte p-4 hover:bg-e2 transition-colors duration-200 rounded-xl">
        <div className="flex flex-col gap-3 font-semibold text-xl">
          <div className="flex flex-row gap-3">
            <p>{nameKor}</p>
            <p>{nameEng}</p>
          </div>
          <div className="flex flex-row gap-10">
            {departments.map((department) => (
                <div className="flex flex-col text-lg gap-1.5">
                  <p>{department.name}</p>
                  <div className="flex flex-row gap-2 font-medium text-lg ml-2">
                    <span className="material-icons">phone</span>
                    <p>052-715-{department.phone}</p>
                  </div>
                  <a className="flex flex-row gap-2 font-medium text-lg ml-2" href={`mailto:${department.mail}`}>
                    <span className="material-icons">email</span>
                    <p>{department.mail}</p>
                  </a>
                </div>
            ))}
          </div>
        </div>
        <img src={imageURL} alt={nameKor} className="h-full object-cover w-auto max-h-36"/>
      </div>
  )
}