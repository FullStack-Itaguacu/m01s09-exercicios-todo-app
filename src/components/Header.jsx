export const Header = () => {
  return (
    <header className="header bg-body-secondary">
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul class="navbar-nav ">
          <li class="nav-item me-auto">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Quem sou
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
