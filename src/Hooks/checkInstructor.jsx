import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAXios";

const checkInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  
  const { data: isInstructor, isLoading: isInstrcutorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstrcutorLoading];
};
export default checkInstructor;