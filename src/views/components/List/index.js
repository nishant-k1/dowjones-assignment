import React from 'react';
import ListItem from '../ListItem/index';

const List = ({ list }) => {
  return (
    <React.Fragment>
      {list.map((item) => {
        const { title, body, id } = item;
        const truncatedBody = body.split(' ').slice(0, 9).join(' ') + '...';
        return (
          <React.Fragment key={id}>
            <ListItem title={title} body={truncatedBody} postId={id} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default List;
