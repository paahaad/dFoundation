import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react"

function Useravatar() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={""} />
      <AvatarFallback>
        <UserRound />
      </AvatarFallback>
    </Avatar>
  );
}

export default Useravatar;