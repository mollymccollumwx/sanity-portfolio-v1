import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import {Link} from "react-router-dom";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset-> {
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <h1>Project Page</h1>
        <h2>Welcome to my project page</h2>
        <div>
            {postData && postData.map((post, index)=> (

            
            <article>
                {/* <Link > */}
                <span>
                    <img src={post.mainImage.asset.url}/>
                    <span>
                        <h3>
                            {post.title}
                        </h3>
                    </span>
                </span>
                {/* </Link> */}
            </article>
  ))}
        </div>

      </section>
    </main>
  );
}
