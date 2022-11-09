import { useEffect, useState } from "react";
import { getAllUsers } from "../api/getAllUsers";
import { UserTypeWithNestedAdress } from "../types/userType";

export const useGetAllUsers = (
  fireOfEffect: string
): {
  data: UserTypeWithNestedAdress[] | null;
  loading?: boolean;
  error?: any;
} => {
  const [data, setData] = useState<UserTypeWithNestedAdress[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const fetch = async () => {
    setLoading(true);
    try {
      const users = await getAllUsers();
      setData(users.users);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, [fireOfEffect]);

  return { data: data, loading: loading, error: error };
};
