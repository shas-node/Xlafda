"use client";
import React, { useState } from 'react'
import type { lafdacarddata } from '@/mock-data/mockdatalafda'
import { cn } from '@workspace/ui/lib/utils'
import { Card } from '@workspace/ui/components/card';
import { FireIcon,EyeIcon } from '@phosphor-icons/react';
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
        <div className='flex items-center justify-between mb-3'>
          {data.trendingrank &&(
            <div className='flex items-center gap-2'>
              <FireIcon className='size-4 text-primary' weight="bold"></FireIcon>
              <span className='text-xs font-semibold text-primary tracking-tight'>#{data.trendingrank}Trending Now</span>
            </div>
          )}
          {/* Views */}
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <EyeIcon className='size-4' weight="bold"></EyeIcon>
            <span className='text-medium tracking-tighter'>{data.views} views</span>
          </div>
        </div>
      </Card>
      </div>
  )
}
