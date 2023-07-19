
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
    <Card sx={{ maxWidth: 750, marginTop: "-20px"}}>

      <CardHeader />
      <CardMedia
        component="img"
        height="270"
        image={require("../assets/1.jpg")}
        alt="pic"
      />
      <CardContent >
        <Typography sx={{ margin: "20px" }} >
           <div className="typo" >
               Welcome to my portfolio! I'm a specializing in creating beautiful and user-
               friendly websites.
               I transform design concepts into responsive, interactive experiences.Explore my projects showcasing captivating visuals,and intuitive user interactions.
               Thank you for visiting, and I look forward to connecting with you.
             </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TourCard;
