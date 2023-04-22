<h1 align="left"> INTERACTIVE WEB DASHBOARD<br><i>Topic: Belly Button Biodiversity</i> </h1> 

The purpose of this project is to create an interactive dashboard that allows users to explore and visualize the Belly Button Biodiversity dataset, which catalogs the microbial species (operational taxonomic units or OTUs) found in human navels. The main goals of the project are to highlight the differences in OTUs among individuals and their prevalence, and to make the dataset more accessible for further analysis and potential civic impact.

The dashboard is live at: https://belly-button-challenge.github.io/live/

<a href="https://belly-button-challenge.github.io/live/">
  <img align="center" src="https://user-images.githubusercontent.com/8321756/233792762-95e5c9b7-ef78-40b7-bbd8-9910187fb343.png" alt="Interactive web dashboard">
</a>

## Tools
* D3.js
* Plotly.js
* HTML / Bootstrap / CSS

## Methods
* Data Visualization
* Data Processing
* Web Development

## Features
- **Horizontal Bar Chart**: Displays the top 10 OTUs found in the selected individual, with `sample_values` as the chart values, `otu_ids` as the labels, and `otu_labels` as the hovertext.
- **Bubble Chart**: Visualizes each sample with `otu_ids` as the x-values, `sample_values` as the y-values and marker size, `otu_ids` as the marker colors, and `otu_labels` as the text values.
- **Sample Metadata**: Shows the demographic information of the selected individual, displaying each key-value pair from the metadata JSON object on the page.

## Further Development
The data is limited to the samples provided in the `samples.json` file. Further exploration would require additional data to be added to the dataset.
