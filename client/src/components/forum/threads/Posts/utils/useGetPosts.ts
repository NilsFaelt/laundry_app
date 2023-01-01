import axios from "axios";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../../../../api/getAllPosts";
import { Post } from "../../../../../types/postType";

export const useGetPosts = (thread: string, activateFetch: boolean) => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const fetch = async () => {
    setLoading(true);
    try {
      const data = await getAllPosts(thread);
      setData(data);
    } catch (err) {
      setError({ err });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, [thread, activateFetch]);
  return { data, loading, error };
};
