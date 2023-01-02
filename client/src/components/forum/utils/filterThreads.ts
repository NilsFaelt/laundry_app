import { useEffect } from "react";
import { ThreadType } from "../../../types/threadTypes";

export const filterThreads = (
  threads: ThreadType[],
  setFilteredThreads: React.Dispatch<React.SetStateAction<ThreadType[]>>,
  inputSearch: string
) => {
  useEffect(() => {
    const filtererdThreads = threads?.filter((thread) =>
      thread.title.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())
    );

    if (inputSearch !== "" && filtererdThreads.length > 0)
      setFilteredThreads(filtererdThreads);
    else setFilteredThreads(threads);
  }, [inputSearch]);
};
