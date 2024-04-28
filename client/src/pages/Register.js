import { DatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import dayjs from "dayjs";

export default function Register({ handleLogin }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [finalImg, setFinalImg] = useState(null);
  // const [token, setToken] = useState("");
  // const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = URL.createObjectURL(file);
      setImage(img);
    }
    setFinalImg(file);
    setProfileImg(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      username: username,
      dob: dob ? dayjs(dob).format("MM/DD/YYYY") : "",
      profile: image,
      email: email,
      password: password,
    };
    if (formData.dob == "") {
      toast.info("Please fill all input fields!");
    }

    //sending POST request to the backend api with register form data
    axios
      .post("http://localhost:3001/register", formData)
      .then((result) => {
        toast.success(result.data.message);
        // setData(result.data);
        // setToken(result.data.token);
        setTimeout(() => {
          handleLogin(result.data.token);
        }, 4000);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  console.log(image);

  return (
    <div className="bg-bg-image bg-cover bg-no-repeat  min-h-screen">
      <ToastContainer />
      <div className="flex flex-row items-center justify-center pt-24">
        <form
          className="w-[450px] py-4 px-5 border border-[#eee] shadow-lg rounded-[10px] bg-white"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-[24px] text-rose-700 font-quicksand font-bold mb-2">
            Register
          </p>
          {/*  == Name === */}
          <div>
            <p className="font-Poppins font-medium text-[16px] my-2">Name</p>
            <input
              type={"text"}
              placeholder=""
              className="w-full bg-white border border-[#6e6e6e] px-3 py-2 rounded-[4px]"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/*  == Email === */}
          <p className="font-Poppins font-medium text-[16px] my-2">Email</p>
          <input
            type={"email"}
            placeholder="example@gmail.com"
            className="w-full bg-white border border-[#6e6e6e] px-3 py-2 rounded-[4px]"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex flex-row gap-2 items-center justify-between">
            {/*  == UserName === */}
            <div>
              <p className="font-Poppins font-medium text-[16px] my-2">
                Username
              </p>
              <input
                type={"text"}
                placeholder=""
                className="w-full bg-white border border-[#6e6e6e] px-3 py-2 rounded-[4px]"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {/*  == Dob === */}
            <div>
              <p className="font-Poppins font-medium text-[16px] my-2">D.O.B</p>
              <DatePicker
                // label="Controlled picker"
                name="dob"
                value={dob}
                className="w-full bg-white !border !border-[#6e6e6e] !py-0 rounded-[4px]"
                onChange={(newValue) => setDob(newValue)}
              />
            </div>
          </div>
          {/*  == Upload profile photo === */}
          <p className="font-Poppins font-medium text-[16px] my-2">
            Upload Photo
          </p>
          <div className="bg-white border border-[#6e6e6e] w-full px-3 py-2 rounded-[4px] flex flex-row items-center justify-between gap-5">
            <input
              type={"file"}
              placeholder=""
              className="w-[70%]"
              name="profile"
              value={profileImg}
              onChange={(e) => handleFileChange(e)}
              required
            />
            {image && <img src={image} className="w-[40px] h-[30px] " alt="" />}
          </div>

          {/*  == Password === */}
          <p className="font-Poppins font-medium text-[16px] my-2">Password</p>
          <input
            type={"password"}
            placeholder="password"
            className="w-full bg-white border border-[#6e6e6e] px-3 py-2 rounded-[4px]"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/*  == Confirm Password === */}
          <p className="font-Poppins font-medium text-[16px] my-2">
            Confirm Password
          </p>
          <input
            type={"password"}
            placeholder=""
            className="w-full bg-white border border-[#6e6e6e] px-3 py-2 rounded-[4px]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {confirmPassword === password &&
          confirmPassword.length == password.length ? null : (
            <p className="text-red-600 text-[14px] font-quicksand font-medium">
              Password did not match
            </p>
          )}

          {/*  == Register Button === */}
          <button
            type={"submit"}
            className="w-full flex flex-row items-center justify-center h-[40px] bg-orange-700 text-white rounded-[4px] hover:bg-rose-800 my-4 cursor-pointer"
          >
            <p className="text-[18px] font-quicksand font-bold">Register</p>
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <a href="/login" className="text-rose-700 ">
              Login
            </a>{" "}
            here
          </p>
        </form>
      </div>
    </div>
  );
}
