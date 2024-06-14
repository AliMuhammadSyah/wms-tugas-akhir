import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginBg } from "../assets";
import { api } from "../utility/api";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const initalValues = {
    username: "",
    password: "",
  };

  const handleLogin = async (values) => {
    try {
      const data = await api.post("/login", values);
      if (data.status === 200) {
        localStorage.setItem("user", JSON.stringify(data?.data?.data));

        if (data?.data?.data?.role_id === 1) {
          return navigate("/admin");
        }

        if (data?.data?.data?.role_id === 2) {
          navigate("/pemilik");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <img
          src={LoginBg}
          alt="Login Background WMS"
          className="w-full h-screen fill-transparent"
        />
      </div>
      <div className="col-span-4 flex flex-col w-full justify-center items-center h-full">
        <div className="relative shadow-2xl py-16 px-8 rounded-lg w-3/4">
          <h1 className="text-4xl font-extrabold tracking-wider mb-8 text-center">
            LOGIN
          </h1>
          <Formik initialValues={initalValues} onSubmit={handleLogin}>
            <Form>
              <div className="mb-6">
                <p className="text-sm tracking-wide text-zinc-400 mb-2">
                  Username
                </p>
                <Field
                  name="username"
                  type="text"
                  className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                />
                <ErrorMessage name="username" />
              </div>
              <div className="mb-8">
                <p className="text-sm tracking-wide text-zinc-400 mb-2">
                  Password
                </p>
                <Field
                  name="password"
                  type="password"
                  className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                />
                <ErrorMessage name="password" />
              </div>
              <button
                type="submit"
                className="mb-12 py-3 px-5 rounded-sm bg-zinc-800 hover:bg-zinc-900 transition-colors duration-150 text-sm tracking-wide text-white w-1/2"
              >
                LOGIN
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 bg-zinc-400 h-[0.05rem] w-1/4"></div>
              <p className="text-center text-xs tracking-wider text-zinc-600 mt-3">
                Selamat datang di Warehouse Management System Di Desa Sumberejo.
                Lakukan login sesuai dengan username dan password yang telah
                diterima saat mendaftar.
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
