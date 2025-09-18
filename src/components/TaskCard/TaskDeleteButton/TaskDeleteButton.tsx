"use client";

import { DeleteTask, FormState } from "@/actions/task";
import { useEffect } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const DeleteTaskWithId = DeleteTask.bind(null, id);
  const initialState: FormState = { error: "" };
  const [state, fromAction] = useActionState(DeleteTaskWithId, initialState);

  useEffect(() => {
    if (state && state.error !== "") {
      alert(state.error);
    }
  }, [state]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="hover:text-gray-700 text-lg cursor-pointer disabled:bg-gray-400"
      >
        <FaTrashAlt />
      </button>
    );
  };
  return (
    <form action={fromAction}>
      <SubmitButton />
    </form>
  );
};

export default TaskDeleteButton;
