import React from 'react';
import './IconWindow.scss';

function IconWindow (props) {
  return (
    <div className="icon-window">
      <div className="icon-window__icon">
        <i className={props.icon} />
      </div>
      
      <div className="icon-window__content">{props.children}</div>
    </div>
  );
}

export default IconWindow;
