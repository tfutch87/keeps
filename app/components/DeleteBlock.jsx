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
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;