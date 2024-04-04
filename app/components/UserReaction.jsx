"use client"

import { useRouter } from "next/navigation"
import React , {useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function UserReaction(props) {

    const router = useRouter();


    const [like, setLike] = useState(props.like);

    const handleLove = async (e) => {

        e.preventDefault()

      setLike("love")
        const res = await fetch(`/api/Notes/${props.id}`, {
          method: "PUT",
          cache: "no-store",
          body: JSON.stringify({ userReaction: "love" }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        router.push('/');
        router.refresh();
      };

      const handleDislike = async (e) => {
        e.preventDefault()

        setLike("noLike")
          const res = await fetch(`/api/Notes/${props.id}`, {
            method: "PUT",
            cache: "no-store",
            body: JSON.stringify({ userReaction: "noLike" }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          router.push('/');
          router.refresh();
        };
  


        if(like === "noLike"){

            return( 

              <FavoriteBorderIcon id="reaction-love" className="reaction-love" onClick={handleLove} /> 

            )
        }

        if(like === "love"){

            return(
              <FavoriteIcon id="reaction-dislike" className="reaction-dislike" onClick={handleDislike} />
            )
        }


}
