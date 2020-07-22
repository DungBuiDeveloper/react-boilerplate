import React, { memo, useEffect } from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectError, makeSelectLoading } from './selectors';
import reducer from './reducer';
import { connect } from 'react-redux';
import { loadingBlogId, editPost } from './actions';
import saga from './saga';
import { withRouter } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
const key = 'blog';

function EditBlog({
  loading,
  error,
  getBlogById,
  history,
  handleSubmit,
  pristine,
  reset,
  submitting,
  initialize,
  match,
  editBlog,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  let { id: idPost } = match.params;

  useEffect(() => {
    getBlogById(idPost, initialize);
  }, []);

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    alert(error);
  }

  function submitForm(data) {
    editBlog(data, history, idPost);
  }

  return (
    <div>
      <Helmet>
        <title>Edit Blog Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>

      <form onSubmit={handleSubmit(data => submitForm(data))}>
        <div>
          <label>Title</label>
          <div>
            <Field
              name="author"
              component="input"
              type="text"
              placeholder="Author"
            />
          </div>
        </div>

        <div>
          <label>Author</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
}

EditBlog.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  getBlogById: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getBlogById: (id, initialize) => dispatch(loadingBlogId(id, initialize)),
    editBlog: (data, history, idPost) =>
      dispatch(editPost(data, history, idPost)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default reduxForm({
  form: 'EditBlog',
})(
  withRouter(
    compose(
      withConnect,
      memo,
    )(EditBlog),
  ),
);
