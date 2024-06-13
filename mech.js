function filterTables() {
    var input, filter, tables, captions, i;
    input = document.getElementById('searchBar');
    filter = input.value.toLowerCase();
    tables = document.getElementsByClassName('data-table');

    // Reset dropdown selection
    document.getElementById('searchDropdown').value = "";

    for (i = 0; i < tables.length; i++) {
        captions = tables[i].getElementsByTagName('caption')[0];
        if (captions) {
            if (captions.innerHTML.toLowerCase().indexOf(filter) > -1) {
                tables[i].style.display = "";
            } else {
                tables[i].style.display = "none";
            }
        }
    }
}

function filterTablesDropdown() {
    var select, filter, tables, captions, i;
    select = document.getElementById('searchDropdown');
    filter = select.value.toLowerCase();
    tables = document.getElementsByClassName('data-table');

    // Clear search bar
    document.getElementById('searchBar').value = "";

    for (i = 0; i < tables.length; i++) {
        captions = tables[i].getElementsByTagName('caption')[0];
        if (captions) {
            if (filter === "" || captions.innerHTML.toLowerCase() === filter) {
                tables[i].style.display = "";
            } else {
                tables[i].style.display = "none";
            }
        }
    }
}
