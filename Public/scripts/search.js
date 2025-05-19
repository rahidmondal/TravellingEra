/*
 * TravellingEra Search Functionality
 * This script handles the search functionality for the TravellingEra website
 */

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Setup search functionality after a short delay to ensure the header is loaded
    setTimeout(setupSearch, 200);
});

function setupSearch() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchForm || !searchInput) {
        console.error('Search elements not found');
        return;
    }
    
    // Add event listener to search form
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch();
    });
    
    // Log that search is initialized
    console.log('Search functionality initialized');
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        console.error('Search input not found');
        return;
    }
    
    const searchValue = searchInput.value.toLowerCase().trim();
    
    if (!searchValue) {
        alert('Please enter a search term');
        return;
    }
    
    console.log('Searching for:', searchValue);
    
    // Define search mappings - keyword to page URL
    const searchMappings = {
        "red fort": "Pages/Content/redfort.html",
        "redfort": "Pages/Content/redfort.html",
        "india gate": "Pages/Content/indiagate.html",
        "indiagate": "Pages/Content/indiagate.html",
        "jama masjid": "Pages/Content/jamamasjid.html",
        "jamamasjid": "Pages/Content/jamamasjid.html",
        "qutub minar": "Pages/Content/qutubminar.html",
        "qutubminar": "Pages/Content/qutubminar.html",
        "explore": "Pages/Explore.html",
        "plan": "Pages/PlanADay.html",
        "credits": "Pages/credits.html",
        "home": "Pages/home.html",
        "akshardham": "Pages/Content/akshardham.html",
        "bangla sahib": "Pages/Content/banglasahib.html",
        "chandani chowk": "Pages/Content/chandanichowk.html",
        "connaught place": "Pages/Content/connaughtplace.html",
        "dilli haat": "Pages/Content/dillihaat.html",
        "zoo": "Pages/Content/zoo.html"
    };
    
    // Get basePath from the global variable
    const basePath = window.siteBasePath || '';
    
    // Check if search term matches any keywords
    let found = false;
    for (const [key, url] of Object.entries(searchMappings)) {
        if (key.includes(searchValue) || searchValue.includes(key)) {
            console.log('Match found:', key, '->', url);
            console.log('Navigating to:', basePath + url);
            window.location.href = basePath + url;
            found = true;
            break;
        }
    }
    
    if (!found) {
        alert('No results found for: ' + searchValue);
    }
}
