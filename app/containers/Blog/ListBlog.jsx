import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ListBlog({ data, removePost }) {
  return (
    <div className="blog_list">
      <Link to="/blogs/add-blog">Add</Link>
      <ul className="list">
        {data
          ? data.map((item, i) => {
              const editUrl = `/blogs/edit-blog/${item.id}`;
              return (
                <li key={i}>
                  <p>{item.title}</p>
                  <a onClick={() => removePost(item.id)} href="javascript:;">
                    remove
                  </a>
                  <Link to={editUrl}>Edit</Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
ListBlog.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  removePost: PropTypes.func,
};
export default ListBlog;
