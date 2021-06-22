const config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1IjoibGl2aW5nc3RvbmVzdGF5cyIsImEiOiJja3EyOGZoNTEwbTJ0MndwODVvdmlsMzNpIn0.1RIytc5O3-uTZHCjysTAuw",
  csv: "./data.csv",
  center: [80.115,30.462],
  zoom: 6.5,
  title: "LivingStone Stays",
  description:
    "Please find a perfect LivingStone stay for your next holiday.You can use filters to narrow down the properties based on your preferences.",
  sideBarInfo: ["Property Name", "Region", "Activities"],
  popupInfo: ["Property Name"],
  filters: [
    {
      type: "dropdown",
      title: "Region ",
      columnHeader: "Region",
      listItems: [
        "Tirthan",
        "Alibaug",
        "Bhimtal",
        "Chail",
        "Tirthan",
        "Shimla",
        "Chail",
        "Bir",
      ],
    },
    {
      type: "dropdown",
      title: "Activities: ",
      columnHeader: "Activities",
      listItems: [
        "Bonfire",
        "Trek",
        "Pets",
      ],
    },
  ],
};
