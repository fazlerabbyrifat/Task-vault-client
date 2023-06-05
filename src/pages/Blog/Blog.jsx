import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Task Vault | Blog</title>
      </Helmet>
      <h1 className="text-2xl lg:text-5xl font-bold uppercase text-center my-10 p-10">
        Blog page will be available as soon as possible
      </h1>
    </div>
  );
};

export default Blog;
