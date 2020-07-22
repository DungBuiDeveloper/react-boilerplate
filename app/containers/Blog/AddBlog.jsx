import React, { memo } from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectError, makeSelectLoading } from './selectors';
import reducer from './reducer';
import { connect } from 'react-redux';
import { addPost } from './actions';
import saga from './saga';
import { withRouter } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
const key = 'blog';

function AddBlog({
  loading,
  error,
  addBlog,
  history,
  handleSubmit,
  pristine,
  reset,
  submitting,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    alert(error);
  }

  function submitForm(data) {
    addBlog(data, history);
  }

  return (
    <div>
      <Helmet>
        <title>Add Blog Page</title>
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

AddBlog.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  addBlog: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    addBlog: (data, history) => dispatch(addPost(data, history)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default reduxForm({
  form: 'addBlog',
})(
  withRouter(
    compose(
      withConnect,
      memo,
    )(AddBlog),
  ),
);
