import { Box, Tooltip, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { ReactNode } from "react";

type RowProps = {
  topic: string;
  detail: string;
  detailIcon?: ReactNode;
  tooltip?: string;
  disabled: boolean;
};

const Row = ({ topic, detail, detailIcon, tooltip, disabled }: RowProps) => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Typography color={"gray"} pr={"2px"}>
          {topic}
        </Typography>

        {!!tooltip && (
          <Tooltip title={tooltip}>
            <HelpOutlineIcon htmlColor="#C3DBFC" fontSize="small" />
          </Tooltip>
        )}
      </Box>

      <Box display={"flex"} alignItems={"center"}>
        {!!detailIcon && detailIcon}
        <Typography textAlign={"right"} color={disabled ? "gray" : "black"}>
          {detail}
        </Typography>
      </Box>
    </Box>
  );
};

const CardGallery = ({ data }: { data: NFTData }) => {
  return (
    <Box
      p={3}
      m={1}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bgcolor={"white"}
      borderRadius={2}
    >
      <Box width={"70%"}>
        <img
          width={"100%"}
          src={"https://picsum.photos/200"}
          alt="nft image"
          style={{ borderRadius: "12px" }}
        />
      </Box>

      <Typography pt={1} pb={3} fontWeight={"bold"}>
        {`${data.name} #${data.id}`}
      </Typography>

      <Row
        topic="Estimated Price"
        detail={data.estimatedPrice}
        detailIcon={<DehazeIcon fontSize="small" />}
        tooltip="Estimated Price"
        disabled={false}
      />
      <Row
        topic="Floor Price"
        detail={data.floorPrice}
        detailIcon={<DehazeIcon fontSize="small" />}
        tooltip="Floor Price"
        disabled={false}
      />
      <Row
        topic="Acquisition Price"
        detail={data.acquisitionPrice}
        detailIcon={<DehazeIcon htmlColor="gray" fontSize="small" />}
        tooltip="Acquisition Price"
        disabled={true}
      />
      <Row
        topic="Acquisition Date"
        detail={data.acquisitionDate}
        disabled={false}
      />
    </Box>
  );
};

export default CardGallery;
