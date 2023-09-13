import React from "react";
import "./bookshelf.css";
import bookshelfImg from "../../images/bookshelf-img.jpg";

const bookshelf = () => {
  return (
    <section className="bookshelf">
      <div className="container">
        <div className="section-title">
          <h2>bookshelf</h2>
        </div>

        <div className="bookshelf-content grid">
          <div className="bookshelf-img">
            <img src={bookshelfImg} alt="" />
          </div>
          <div className="bookshelf-text">
            <h2 className="bookshelf-title fs-26 ls-1">bookshelf </h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos consequuntur vero commodi provident maiores, iusto
              atque corrupti voluptate vel sequi consectetur unde aliquam
              corporis saepe animi non, tempora reiciendis molestias sed
              laudantium dolores. Assumenda aperiam fuga quo voluptate commodi
              ullam aliquam expedita voluptas delectus.
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default bookshelf;
