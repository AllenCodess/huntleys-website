import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useProfileMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import Header from "../components/Header";

function ProfileScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { userInfo } = useSelector(function (state) {
    return state.auth;
  });

  const [updateProfile, { isLoading: loadingUpdateProfile }] = useProfileMutation();

  const dispatch = useDispatch();

  useEffect(
    function () {
      setFormData(function (prev) {
        return { ...prev, name: userInfo.name, email: userInfo.email };
      });
    },
    [userInfo.email, userInfo.name],
  );

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-left">
          <h2>User Profile</h2>
          <form onSubmit={submitHandler}>
            <input
              className="profile-inputs"
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="profile-inputs"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="profile-inputs"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              className="profile-inputs"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit" className="profile-btn">
              Update
            </button>
            {loadingUpdateProfile && <p>Updating...</p>}
          </form>
        </div>

        <div className="profile-right">
          <h2>My Orders</h2>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
