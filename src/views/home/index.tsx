import { Box, Button, Grid } from "@mui/material";
import CardGallery from "components/CardGallery";
import CardRow from "components/CardRow";
import { useState } from "react";

const data: NFTData[] = [
  {
    name: "PudgyPenguins",
    id: "1",
    estimatedPrice: "1.013",
    floorPrice: "1.880",
    acquisitionPrice: "0.000",
    acquisitionDate: "June 9, 2022",
  },
  {
    name: "PudgyPenguins",
    id: "2",
    estimatedPrice: "1.213",
    floorPrice: "1.220",
    acquisitionPrice: "0.000",
    acquisitionDate: "June 10, 2022",
  },
  {
    name: "PudgyPenguins",
    id: "3",
    estimatedPrice: "1.313",
    floorPrice: "1.330",
    acquisitionPrice: "0.000",
    acquisitionDate: "June 11, 2022",
  },
  {
    name: "PudgyPenguins",
    id: "4",
    estimatedPrice: "1.413",
    floorPrice: "1.440",
    acquisitionPrice: "0.000",
    acquisitionDate: "June 12, 2022",
  },
  {
    name: "PudgyPenguins",
    id: "5",
    estimatedPrice: "1.513",
    floorPrice: "1.550",
    acquisitionPrice: "0.000",
    acquisitionDate: "June 13, 2022",
  },
];

export const HomePage = () => {
  const [isRow, setIsRow] = useState(true);

  const toggleMode = () => {
    setIsRow(!isRow);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      width={"100vw"}
      minHeight={"100vh"}
    >
      <Box
        p={3}
        width={"100%"}
        height={"100%"}
        maxWidth="lg"
        borderRadius={4}
        bgcolor={"#E5E5E5"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button variant="contained" onClick={toggleMode}>
            Toggle
          </Button>
          <Box>Mode: {isRow ? "Row" : "Gallery"}</Box>
        </Box>

        <Box width={"100%"} mt={3}>
          {isRow ? (
            <>
              <Box display="flex" flexDirection="column">
                {data.map((data) => (
                  <CardRow data={data} key={`row-${data.id}`} />
                ))}
              </Box>
            </>
          ) : (
            <Grid container alignItems="stretch">
              {data.map((data) => (
                <Grid item xs={12} sm={6} md={4} key={`gallery-${data.id}`}>
                  <CardGallery data={data} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        <></>
      </Box>
    </Box>
  );
};
