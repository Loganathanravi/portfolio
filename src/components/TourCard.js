
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const TourCard = () => {
  return (
    <Card sx={{ maxWidth: 750,marginLeft:"120px" }}>
      <CardHeader />
      <CardMedia
        component="img"
        height="300"
        image={require("../assets/1.jpg")}
        alt="pic"
      />
      <CardContent>
        <Typography>
          Hi this skfjhewiuhcgirg gehcgiulmcehiugth4eg
          esgrhyngefygw4gciwgcrtghcbrhcbg yegryunegtxhgrhmgx
          esjxhfjesgnfylxgnehbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheeeeeeeeeeeeeeeeeeeeeee
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeee
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TourCard;
