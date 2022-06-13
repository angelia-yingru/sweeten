import React, { useState } from "react";
import { userLinkGoogle, userLogout, userLogin, auth } from "../utils/auth/";
import { useMultiInput, useLoading } from "../utils/hooks/";
import axios from "axios";
import { API_URL } from "../utils/config";

const testUser = {
  name: "test",
  email: "testtest@gmail.com",
  password: "testtest",
};

const Test = () => {
  console.log(process.env);
  const [WhileLoad, runLoad] = useLoading();
  const [Inputs, allRef] = useMultiInput(["name", "acount", "password"]);
  const [render, setRender] = useState("");
  return (
    <>
      {/* useMultiInput */}
      <Inputs.Acount className=" bg-primary" />
      <br />
      <Inputs.Password type="password" className=" bg-primary" />
      <br />
      <Inputs.Name className=" bg-primary" />
      <br />
      <button
        onClick={() => {
          // console.log("allRef.current");
          // console.log(allRef.current);
          console.log("allRef.get()");
          console.log(allRef.get());
          allRef.clear();
        }}
      >
        get
      </button>
      <br />

      {/* // firebase auth */}
      <WhileLoad
        loading={<button className=" animate-pulse">Loading</button>}
        done={
          <button
            onClick={() => {
              runLoad(userLogout, 3000);
            }}
          >
            logout
          </button>
        }
      />

      <br />
      <button onClick={userLinkGoogle}>login</button>
      <br />
      <button
        onClick={() => {
          axios
            .post(API_URL + "/auth", testUser)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }}
      >
        SIGNIN
      </button>
      <h1 className="h1">class name: h1</h1>
      <h2 className="h2">class name: h2</h2>
      <h3 className="h3">class name: h3</h3>
      <h4 className="h4">class name: h4</h4>
      <p className="p">class name: p</p>
      <note className="note">class name: note</note>
      <p>{render}</p>
    </>
  );
};

export default Test;
