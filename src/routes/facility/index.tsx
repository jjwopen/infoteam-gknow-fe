import { createFileRoute } from '@tanstack/react-router'
import FacilityInfo from "../../components/FacilityInfo.tsx";
import axios from "axios";

type Mail = {
  id: string;
  subject: string;
  senderName: string;
  senderEmail: string;
  bodyPreview: string;
  receivedAt: string;
  hasAttachment: true;
}

export const Route = createFileRoute('/facility/')({
  loader: loader,
  component: RouteComponent,
})

async function loader() {
  const [mails]: [Mail[]] = await Promise.all([
      axios.get('https://infoteam-gknow-be.onrender.com/mail-sync/mails').then(res => res.data)
  ]);

  return {mails};
}

function RouteComponent() {
  const {mails} = Route.useLoaderData();


  return (
      <>

        <FacilityInfo name="제1 학생회관" time="00:00~23:59" mail="gildong.gist.ac.kr" phone={1234} location="W2" />

      </>
  )
}
