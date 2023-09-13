import PersonIcon from '@mui/icons-material/Person';

function NavBar(props) {
  return (
    <div className="nav-bar">
      <div>
        {/* <p>Pages / {props.page}</p> */}
        <h1>{props.page}</h1>
      </div>
      <div>
        <div className="right-nav">
          <PersonIcon />
          <h6>Admin</h6>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
