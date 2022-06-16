import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../page/About";
import Course from "../page/Course";
import CourseDetail from "../page/CourseDetail";
import Member from "../page/Member";
import MemberColloction from "../page/MemberCollection";
import Product from "../page/Product";
import ProductDetail from "../page/ProductDetail";
import Test from "../page/Test";
import Aside from "./Aside";

const Main = () => {
  return (
    <main className="flex flex-wrap justify-around pt-32 pb-12 mx-auto max-w-7xl">
      <Aside />
      <div className="w-full max-w-5xl md:w-3/4 ">
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/member" element={<Member />} />
          <Route path="/course" element={<Course />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/memberCollection" element={<MemberColloction />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
