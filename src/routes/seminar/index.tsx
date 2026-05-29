import {createFileRoute} from '@tanstack/react-router'
import SeminarInfo from "../../components/SeminarInfo.tsx";
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

export const Route = createFileRoute('/seminar/')({
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
        {mails?.map((mail) => (
            <SeminarInfo title={mail.subject} id={mail.id} preview={mail.bodyPreview} key={mail.id} />
        ))}

        {/*<SeminarInfo key="asdf" id="asdf" title="제목" preview="내용 미리보기"/>*/}
      </>
  )
}
