// import { EmailTemplate } from '@/app/components/email-template';
import { Resend } from 'resend'

const resend = new Resend( process.env.NEXT_SEND);

export async function POST(req) {


    const body = await req.json();

  try {
    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'tfutch43.tf@gmail.com',
        subject: 'You have a Keeps waiting on you',
        html: `<p>A New Keep has been posted in ${body.category} </p> <a href="/secretCategory/${body.category}"> View Now </a>`
      });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}


