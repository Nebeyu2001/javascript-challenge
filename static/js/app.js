// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufodata) {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(function([key,value]) {
        var cell=row.append("td");
        cell.text(value);
    });


});

var button=d3.select("#filter-btn");

button.on("click",function(){
    
    var inputid=d3.select("#datetime");
    
    var inputvalue=inputid.property("value");
    
   
    console.log(inputvalue);
   
    var filterdata=tableData.filter(ufodata1 => ufodata1.datetime==inputvalue);
    console.log(filterdata);
    tbody.html("");
    
    filterdata.forEach(function(ufodata) {
        var row= tbody.append("tr");
        Object.entries(ufodata).forEach(function([key,value]) {
            var cell=row.append("td");
            cell.text(value);
        });
    
    
    });
    
});