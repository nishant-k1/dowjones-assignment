import React from 'react';

const CreatePost = () => {
  return (
    <div>
      <React.Fragment>
        <label htmlFor="userId">User Id</label>
        <input name="userId" />
        <label htmlFor="title">Title</label>
        <input name="title" />
        <label htmlFor="body">Title</label>
        <input name="body" />
      </React.Fragment>
    </div>
  );
};

export default CreatePost;
