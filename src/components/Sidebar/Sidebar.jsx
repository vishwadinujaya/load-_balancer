import React from 'react';
import { Link } from 'react-router-dom';
import '../../dist/css/sidebar-custom.css';

const Sidebar = () => {
  return (
    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
      <div className="sidebar-brand">
        <Link to="/dashboard" className="brand-link">
          <img
            src="/dist/assets/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image opacity-75 shadow"
          />
          <span className="brand-text fw-light">LB dashboard</span>
        </Link>
      </div>
      <div className="sidebar-wrapper">
        <nav className="mt-2">
          <ul
            className="nav sidebar-menu flex-column"
            data-lte-toggle="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-box-seam-fill"></i>
                <p>
                  Widgets
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/widgets/info-box" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>info Box</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/generate/theme" className="nav-link">
                <i className="nav-icon bi bi-palette"></i>
                <p>Theme Generate</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-clipboard-fill"></i>
                <p>
                  Layout Options
                  <span className="nav-badge badge text-bg-secondary me-3"></span>
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/layout/unfixed-sidebar" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Default Sidebar</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-tree-fill"></i>
                <p>
                  UI Elements
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/UI/general" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>General</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/UI/timeline" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Timeline</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-pencil-square"></i>
                <p>
                  Forms
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/forms/general" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>General Elements</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-table"></i>
                <p>
                  Tables
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/tables/simple" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Simple Tables</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-header">EXAMPLES</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-box-arrow-in-right"></i>
                <p>
                  Auth
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/examples/login" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Login</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/examples/register" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Register</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/docs/color-mode" className="nav-link">
                <i className="nav-icon bi bi-star-half"></i>
                <p>Color Mode</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-ui-checks-grid"></i>
                <p>
                  Components
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/docs/components/main-header" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Main Header</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/docs/components/main-sidebar" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Main Sidebar</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-filetype-js"></i>
                <p>
                  Javascript
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/docs/javascript/treeview" className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Treeview</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-header">LABELS</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-circle text-danger"></i>
                <p className="text">Important</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-circle text-warning"></i>
                <p>Warning</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-circle text-info"></i>
                <p>Informational</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
