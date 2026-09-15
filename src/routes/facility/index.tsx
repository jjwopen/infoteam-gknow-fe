import { createFileRoute } from '@tanstack/react-router'
import FacilityInfo from "../../components/FacilityInfo.tsx";
import axios from "axios";

type Facility = {
  id: number;
  name: string;
  email: string;
  startTime: string;
  endTime: string;
  number: number;
  location: string;
}

export const Route = createFileRoute('/facility/')({
  loader: loader,
  component: RouteComponent,
})

async function loader() {
  const [facilities]: [Facility[]] = await Promise.all([
      axios.get('https://infoteam-gknow-be.onrender.com/facility').then(res => res.data)
  ]);

  return {facilities};
}

function RouteComponent() {
  const {facilities} = Route.useLoaderData();

  return (
      <>
        {facilities.map(facility => (
            <FacilityInfo name={facility.name} time={`${facility.startTime} ~ ${facility.endTime}`} mail={facility.email} phone={facility.number} location={facility.location} />
        ))}

        <FacilityInfo name="제1 학생회관" time="00:00~23:59" mail="gildong.gist.ac.kr" phone={1234} location="W2" />

      </>
  )
}
