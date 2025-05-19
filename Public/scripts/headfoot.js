/*This Javascript is responsible for dynamically loading the Header and Footer in all the html pages*/ 

addEventListener('DOMContentLoaded',(Event) => {
    const path = window.location.pathname;
    let basePath = "";
    
    if (path.includes("/Content/") || path.includes("\\Content\\")) {
        basePath = "../../";
    } else if (path.includes("/Pages/") || path.includes("\\Pages\\")) {
        basePath = "../";
    } else {
        basePath = "";
    }
      // Store basePath in a global variable for use in search function
    window.siteBasePath = basePath;
      document.querySelector(".header").innerHTML = `
    <div class="alert alert-warning text-center maintenance-alert" role="alert" style="margin-bottom: 0; position: sticky; top: 0; z-index: 1100; font-weight: bold;">
      🚧 SITE ARCHIVED - Some links and features may not work correctly 🚧
    </div>
    <nav class="navbar bg-body-tertiary fixed-top" style="top: 38px;">
  <div class="container-fluid">    <a class="navbar-brand" href="${basePath}Pages/home.html">
    <img src="${basePath}Resources/travellingera-low-resolution-logo-color-on-transparent-background.png" alt="TravellingEra Logo" width="50" >
    TravellingEra</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">TravellingEra</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>      <div class="offcanvas-body"><ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${basePath}Pages/home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${basePath}Pages/PlanADay.html">Plan a Day</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Explore 
            </a>
            <ul class="dropdown-menu">
             <li class="nav-item dropdown"></li>              <li><a class="dropdown-item" href="${basePath}Pages/Content/redfort.html">Red Fort</a></li>
                <li><a class="dropdown-item" href="${basePath}Pages/Content/indiagate.html">India Gate</a></li>
                  <li><a class="dropdown-item" href="${basePath}Pages/Content/jamamasjid.html">Jama Masjid</a></li>
                    <li><a class="dropdown-item" href="${basePath}Pages/Content/qutubminar.html">Qutub Minar</a></li>
              <li>
              </li>
              <hr class="dropdown-divider">
              <li><a class="dropdown-item" href="${basePath}Pages/Explore.html">Explore More Places</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${basePath}Pages/credits.html">Credits</a>
          </li>
        </ul>

        <div>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">     
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Socials
            </a>
            <ul class="dropdown-menu">
             <li class="nav-item dropdown"></li>

              <li><a class="dropdown-item" href="https://github.com/rahidmondal/TravellingEra"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg> Github Repo </a></li>
            </ul>
          </li>
        </ul>
        </div>        <form class="d-flex mt-3" role="search" id="searchForm" onsubmit="return false;">
          <input id="searchInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="button" onclick="performSearch()">Search</button>
        </form>
        </script>


      </div>
    </div>
  </div>
</nav> 
`

let footer = document.querySelector(".footer");
footer.innerHTML = `
      <p></p>
      <div class="footer-content">
        <p>Copyright© 2022-2025 RME-Bulsajo WT-Group Project Team. All Rights Reserved.</p>
        <p><a href="${basePath}Pages/credits.html">View Project Credits</a></p>
        <p>Version: <a href="https://github.com/rahidmondal/TravellingEra">v.1.2</a></p>

        <iframe src="https://free.timeanddate.com/clock/i8nxvv51/n176/tt0/tw0/tm1/ts1/tb4" frameborder="0" width="87" height="34" style="background-color: inherit;"></iframe>
      </div>
`

;


    

});

