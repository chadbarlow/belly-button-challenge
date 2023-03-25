const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const getData = (data, id) => {
    const sample = data.samples.find(s => s.id === id);
    const index = data.names.indexOf(id);
    const sampleValues = sample.sample_values.slice(0, 10);
    const otuIds = sample.otu_ids.slice(0, 10).map(id => `OTU ${id}`);
    const otuLabels = sample.otu_labels.slice(0, 10).map(label => label.split(";").join("<br> "));

    return {
        index,
        sampleValues,
        otuIds,
        otuLabels,
        wfreq: data.metadata[index].wfreq
    };
};

const createDropdown = (data) => {
    const selectList = document.getElementById("selDataset");
    data.names.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.text = name;
        selectList.appendChild(option);
    });
};

const updateDemographics = (metadata) => {
    const demographics = Object.entries(metadata);
    const htmlString = demographics.map(([key, value]) => `<p>${key}: ${value}</p>`).join("");
    document.getElementById("sample-metadata").innerHTML = htmlString;
};

const createBarChart = ({ sampleValues, otuIds, otuLabels }) => {
    const data = [{
        type: 'bar',
        x: sampleValues,
        y: otuIds,
        orientation: 'h',
        text: otuLabels,
        hovertemplate: '<b>Bacteria Type(s):</b><br><i>%{text}</i><extra></extra>',
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" }
    }];
    const layout = {
        height: 425,
        margin: { t: 0, l: 125, r: 0, b: 0 }
    };
    Plotly.newPlot('bar', data, layout);
};

const createBubbleChart = (sample) => {
    const data = [{
        x: sample.otu_ids,
        y: sample.sample_values,
        mode: 'markers',
        marker: {
            size: sample.sample_values,
            color: sample.otu_ids,
            colorscale: 'Earth'
        },
        text: sample.otu_labels.map(label => label.split(";").join("<br> ")),
        hovertemplate: '<b>Bacteria Type(s):</b><br><i>%{text}</i><extra></extra>',
        hovermode: "closest"
    }];
    const layout = {
        xaxis: { title: 'OTU ID' },
        margin: { t: 40 },
    };
    Plotly.newPlot('bubble', data, layout);
};

const createGaugeChart = (wfreq) => {
    const data = [{
        value: wfreq,
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs Per Week<br> " },
        type: "indicator",
        mode: "gauge+number"
    }];
    const layout = {
        width: 500,
        margin: { t: 75, l: 50, r: 125, b: 0 }
    };
    Plotly.newPlot('gauge', data, layout);
};

const updateCharts = (data, id) => {
    const { index, sampleValues, otuIds, otuLabels, wfreq } = getData(data, id);
    updateDemographics(data.metadata[index]);
    createBarChart({ sampleValues, otuIds, otuLabels });
    createBubbleChart(data.samples[index]);
    createGaugeChart(wfreq);
};

d3.json(url).then(data => {
    createDropdown(data);
    d3.selectAll("#selDataset").on("change", () => {
        const id = d3.event.target.value;
        updateCharts(data, id);
    });
}).catch(error => console.log(error));



// ----------------- OLD CODE ----------------- //


// // Define the URL of the dataset and retrieve the JSON data
// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// const dataPromise = d3.json(url);

// // Main function to process the dataset and create visualizations
// d3.json(url).then(function (data) {

//     // Populate the dropdown menu with sample IDs
//     let array = Object.values(data.names);
//     let selectList = document.getElementById("selDataset");
//     for (i = 0; i < array.length; i++) {
//         let option = document.createElement("option");
//         option.value = array[i];
//         option.text = array[i];
//         selectList.appendChild(option);
//     };

//     // Attach event listener for dropdown menu selection change
//     d3.selectAll("#selDataset").on("change", getData);

//     // Function to be called when dropdown menu selection changes
//     function getData() {
//         // Retrieve the selected sample and its index
//         let dropdownMenu = d3.select("#selDataset");
//         let id = dropdownMenu.property("value");
//         let sample = data.samples.find(s => s.id === id);
//         let index = data.names.indexOf(id);

//         // Prepare data for visualizations
//         if (sample) {
//             sampleValues = sample.sample_values.slice(0, 10);
//             otuIds = sample.otu_ids.map(String).slice(0, 10).map(item => 'OTU ' + item);
//             otuLabels = sample.otu_labels.slice(0, 10);
//         }

//         // Create visualizations
//         createGauge(index);
//         createDemographics(index);
//         createBar(sampleValues, otuIds, otuLabels);
//         createBub();
//     }

//     // Function to display demographic info
//     function createDemographics(index) {
//         // Extract demographic info and format as HTML string
//         let demographics = Object.entries(data.metadata[index]);
//         let htmlString = "";
//         // Loop through array and concatenate key-value pairs
//         for (i = 0; i < demographics.length; i++) {
//             htmlString += "<p>" + demographics[i][0] + ": " + demographics[i][1];
//         }

//         document.getElementById("sample-metadata").innerHTML = htmlString;
//     }

//     // Function to create bar chart
//     function createBar(sampleValues, otuIds, otuLabels) {
//         // Format labels for hover text
//         let newLabels = otuLabels.map(item => {
//             let splitItem = item.split(";");
//             return splitItem.join("<br> ");
//         });
//         let barChart = [{
//             type: 'bar',
//             x: sampleValues,
//             y: otuIds,
//             hovermode: "closest",
//             hoverlabel: { bgcolor: "#FFF" },
//             text: newLabels,
//             hovertemplate: '<b>Bacteria Type(s):</b><br><i> %{text}</i><br><extra></extra>',
//             orientation: 'h'
//         }];

//         // Define bar chart data and layout
//         let barLayout = {
//             height: 425,
//             margin: { t: 0, l: 125, r: 0, b: 0 }
//         };

//         // Render bar chart
//         Plotly.newPlot('bar', barChart, barLayout);
//     }

//     // Function to create bubble chart
//     function createBub() {
//         // Define bubble chart data and layout
//         let bubChart = [{
//             x: data.samples[0].otu_ids,
//             y: data.samples[0].sample_values,
//             mode: 'markers',
//             marker: {
//                 size: data.samples[0].sample_values,
//                 color: data.samples[0].otu_ids,
//                 colorscale: 'Earth'
//             }
//         }];
//         let bubLayout = {
//             xaxis: { title: 'OTU ID' },
//             height: 600,
//             margin: { t: 20 },
//         };

//         // Render bubble chart
//         Plotly.newPlot('bubble', bubChart, bubLayout);
//     }

//     // Function to create gauge chart
//     function createGauge(index) {
//         // Define gauge chart data and layout
//         let gaugeChart = [{
//             value: data.metadata[index].wfreq,
//             title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs Per Week<br> " },
//             type: "indicator",
//             mode: "gauge+number"
//         }];
//         let gaugeLayout = {
//             width: 500,
//             margin: { t: 75, l: 50, r: 125, b: 0 }
//         };

//         // Render gauge chart
//         Plotly.newPlot('gauge', gaugeChart, gaugeLayout);
//     }

//     // Catch errors durring processing
// }).catch(function (error) {
//     console.log(error);
// });



// --------------