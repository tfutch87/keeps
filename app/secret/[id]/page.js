import react from 'react';
import GetNote from '@/app/components/GetNote'
// import { useRouter } from 'next/router';
import customDate from '@/app/util/customDate'

export default async function Secret({ params }) {

  // const router = useRouter();
  // const { id } = router.query;

  const { foundNote : note } = await GetNote(params.id);
  const humanReadableDate = customDate(note.createdAt)

  return (
    <>
    <h1>{note.noteTitle}</h1>
    <p>{note.noteContent}</p>
    <p>{note.category}</p>
    <span> {note.status}</span>
    <p> {humanReadableDate} </p>
    <a href="/"> Go Back </a>

    </>
  )
}
