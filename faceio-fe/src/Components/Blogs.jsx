import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "./../assets/Images/logo.png";
const Blogs = ({posts}) => {
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10 px-10 md:px-15 lg:px-32"
    >
      {posts.map((item) => (
        <div
          key={item.id}
          className="m-4 cursor-pointer"
          onClick={() => navigate("blog-detail/" + item.id)}
        >
          <img
            src={item.coverImage}
            className="w-full rounded-2xl
           object-cover h-[200px]"
          />
          <h3 className="text-red-500 mt-3">{item.tag}</h3>
          <h3 className="font-bold mt-3">{item.title}</h3>
          <h3 className="line-clamp-3 text-gray-400 mt-3">{item.desc}</h3>
          <div className="flex items-center mt-5">
            <img src={logo} className="w-[35px] rounded-full" />
            <div className="ml-2">
              <h4 className="font-bold text-[12px] text-green-700">Shinnd</h4>
              <h4 className="text-gray-500 text-[10px]">8 Jan 2024</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
