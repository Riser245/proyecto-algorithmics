const HEADER = document.querySelector('header');
HEADER.innerHTML = `

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
        <a class="navbar-brand mt-2 mb-2 m-lg-3" href="#">
          <img src="../screens/img/take-off 1.png" alt="Logo" width="50" height="45">
        </a>    
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-5 ms-5">
          <a class="nav-link text-white texto active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link texto" href="#">Link</a>
        </li>
        <li class="nav-item me-5 dropdown">
          <a class="nav-link texto dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
                <a class="nav-link text-white texto active m-3" aria-current="page" href="#">Iniciar Sesion</a>
      </form>
    </div>
  </div>
</nav>

    <!-- contralador de el header -->
    <style>
      .navbar {
        background-color: rgba(0, 0, 0, 1) !important;
      }
      .texto{
        font-family: 'Ropa Sans';
        color: white;
      }
    </style>

    
`
