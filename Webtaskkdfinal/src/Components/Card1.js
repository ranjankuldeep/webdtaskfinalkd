import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  } from "@material-tailwind/react";
  import { Typography } from "@material-tailwind/react";

   
  export default function Card1(props) {
    return (
      <Card className="w-96 mt-6">
        <CardHeader color="blue" className="relative h-56">
          <img
            src={props.url}
            alt="img-blur-shadow"
            className="w-full h-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {props.name}
          </Typography>
          <Typography>
        {props.description}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">${props.price}</Typography>
          <Typography variant="small" color="grey" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Barcelona, Spain
          </Typography>
        </CardFooter>
      </Card>
    );
  }