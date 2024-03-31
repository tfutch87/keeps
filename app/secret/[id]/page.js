import react from 'react';
import GetNote from '@/app/components/GetNote'
// import { useRouter } from 'next/router';
import customDate from '@/app/util/customDate'
import Link from "next/link"
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';

export default async function Secret({ params }) {

  // const router = useRouter();
  // const { id } = router.query;

  const { foundNote : note } = await GetNote(params.id);
  const humanReadableDate = customDate(note.createdAt)

  return (
    <div className="secret-note margin-auto margin-top-3">
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
    <h1>{note.noteTitle}</h1>
    <p>{note.category}</p>
    </div>
    <p className="content">{note.noteContent}</p>
    
   
    

    <div style={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
    <Link href="/"> <KeyboardReturnRoundedIcon> Go Back </KeyboardReturnRoundedIcon> </Link>
    <div><p style={{textAlign:"right"}}> {note.status}</p>
    <span>Created: {humanReadableDate} </span>
    
    </div>
    </div>
    </div>
  )
}
