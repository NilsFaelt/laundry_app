import { Post } from "../../../../../types/postType";

export const checkIfLastPostIsFromSameUser = (posts: Post[]) => {
  if (
    posts[posts.length - 1]?.createdBy === posts[posts.length - 2]?.createdBy
  ) {
    return true;
  } else return false;
};
