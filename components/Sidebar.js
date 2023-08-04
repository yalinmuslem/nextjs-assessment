function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo-content">
          <div className="logo">
            <box-icon name="cloud" />
            <div className="logo-name">Assessment</div>
          </div>
          <box-icon name="menu" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="">
              <box-icon name="grid-alt" />
              <span className="link-name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="">
              <box-icon name="cog" />
              <span className="link-name">Modul</span>
            </a>
          </li>
          <li>
            <a href="">
              <box-icon name="user-circle" />
              <span className="link-name">Peserta</span>
            </a>
          </li>
        </ul>
        <div className="profile-content">
          <div className="profile">
            <div className="profile-detail">
              <img src="public/images/profile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
