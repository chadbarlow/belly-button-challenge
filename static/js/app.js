const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const getSelectionData = (allData, selectionName) => {
    const sampleDataDict = allData.samples.find(s => s.id === selectionName);
    const topSampleValues = sampleDataDict.sample_values.slice(0, 10);
    const topOtuIds = sampleDataDict.otu_ids.slice(0, 10).map(selectionName => `OTU ${selectionName} `);
    const topOtuLabels = sampleDataDict.otu_labels.slice(0, 10).map(label => label.split(";").join("<br> "));
    const nameIndex = allData.names.indexOf(selectionName);
    const wfreq = allData.metadata[nameIndex].wfreq;
    const demoDict = allData.metadata[nameIndex];
    return {
        sampleDataDict,
        topSampleValues,
        topOtuIds,
        topOtuLabels,
        wfreq,
        demoDict
    };
};

const updateDemographics = (demoDict) => {
    const demoList = Object.entries(demoDict);
    const htmlString = demoList.map(([key, value]) => `<p>${key}: ${value}</p>`).join("");
    document.getElementById("sample-metadata").innerHTML = htmlString;
};

const createBarChart = ({ topSampleValues, topOtuIds, topOtuLabels }) => {
    const data = [{
        type: 'bar',
        x: topSampleValues,
        y: topOtuIds,
        orientation: 'h',
        text: topOtuLabels,
        hovertemplate: '<b>Bacteria Type(s):</b><br><i>%{text}</i><extra></extra>',
        hoverlabel: { bgcolor: "#FFF" },
        marker: {
            color: '#4AAAA5'
        }
    }];
    const layout = {
        title: '<b>Bacteria Cultures Found</b><br>Top 10 Cultures',
        titlefont: {
            size: 20,
            color: '#333333',
            family: 'Oswald, sans-serif'
        },
        xaxis: {
            title: '',
            titlefont: {
                size: 12,
                color: '#333333'
            },
            tickfont: {
                size: 12,
                color: '#333333'
            },
            zerolinecolor: '#4AAAA5',
        },
        yaxis: {
            title: '',
            titlefont: {
                size: 12,
                color: '#333333'
            },
            tickfont: {
                size: 12,
                color: '#333333'
            },
        },
    };
    Plotly.newPlot('bar', data, layout);
};

const createBubbleChart = (sampleDataDict) => {
    const data = [{
        x: sampleDataDict.otu_ids,
        y: sampleDataDict.sample_values,
        mode: 'markers',
        marker: {
            size: sampleDataDict.sample_values,
            color: sampleDataDict.otu_ids,
            colorscale: 'Earth'
        },
        text: sampleDataDict.otu_labels.map(label => label.split(";").join("<br> ")),
        hovertemplate: '<b>Bacteria Type(s):</b><br><i>%{text}</i><extra></extra>',
        hovermode: "closest"
    }];
    const layout = {
        title: '<b>Visualizing Relative Culture Sizes</b><br>All Cultures',
        titlefont: {
            size: 20,
            color: '#333',
            family: 'Oswald, sans-serif'
        },
        xaxis: {
            title: '',
            titlefont: {
                size: 12,
                color: '#333333'
            },
            tickfont: {
                size: 12,
                color: '#333333'
            },
            zerolinecolor: '#FFF',
            zerolinewidth: 0,
        },
        yaxis: {
            title: '',
            titlefont: {
                size: 12,
                color: '#333333'
            },
            tickfont: {
                size: 12,
                color: '#FFF',

            },
            zerolinecolor: '#FFF',
            zerolinewidth: 0,
        },
    };
    Plotly.newPlot('bubble', data, layout);
};

const createGaugeChart = (wfreq) => {
    const data = [{
        value: wfreq,
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs Per Week<br> " },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [null, 9], tickcolor: "#4AAAA5" },
            bar: { color: "#4AAAA5" },
            borderwidth: 1,
            bordercolor: "#4AAAA5"
        }
    }];
    const layout = {
        font: {
            size: 20,
            color: '#333333',
            family: 'Oswald, sans-serif'
        },
    };

    Plotly.newPlot('gauge', data, layout);
};

const createDropdown = (allData) => {
    const selectList = document.getElementById("selDataset");
    allData.names.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.text = name;
        selectList.appendChild(option);
    });
};

const updateCharts = (allData, selectionName) => {
    const { sampleDataDict, topSampleValues, topOtuIds, topOtuLabels, wfreq, demoDict } = getSelectionData(allData, selectionName);
    updateDemographics(demoDict);
    createBarChart({ topSampleValues, topOtuIds, topOtuLabels });
    createBubbleChart(sampleDataDict);
    createGaugeChart(wfreq);
};

d3.json(url).then(allData => {
    createDropdown(allData);
    updateCharts(allData, "940"); //initialize charts with first selection
    d3.selectAll("#selDataset").on("change", () => {
        const selectionName = d3.event.target.value;
        updateCharts(allData, selectionName);
    });
}).catch(error => handleError(error));







// ----------------- OLD CODE ----------------- //

// function simulateError() {
//     throw new Error('<b>Oops! Something went wrong. </b>Please refresh the page and try again.');
// }

// function handleError(error) {
//     const errorMessage = document.createElement('div');
//     errorMessage.innerHTML = error.message;
//     errorMessage.setAttribute('id', 'error-banner');
//     document.body.appendChild(errorMessage);
//     errorMessage.style.display = 'block';

//     const errorSpacer = document.createElement('div');
//     errorSpacer.setAttribute('id', 'error-banner-spacer');
//     errorSpacer.style.height = getComputedStyle(errorMessage).height;
//     document.body.appendChild(errorSpacer);
// }

// function simulateError() {
//     throw new Error('Oops! Something went wrong.');
// }

// try {
//     simulateError();
// } catch (error) {
//     handleError(error);
// }

// // Define the URL of the dataset and retrieve the JSON data
// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// const dataPromise = d3.json(url);

// // Main function to process the dataset and create visualizations
// d3.json(url).then(function (data) {

//     // Populate the dropdown menu with sampleDataDict IDs
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
//         // Retrieve the selected sampleDataDict and its index
//         let dropdownMenu = d3.select("#selDataset");
//         let id = dropdownMenu.property("value");
//         let sampleDataDict = data.samples.find(s => s.id === id);
//         let index = data.names.indexOf(id);

//         // Prepare data for visualizations
//         if (sampleDataDict) {
//             sampleValues = sampleDataDict.sample_values.slice(0, 10);
//             topOtuIds = sampleDataDict.otu_ids.map(String).slice(0, 10).map(item => 'OTU ' + item);
//             topOtuLabels = sampleDataDict.otu_labels.slice(0, 10);
//         }

//         // Create visualizations
//         createGauge(index);
//         createDemographics(index);
//         createBar(sampleValues, topOtuIds, topOtuLabels);
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

//         document.getElementById("sampleDataDict-metadata").innerHTML = htmlString;
//     }

//     // Function to create bar chart
//     function createBar(sampleValues, topOtuIds, topOtuLabels) {
//         // Format labels for hover text
//         let newLabels = topOtuLabels.map(item => {
//             let splitItem = item.split(";");
//             return splitItem.join("<br> ");
//         });
//         let barChart = [{
//             type: 'bar',
//             x: sampleValues,
//             y: topOtuIds,
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