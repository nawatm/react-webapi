/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
      <nav id="sidebar" className="sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
            <span className="align-middle">Smart Design</span>
          </a>
          <ul className="sidebar-nav">
            <li className="sidebar-header">
              Pages
            </li>
            <li className="sidebar-item">
              <NavLink to="/backend/dashboard" className="sidebar-link">
                <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="pages-profile.html">
                <i className="align-middle" data-feather="user" /> <span className="align-middle">Profile</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="pages-settings.html">
                <i className="align-middle" data-feather="settings" /> <span className="align-middle">Settings</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="pages-invoice.html">
                <i className="align-middle" data-feather="credit-card" /> <span className="align-middle">Invoice</span>
              </a>
            </li>
            <li className="sidebar-item active">
              <a className="sidebar-link" href="pages-blank.html">
                <i className="align-middle" data-feather="book" /> <span className="align-middle">Blank</span>
              </a>
            </li>
            <li className="sidebar-header">
              Tools &amp; Components
            </li>
            
            <li className="sidebar-item">
              <a className="sidebar-link" href="icons-feather.html">
                <i className="align-middle" data-feather="coffee" /> <span className="align-middle">Icons</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a data-target="#forms" data-toggle="collapse" className="sidebar-link collapsed">
                <i className="align-middle" data-feather="check-circle" /> <span className="align-middle">Forms</span>
              </a>
              <ul id="forms" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                <li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Form Layouts</a></li>
                <li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Basic Inputs</a></li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="tables-bootstrap.html">
                <i className="align-middle" data-feather="list" /> <span className="align-middle">Tables</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Sidebar
