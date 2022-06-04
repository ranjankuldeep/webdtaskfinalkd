import { Typography } from "@material-tailwind/react";
import React from "react";

export default function Header(props)
{
    return (
<div className=" flex flex-row-reverse px-4 text-4xl">
<a href="https://localhost:3000"><Typography variant="h3">About Me</Typography></a>
</div>

    )
}