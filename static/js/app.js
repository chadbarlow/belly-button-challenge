const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init() {
    let sampleDataDict = { "id": "940", "otu_ids": [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977, 3450, 874, 1959, 2191, 1950, 2077, 2275, 944, 2184, 2244, 2024, 2419, 2811, 165, 2782, 2247, 2011, 2396, 830, 2964, 1795, 2722, 307, 2178, 2908, 1193, 2167, 1208, 2039, 1274, 2739, 2737, 1314, 1962, 2186, 2335, 2936, 907, 833, 2483, 2475, 2491, 2291, 159, 2571, 2350, 2342, 2546, 725, 170, 1505, 513, 259, 1169, 258, 1232, 1497, 1498, 1503, 412, 2235, 1960, 1968, 121, 2065, 340, 2110, 2188, 357, 342], "sample_values": [163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], "otu_labels": ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes", "Bacteria", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria"] };
    let topSampleValues = [217, 195, 159, 153, 123, 116, 116, 114, 109, 10];
    let topOtuIds = [1167, 2859, 2011, 41, 296, 909, 2782, 2722, 2964, 1314];
    let topOtuLabels = ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella"];
    let wfreq = 1.0;
    let demoDict = { "id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0, "location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0 };
    updateDemographics(demoDict);
    createBarChart({ topSampleValues, topOtuIds, topOtuLabels });
    createBubbleChart(sampleDataDict);
    createGaugeChart(wfreq);
}

const getSelectionData = (allData, selectionName) => {
    const sampleDataDict = allData.samples.find(s => s.id === selectionName);
    const topSampleValues = sampleDataDict.sample_values.slice(0, 10);
    const topOtuIds = sampleDataDict.otu_ids.slice(0, 10).map(selectionName => `OTU ${selectionName}`);
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
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" }
    }];
    const layout = {
        height: 425,
        margin: { t: 0, l: 125, r: 0, b: 0 }
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
        xaxis: { title: 'OTU ID' },
        margin: { t: 40, l: 0, r: 0, b: 0 }
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
    d3.selectAll("#selDataset").on("change", () => {
        const selectionName = d3.event.target.value;
        updateCharts(allData, selectionName);
    });
}).catch(error => handleError(error));

init()









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