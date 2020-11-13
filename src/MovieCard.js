import React from "react";
import CardResult from "./CardResult";

export default function MovieCard({ movie }) {

   return (
         <CardResult movie={movie} key={movie.id} />
   )
   
}