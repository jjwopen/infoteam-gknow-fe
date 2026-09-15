import {createFileRoute} from '@tanstack/react-router'
import Department from "../../components/Department.tsx";
import axios from "axios";

export const Route = createFileRoute('/prof/')({
  loader: loader,
  component: RouteComponent,
})

async function loader() {
  const [departments] = await Promise.all([
    axios.get('https://infoteam-gknow-be.onrender.com/professors/departments').then(res => res.data)
  ])

  return {departments};
}

function RouteComponent() {
  const {departments} = Route.useLoaderData();

  return (
      <>
        {/*{departments.map((department) => (*/}
        {/*    <Department*/}
        {/*        id={department.id}*/}
        {/*        icon="menu_book"*/}
        {/*        nameKor={department.nameKorea}*/}
        {/*        nameEng={department.name}*/}
        {/*        link={department.address}/>*/}
        {/*))}*/}
        <Department
            key={1}
            id={1}
            icon="menu_book"
            nameKor="인문사회과학부"
            nameEng="School of Humanities and Social Sciences"
            link="las.gist.ac.kr"
        />
      </>
  )
}
