"use client";
import React, { useState } from 'react'
import type { lafdacarddata } from '@/mock-data/mockdatalafda'
import { cn } from '@workspace/ui/lib/utils'
import { Card } from '@workspace/ui/components/card';
interface Lafdacardprops {
  className : string;
  data: lafdacarddata;
}
export default function Lafdacard({data, className}:{
  Lafdacardprops
}) {

  const {votecount,setvotecount} = useState(data.votes);
  const {userVote,setuserVote} = useState <"up" | "down" | "null">(data.userVote || null);
  const visibletags = data.tags.slice(0,2);
  const remainingtags = Math.max(0, data.tags.length - 2);
  return( 
    <div className='{cn("flex flex-col gap-4")}'>
     {/* card content */}
      <Card className = "rounded-2xl flex flex-col min-h-[280px] ">
        {/* card header */}
      </Card>
      </div>
  )
}
