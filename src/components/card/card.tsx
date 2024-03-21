import { CardActionArea } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const JobCard = ({ cardInfo }) => {
  const router = useRouter();
  const pathname = usePathname();
  const nextPath =
    "http://localhost:3000/" + pathname + `/${cardInfo.id}/detail`;
  return (
    <CardActionArea
      sx={{ maxWidth: "645px", borderRadius: "20px" }}
      onClick={() => router.push(nextPath)}
    >
      <Card
        sx={{
          maxWidth: 645,
          display: "flex",
          paddingLeft: "20px",
          borderRadius: "20px",
        }}
      >
        <div className="w-[100px] flex justify-center items-start pt-4">
          <Image alt="logo" width="50" height="50" src={cardInfo.imgUrl} />
        </div>
        <div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "600", fontSize: "15px" }}
            >
              {cardInfo.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "gray", fontWeight: "200", fontSize: "12px" }}
            >
              {`${cardInfo.name} · ${cardInfo.location.city}, ${cardInfo.location.country}`}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ fontWeight: "500", fontSize: "14px" }}
            >
              {cardInfo.description}
            </Typography>
          </CardContent>
          <div className="flex justify-between w-fit items-center">
            <CardActions>
              <Button
                size="small"
                style={{
                  backgroundColor: "#EEFAF7",
                  textTransform: "none",
                  borderRadius: "20px",
                  color: "#56CDAD",
                  fontWeight: "600",
                }}
              >
                {cardInfo.work_location}
              </Button>
            </CardActions>
            <div className="w-[2px] bg-gray-300 h-[30px]"></div>
            <CardActions>
              {cardInfo.categories.map((obj) => (
                <Button
                  key={obj.name}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: "20px",
                    borderColor: obj.color,
                    color: obj.color,
                    textTransform: "none",
                  }}
                >
                  {obj.name}
                </Button>
              ))}
            </CardActions>
          </div>
        </div>
      </Card>
    </CardActionArea>
  );
};

export default JobCard;
