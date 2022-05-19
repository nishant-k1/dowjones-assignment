import React from 'react';
import ListItem from '../ListItem/index';
import ListStyles from './index.module.css';

const List = ({ list }) => {
  return (
    <React.Fragment>
      <div className={ListStyles.list}>
        {list.map((item) => {
          const { title, body, id } = item;
          const truncatedBody =
            body && body.split(' ').slice(0, 9).join(' ') + '...';
          return (
            <React.Fragment key={id}>
              <ListItem title={title} body={truncatedBody} postId={id} />
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default List;
