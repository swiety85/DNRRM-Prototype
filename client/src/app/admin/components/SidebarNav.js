import React from 'react';
// import './Sidebar.scss';

function SidebarNav ({items}) {
    return (
        <ul className="sidebar__nav sidebar__nav--open">
          items.map((item) => )
          <li className="sidebar__nav-item">
            <a href="/" className="sidebar__nav-link">
              <i className="sidebar__nav-icon fas fa-grip-horizontal" />
              <span className="sidebar__nav-link-text">Single link 1</span>
            </a>
          </li>
          <li className="sidebar__nav-item">
            <a href="/" className="sidebar__nav-link">
              <i className="sidebar__nav-icon fas fa-address-book" />
              <span className="sidebar__nav-link-text">Single link 2</span>
            </a>
          </li>
          <li className="sidebar__nav-item sidebar__nav-item--dropdown-open">
            <a href="/" className="sidebar__nav-link">
              <i className="sidebar__nav-icon fas fa-users" />
              <span className="sidebar__nav-link-text">Dropdown link</span>
              <i className="sidebar__nav-item-toggle-icon fas fa-angle-right" />
            </a>
            <ul className="sidebar__nav-dropdown">
              <li className="sidebar__nav-dropdown-header">
                <a href="/" className="sidebar__nav-link">
                  <i className="sidebar__nav-dropdown-header-icon fas fa-caret-left" />
                  <span className="sidebar__nav-link-text">Dropdown link</span>
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
            </ul>
          </li>
        </ul>
    );
}

export default SidebarNav;
