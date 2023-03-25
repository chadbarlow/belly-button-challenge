

//  Use the D3 library to read in samples.json from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise 
const dataPromise = d3.json(url);

// Fetch the JSON data and do something with it
d3.json(url).then(function (data) {
    var bubChart = data;
    var gaugeChart = data;

    //Create dropdown menu
    let array = Object.values(data.names);
    var selectList = document.getElementById("selDataset");
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    };






    // On change to the DOM, call getData()
    d3.selectAll("#selDataset").on("change", getData);

    // Function called by DOM changes
    function getData() {
        let dropdownMenu = d3.select("#selDataset");
        let id = dropdownMenu.property("value");
        let sample = data.samples.find(s => s.id === id);
        let index = data.names.indexOf(id);
        console.log("index: " + index);

        if (sample) {
            sampleValues = sample.sample_values.slice(0, 10);
            console.log(sample.id + ": " + sampleValues);
            otuIds = sample.otu_ids.map(String).slice(0, 10).map(item => 'OTU ' + item);
            console.log(sample.id + ": " + otuIds);

        }

        createBar(sampleValues, otuIds);
        createDemographics(index);
        createGauge(index);
    }

    function createDemographics(index) {
        let demographics = Object.entries(data.metadata[index]);
        let htmlString = "";
        // Loop through array and concatenate key-value pairs
        for (var i = 0; i < demographics.length; i++) {
            htmlString += "<p>" + demographics[i][0] + ": " + demographics[i][1];
        }
        document.getElementById("sample-metadata").innerHTML = htmlString;
    }

    function createBar(sampleValues, otuIds) {
        // Display plots
        let barChart = [{
            type: 'bar',
            x: sampleValues,
            y: otuIds,
            orientation: 'h'

            // Use otu_labels as the hovertext for the chart.
        }];
        let barLayout = { height: 425, margin: { t: 0, l: 125, r: 0, b: 0 } };

        Plotly.newPlot('bar', barChart, barLayout);
    }

    // Update the restyled plot's values
    //     function updatePlotly(newdata) {
    //         Plotly.restyle("pie", "values", [newdata]);
    //     }

    // Create a bubble chart that displays each sample.
    var bubChart = [{
        x: bubChart.samples[0].otu_ids,
        y: bubChart.samples[0].sample_values,
        mode: 'markers',
        marker: {
            size: bubChart.samples[0].sample_values,
            color: bubChart.samples[0].otu_ids,
            colorscale: 'Earth'
        }
    }];

    var bubLayout = {
        xaxis: { title: 'OTU ID' },
        height: 600,
        margin: { t: 20 },
    };

    Plotly.newPlot('bubble', bubChart, bubLayout);

    function createGauge(index) {
        var gaugeChart = [
            {
                value: data.metadata[index].wfreq,
                title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs Per Week<br> " },
                type: "indicator",
                mode: "gauge+number"
            }
        ];
        console.log(data.metadata[index].wfreq);
        let gaugeLayout = { width: 500, margin: { t: 75, l: 50, r: 125, b: 0 } };
        Plotly.newPlot('gauge', gaugeChart, gaugeLayout);

    }




}).catch(function (error) {
    // Handle any errors here
});


