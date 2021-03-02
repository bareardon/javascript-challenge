// from data.js
var tableData = data;

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
    var dateTimeElement = d3.select("#datetime").property("value");
    var cityElement = d3.select("#city").property("value");
    var stateElement = d3.select("#state").property("value");
    var countryElement = d3.select("#country").property("value");
    var shapeElement = d3.select("#shape").property("value");

    // console.log(date);
    var filterData = tableData;
    console.log(filterData);

    // Apply filter, collect data to keep rows that return criteria
    if (dateTimeElement !== "" ) {
        filterData = filterData.filter((ufoSightings) => ufoSightings.datetime === dateTimeElement);  
    }
       
    if (cityElement !== "" ) {
        filterData = filterData.filter((ufoSightings) => ufoSightings.city === cityElement); 
    }
      
    if (stateElement !== "" ) {
        filterData = filterData.filter((ufoSightings) => ufoSightings.state === stateElement);
    }

    if (countryElement !== "" ) {
        filterData = filterData.filter((ufoSightings) => ufoSightings.country === countryElement);
    }

    if (shapeElement !== "" ) {
        filterData = filterData.filter((ufoSightings) => ufoSightings.shape === shapeElement);
    }
        // Build table with data
        console.log(filterData);
        tableDisplay(filterData);
};

// Attach an event to the click function 
d3.selectAll("#filter-btn").on("click", controlClick);

// Display UFO sightings
// console.log(tableData);
tableDisplay(tableData);


