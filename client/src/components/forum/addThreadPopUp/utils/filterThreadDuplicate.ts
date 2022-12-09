import { ThreadType } from "../../../../types/threadTypes";

export const filterThreadsNoDuplicates = (
  threads: ThreadType[],
  setThreadDuplicate: React.Dispatch<React.SetStateAction<boolean>>,
  threadName: string
): boolean => {
  let returnBoolean = false;
  const threadCheck = threads.find(
    (thread) =>
      thread.title.toLocaleLowerCase() === threadName.toLocaleLowerCase()
  );
  console.log(threadCheck, "check");
  if (threadCheck) {
    setThreadDuplicate(false);
    returnBoolean = false;
  }
  if (!threadCheck) {
    setThreadDuplicate(true);
    returnBoolean = true;
  }
  console.log(returnBoolean);
  return returnBoolean;
};
