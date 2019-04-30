import React from 'react';
// import './Sidebar.scss';

function SidebarNavItem({url, text, icon, hasItems, onOpen, children}) {
  const hasItems = React.Children.count(children);

  return (
    <li className="sidebar__nav-item">
      <a href={url} className="sidebar__nav-link">
        <i className={'sidebar__nav-icon ' + icon } />
        <span className="sidebar__nav-link-text">{text}</span>
        {hasItems ? <i className="sidebar__nav-item-toggle-icon fas fa-angle-right" /> : ''}
      </a>
      {hasItems ? <ul className="sidebar__nav-dropdown">
              {children}
              <li className="sidebar__nav-dropdown-header">
                <a href={url} className="sidebar__nav-link">
                  <i className="sidebar__nav-dropdown-header-icon fas fa-caret-left" />
                  <span className="sidebar__nav-link-text">{text}</span>
                </a>
              </li>
              <li className="sidebar__nav-item">
                <a href="/" className="sidebar__nav-link">
                  <i className="sidebar__nav-icon fas fa-user-plus" />
                  <span className="sidebar__nav-link-text">Sublink 1</span>
                  <i className="sidebar__nav-item-toggle-icon fas fa-angle-right" />
                </a>
              </li>
              <li className="sidebar__nav-item sidebar__nav--subdropdown-open">
                <a href="/" className="sidebar__nav-link">
                  <i className="sidebar__nav-icon fas fa-smile" />
                  <span className="sidebar__nav-link-text">Sublink 2</span>
                  <i className="sidebar__nav-item-toggle-icon fas fa-angle-right" />
                </a>
                <ul className="sidebar__nav-subdropdown">
                  <li className="sidebar__nav-item">
                    <a href="/" className="sidebar__nav-link">
                      <i className="sidebar__nav-icon" />
                      <span className="sidebar__nav-link-text">
                        Sub sublink 1
                      </span>
                    </a>
                  </li>
                  <li className="sidebar__nav-item">
                    <a href="/" className="sidebar__nav-link">
                      <i className="sidebar__nav-icon" />
                      <span className="sidebar__nav-link-text">
                        Sub sublink 2
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul> : ''}
    </li>
  );
}

export default SidebarNavItem;
