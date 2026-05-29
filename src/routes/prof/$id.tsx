import {createFileRoute, useNavigate} from '@tanstack/react-router'
import ProfInfo from "../../components/ProfInfo.tsx";

export const Route = createFileRoute('/prof/$id')({
  loader: loader,
  validateSearch: (search) => ({
    name: search.name as string
  }),
  component: RouteComponent,
})

async function loader() {

}

function RouteComponent() {
  const navigate = useNavigate();
  const {name} = Route.useSearch();

  return (
      <>
        <div className="flex flex-row items-center text-88 gap-2">
          <button className="py-0.5 px-1.5 rounded-lg hover:bg-e2 transition-colors duration-200"
                  onClick={() => navigate({to: '/prof'})}>교수님 찾기
          </button>
          <p>→</p>
          <p>{name}</p>
        </div>
        <ProfInfo id={1} nameKor="홍길동" nameEng="Gildong Hong" departments={[{
          id: 1,
          name: "입학학생처",
          mail: "gildong@gist.ac.kr",
          phone: 1234
        }, {
          id: 2,
          name: "인문사회과학부",
          mail: "gdh@gist.ac.kr",
          phone: 5678
        }]} imageURL="https://las.gist.ac.kr/thumbnail/gsMember/300_DT_202602031020371071.jpg"/>
      </>
  )
}
