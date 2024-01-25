import React from "react"; 
import './index.scss'
const Blog = () => {
  return (
    <>
      <section id="Blog">
        <div className="BlogArea">
          <div className="TitleBlogOne">
            <h3>Latest News</h3>
          </div>
          <div className="TitleTwo">
            <h1>
            THE BLOG
            </h1>
          </div>
        <div className="CardsAreasBlog">
            <div className="BoxBlog">
                <div className="ImgBlog">
                    <img src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg" alt="" />
                </div>
                <div className="TextBlog">
                    <h1>BEST PLACES FOR WINE</h1>
                </div>
                <div className="PBlog">
                    <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                </div>
            </div>
            <div className="BoxBlog">
                <div className="ImgBlog">
                    <img src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg" alt="" />
                </div>
                <div className="TextBlog">
                    <h1>BEST PLACES FOR WINE</h1>
                </div>
                <div className="PBlog">
                    <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                </div>
            </div>
            <div className="BoxBlog">
                <div className="ImgBlog">
                    <img src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg" alt="" />
                </div>
                <div className="TextBlog">
                    <h1>BEST PLACES FOR WINE</h1>
                </div>
                <div className="PBlog">
                    <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                </div>
            </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
