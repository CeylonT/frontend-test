import { Box, Tooltip, Typography, Grid } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { ReactNode } from "react";

type ColProps = {
  detail: string;
  detailIcon?: ReactNode;
  tooltip?: string;
  disabled: boolean;
};

const Col = ({ detail, detailIcon, tooltip, disabled }: ColProps) => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      {!!detailIcon && detailIcon}
      <Typography textAlign={"right"} color={disabled ? "gray" : "black"}>
        {detail}
      </Typography>
      {!!tooltip && (
        <Tooltip title={tooltip}>
          <HelpOutlineIcon htmlColor="#C3DBFC" fontSize="small" />
        </Tooltip>
      )}
    </Box>
  );
};

const CardRow = ({ data }: { data: NFTData }) => {
  return (
    <Grid
      py={1}
      pr={3}
      my={1}
      container
      alignItems={"center"}
      bgcolor={"white"}
      borderRadius={2}
    >
      <Grid item xs={1}>
        <Box display={"flex"} justifyContent={"center"}>
          <img
            width={"24px"}
            src={"/ethereum.png"}
            alt="eth"
            style={{
              padding: "2px",
              borderRadius: "4px",
              border: "1px solid",
            }}
          />
        </Box>
      </Grid>

      <Grid item xs={3}>
        <Box display={"flex"} alignItems={"center"}>
          <img
            width={"48px"}
            src={"https://picsum.photos/200"}
            alt="nft image"
            style={{ borderRadius: "12px" }}
          />
          <Typography pl={1} fontWeight={"bold"}>
            {`${data.name} #${data.id}`}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={2}>
        <Col
          detail={data.estimatedPrice}
          detailIcon={<DehazeIcon fontSize="small" />}
          tooltip="Estimated Price"
          disabled={false}
        />
      </Grid>

      <Grid item xs={2}>
        <Col
          detail={data.floorPrice}
          detailIcon={<DehazeIcon fontSize="small" />}
          tooltip="Floor Price"
          disabled={false}
        />
      </Grid>

      <Grid item xs={2}>
        <Col
          detail={data.acquisitionPrice}
          detailIcon={<DehazeIcon htmlColor="gray" fontSize="small" />}
          disabled={true}
        />
      </Grid>

      <Grid item xs={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Col detail={data.acquisitionDate} disabled={false} />
          <img
            width={"24px"}
            src={"/ethereum.png"}
            alt="eth"
            style={{
              padding: "2px",
              borderRadius: "4px",
              border: "1px solid",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardRow;
