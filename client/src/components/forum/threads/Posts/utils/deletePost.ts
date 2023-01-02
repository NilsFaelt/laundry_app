export const deletePost = (
  id: string,
  setPostId: React.Dispatch<React.SetStateAction<string>>,
  setDeletepostsPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  setToogleMenu: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setPostId(id);
  setDeletepostsPopUp(true);
  setToogleMenu(false);
};
