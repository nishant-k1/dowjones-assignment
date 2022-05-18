import React from 'react';
import ListItem from '../ListItem/index';

const List = ({ list }) => {
  return (
    <React.Fragment>
      {list.map((item) => {
        const { title, body, id } = item;
        return (
          <React.Fragment key={id}>
            <ListItem title={title} body={body} postId={id} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default List;
