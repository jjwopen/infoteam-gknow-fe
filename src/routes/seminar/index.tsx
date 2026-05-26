import { createFileRoute } from '@tanstack/react-router'
import SeminarInfo from "../../components/SeminarInfo.tsx";

export const Route = createFileRoute('/seminar/')({
  component: RouteComponent,
})

function RouteComponent() {


  return (
      <SeminarInfo title="a" date="b" duedate="c" target="d" />
  )
}
