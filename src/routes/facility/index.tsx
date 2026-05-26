import { createFileRoute } from '@tanstack/react-router'
import FacilityInfo from "../../components/FacilityInfo.tsx";

export const Route = createFileRoute('/facility/')({
  component: RouteComponent,
})

function RouteComponent() {


  return (
      <>
        <FacilityInfo name="제1 학생회관" time="00:00~23:59" mail="gildong.gist.ac.kr" phone={1234} location="W2" />

      </>
  )
}
