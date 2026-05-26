import { createFileRoute } from '@tanstack/react-router'
import Department from "../../components/Department.tsx";

export const Route = createFileRoute('/prof/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <>
        <Department
            id={1}
            icon="menu_book"
            nameKor="인문사회과학부"
            nameEng="School of Humanities and Social Sciences"
            link="las.gist.ac.kr"
        />
      </>
  )
}
