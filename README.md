# TL;DR
Build dynamic data visualizations with D3.js and Plotly.js. Online at: [belly-button-biodiversity.github.com/live](www.belly-button-biodiversity.github.com/live)

## Detailed Summary
In this project, we developed a data visualization dashboard to analyze the Belly Button Biodiversity dataset, which contains information on the microbial species found in human navels. Utilizing the D3.js library, we ingested JSON data from a given URL and implemented a dropdown menu for user interaction. By leveraging Plotly.js, we constructed various visualizations, including a horizontal bar chart displaying the top 10 OTUs per sample, a bubble chart representing the entire dataset, and a gauge chart.

Our analysis indicated that a limited number of microbial species, referred to as operational taxonomic units (OTUs), were present in more than 70% of the population, with other species being relatively rare. We further augmented the dashboard by presenting individual demographic metadata, extracted as key-value pairs from the metadata JSON object, in a dedicated "Demographic Info" panel. The user interface was designed to trigger real-time updates of all visualizations upon selecting a new sample, ensuring responsiveness and interactivity.

The final application, demonstrating a synthesis of advanced data visualization techniques and effective data processing, was deployed to GitHub Pages at belly-button-biodiversity.github.com/live, making it available to a broad audience.
