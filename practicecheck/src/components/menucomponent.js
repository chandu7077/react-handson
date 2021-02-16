import "bootstrap/dist/css/bootstrap.css";
import "../Stylesheets/mystyle.css";
import LoginComponent from "./logincomponent";
export function NavbarUser() {
    return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="#" class="navbar-brand brand">mStock App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
       </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link" href="/companies">Companies</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/watchlist">Watch List</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/compare">Compare Performance</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/logout">Logout</a>
              </li>
          </ul>
        </div>
    </nav>
   
  )
}

export function NavbarAnonymous() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">mStock App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/login">login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/companies">Companies</a>
            </li>
                
        </ul>
        </div>
    </nav>
        
      )
}

export function MenuComponent(props) { 
    const isLoggedin=props.isLoggedin;
    console.log(props);
    return isLoggedin ?
        (
                <NavbarUser />
        )
        :
        (
                <NavbarAnonymous />
                
        )
}