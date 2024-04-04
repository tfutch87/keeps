"use client";

import { useRouter } from "next/navigation";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`https://www.4keeeps.com/api/Notes/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <DeleteIcon
    id="delete"
      sx={{ color: "#cacaca", padding: ".15em", borderRadius: "50%", backgroundColor: "#f2f2f2", fontSize: "1.5rem" }}
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;