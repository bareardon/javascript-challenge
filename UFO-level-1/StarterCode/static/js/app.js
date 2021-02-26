// from data.js
var tableData = data;

// Set up a reference to the table body
var tbody = d3.select("tbody");

// Create function to display UFO sightings
function tableDisplay(ufoSightings) {
    tbody.html("");
    ufoSightings.forEach((ufoRecords) => {
        var row = tbody.append("tr");
        Object.entries(ufoRecords).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Select the filter-table button
var button = d3.select("#filter-btn");

// Create an event that triggers button when clicked 
function controlClick() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element, get the raw HTML node and get the value property of the input element
    var date = d3.select("#datetime").property("value");

    // console.log(date);
    var filterData = tableData;

    // Filter through date/time column to return results that match user input 
    if(date === "") {
        // Show whole table if no date is entered
        
        // Build table with data
        tableDisplay(filterData);
        } 
    else {
    // Apply filter, collect data to keep rows that return criteria
        filterData = filterData.filter((ufoSightings) => ufoSightings.datetime === date);
        console.log(filterData);
    }
        // Build table with data
        tableDisplay(filterData);
};

// Attach an event to the click function 
d3.selectAll("#filter-btn").on("click", controlClick);

// Display UFO sightings
// console.log(tableData);
tableDisplay(tableData);

