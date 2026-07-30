import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addUser } from "../features/auth/authSlice";
import { useState } from "react";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersData")) || [],
  );
  // Auth error from reducer using useSelector hook
  const authError = useSelector((state) => state.auth.error);

  //useDispatch hook
  const dispatch = useDispatch();

  //React hook Form destructure
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  //Register form onSubmit function
  const registerSubmit = (data) => {
    const userExists = usersData.some(user => user.email === data.email);

    if(userExists){
        toast.error('Email already taken')
        reset();
        return;
    }

    let dataArr = [...usersData, data];
    setUsersData(dataArr);
    localStorage.setItem("usersData", JSON.stringify(dataArr));
    toast.success('Registered successfully')
    reset();
  };

  //Login form onSubmit function
  const loginSubmit = (data) => {
    let userFound = usersData.find(
      (user) => user.email === data.email && user.password === data.password,
    );
    if (!userFound) {
      toast.error("Invalid email or password");
      reset();
      return;
    }
    dispatch(addUser(userFound));
    localStorage.setItem('loggedInUser', JSON.stringify(userFound));
    toast.success('User loged in')
    reset();
  };

  return {
    authError,
    dispatch,
    register,
    handleSubmit,
    reset,
    errors,
    registerSubmit,
    loginSubmit,
  };
};
