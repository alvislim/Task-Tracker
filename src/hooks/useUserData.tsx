import { ChangeEvent } from "react";
import { useTrackerStore } from "../store/trackerStore";

export const useUserData = () => {
  const { setInput, input } = useTrackerStore();

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const id = target.id as string;
    const value = target.value as string;
    id &&
      setInput({
        ...input,
        [id]: value,
      });
  };

  return {
    onChange,
  };
};
