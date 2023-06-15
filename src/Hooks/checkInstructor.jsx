import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAXios";


const checkInstructor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  console.log(user?.email, "this is user email")
  
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
      console.log(res.data)
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default checkInstructor;