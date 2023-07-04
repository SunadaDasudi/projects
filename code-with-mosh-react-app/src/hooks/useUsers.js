import { useState, useEffect } from "react";
import UserService from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { request, cancel } = UserService.getAll();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => cancel;
  }, []);

  return { users, error, loading, setUsers, setError };
};

export default useUsers;
