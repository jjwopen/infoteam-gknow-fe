type SeminarInfoProps = {
  title: string;
  date: string;
  duedate: string;
  target: string;
}

export default function SeminarInfo({title, date, duedate, target}: SeminarInfoProps) {


  return (
      <div className="flex flex-row justify-between imte p-4 hover:bg-e2 transition-colors duration-200 rounded-xl">
        <div className="flex flex-col gap-3 font-semibold text-xl">
          <p>{title}</p>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col text-lg gap-1.5">
              <div className="flex flex-row items-center gap-2">
                일자: {date}
              </div>
              <div className="flex flex-row items-center gap-2">
                신청 기한: {duedate}
              </div>
            </div>
            <div className="flex flex-col text-lg gap-1.5">
              <div className="flex flex-row items-center gap-2">
                대상: {target}
              </div>
            </div>
            <div className="flex flex-col text-lg gap-1.5">
            </div>
          </div>
        </div>
      </div>

  )
}