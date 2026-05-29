import {createFileRoute} from '@tanstack/react-router'
import axios from "axios";
import dummy1 from "./test.json";
import dummy2 from "./test2.json";

type Mail = {
  id: string;
  subject: string;
  bodyHtml: string;
  bodyPreview: string;
  senderName: string;
  senderEmail: string;
  receivedAt: string;
  hasAttachments: boolean;
  attachments: Attachment[];
}

type Attachment = {
  id: string;
  fileName: string;
  contentType: string;
  size: number;
}

export const Route = createFileRoute('/seminar/$id')({
  loader: loader,
  component: RouteComponent,
})

async function loader({ params }: { params: { id: string } }) {
  const { id } = params;
  const [mail]: [Mail] = await Promise.all([
    axios.get(`https://infoteam-gknow-be.onrender.com/mail-sync/mails/${id}`).then(res => res.data)
  ]);

  let att = {};

  if (mail.hasAttachments) {
    const results = await Promise.all(
        mail.attachments.map(item =>
            axios.get(`https://infoteam-gknow-be.onrender.com/mail-sync/attachments/${item.id}/download`)
                .then(res => [item.id, res.data] as [string, any])
        )
    );
    att = Object.fromEntries(results);
  }

  return { mail, att };
}

function RouteComponent() {
  const {mail} = Route.useLoaderData();
  // const mail = dummy1;

  // const mail = dummy2;

  function iHeight() {
    const iframe = document.getElementById("mail-iframe") as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      const ih = iframe.contentWindow.document.body.scrollHeight;
      iframe.style.height = `${ih}px`;
    }
  }

  console.log(mail);

  return (
      <div className="flex flex-col gap-3">
        <p className="font-bold text-2xl">{mail.subject}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3 font-semibold">
            <p>{mail.senderName}</p>
            <p>{mail.receivedAt}</p>
          </div>
          <div className="flex flex-row gap-1 font-semibold">
            <span className="material-icons">mail</span>
            <p>{mail.senderEmail}</p>
          </div>
        </div>
        <iframe
            onLoad={iHeight}
            id="mail-iframe"
            srcDoc={mail.bodyHtml}
            className="w-full h-full border-none bg-white"
            scrolling="no"
            frameBorder="0"
            sandbox="allow-same-origin"
        ></iframe>
      </div>
  )
}