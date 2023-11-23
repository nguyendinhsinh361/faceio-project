import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CourseApi from "../Services/CourseApi";
import {ReactMarkdown} from "react-markdown/lib/react-markdown";
import logo from "./../assets/Images/logo.png";
import "../assets/css/BlogDetail.css";
function BlogDetail() {
  const {id} = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    console.log("Id", id);
    getBlogById();
  }, []);

  const getBlogById = () => {
    CourseApi.getPostById(id).then((resp) => {
      const item = resp.data.data;
      console.log(1111, item);
      const result = {
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.description,
        tag: item.attributes.tag,
        coverImage: item.attributes.coverImage.data.attributes.url,
      };
      setPost(result);
      console.log("Result", result);
    });
  };
  return (
    <div className="px-6 md:px-20 lg:px-56 mt-10">
      <h3 className="text-red-600 text-[18px]">{post.tag}</h3>
      <h3 className="text-[23px] font-bold">{post.title}</h3>
      <div className="flex items-center mt-5">
        <img src={logo} className="w-[35px] rounded-full" />
        <div className="ml-4">
          <h3 className="text-green-700 font-bold text-[12px]">Shinnd</h3>
          <h3 className="text-gray-500 text-[10px]">8 Jan 2024</h3>
        </div>
      </div>
      <img src={post.coverImage} className="rounded-2xl mt-5 mb-5 w-full" />
      {/* <h3>{post.desc}</h3> */}
      <ReactMarkdown
        children={post.desc}
        escapeHtml={false}
        className="leading-9"
      />
    </div>
  );
}

export default BlogDetail;
