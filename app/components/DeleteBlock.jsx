"use client";

import { useRouter } from "next/navigation";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Notes/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <DeleteIcon
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;