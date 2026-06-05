import React, { useEffect } from "react";
import {
  //  useParams,
  useSearchParams,
} from "react-router-dom";

const Blog: React.FC = () => {
  // const paramsObject = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // console.log(paramsObject.user);
    console.log(searchParams.get("page"));
  });

  // JSX Return
  return (
    <main className="h-screen w-screen bg-slate-500 text-white flex items-center justify-center">
      <section>
        <h1 className="block">Blogs</h1>
        <button
          onClick={() =>
            setSearchParams({
              page: "2",
            })
          }
          className="block mt-5 border p-2 rounded-xl bg-black border-transparent cursor-pointer"
        >
          Change Page
        </button>
      </section>
    </main>
  );
};

export default Blog;
