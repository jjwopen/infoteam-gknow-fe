type FacilityInfoProps = {
  name: string;
  time: string;
  mail: string;
  phone: number;
  location: string;
}

export default function FacilityInfo({name, time, mail, phone, location}: FacilityInfoProps) {
  return (
      <div className="flex flex-row justify-between imte p-4 hover:bg-e2 transition-colors duration-200 rounded-xl">
        <div className="flex flex-col gap-3 font-semibold text-xl">
          <p>{name}</p>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col text-lg gap-1.5">
              <div className="flex flex-row items-center gap-2">
                <span className="material-icons">alarm</span>
                <p>{time}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="material-icons">mail</span>
                <p>{mail}</p>
              </div>
            </div>
            <div className="flex flex-col text-lg gap-1.5">
              <div className="flex flex-row items-center gap-2">
                <span className="material-icons">phone</span>
                <p>052-715-{phone}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="material-icons">location_on</span>
                <p>{location}</p>
              </div>
            </div>
            <div className="flex flex-col text-lg gap-1.5">
            </div>
          </div>
        </div>
      </div>
  )
}