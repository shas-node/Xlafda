"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import type { lafdacarddata } from '@/mock-data/mockdatalafda'
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils'
import { Card} from '@workspace/ui/components/card';
import { Badge } from '@workspace/ui/components/badge';

import { FireIcon,EyeIcon,ArrowFatDownIcon,ArrowFatUpIcon } from '@phosphor-icons/react';
interface Lafdacardprops {
  className : string;
  data: lafdacarddata;
}
export default function LafdaCard({ className, data }: LafdaCardProps) {
  const [voteCount, setVoteCount] = useState(data.votes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(
    data.userVote || null
  );


const [showAllTags, setShowAllTags] = useState(false);

const visibleTags = showAllTags
  ? data.tags
  : data.tags.slice(0, 2);
  const remainingTags = Math.max(0, data.tags.length - 2);

  const handleVote = (voteType: "up" | "down") => {
    if (userVote === voteType) {
      // If clicking the same vote, remove it
      setVoteCount((prev) => prev + (voteType === "up" ? -1 : 1));
      setUserVote(null);
    } else if (userVote === null) {
      // New vote
      setVoteCount((prev) => prev + (voteType === "up" ? 1 : -1));
      setUserVote(voteType);
    } else {
      // Switching from up to down or vice versa
      setVoteCount((prev) => prev + (voteType === "up" ? 2 : -2));
      setUserVote(voteType);
    }
  };

  const formatVoteCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const formatViewsCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className={cn("flex flex-col", className)}>
      {/* Card Content */}
      <Card className="flex min-h-[280px] flex-col rounded-2xl p-6">
        {/* header */}
        <div className="flex items-center justify-between">
          {data.trendingrank && (
            <div className="flex items-center gap-2">
              <FireIcon className="text-primary size-4" weight="bold" />
              <span className="text-primary text-xs font-semibold tracking-tight">
                #{data.trendingrank} Trending Now
              </span>
            </div>
          )}

          {/* views */}
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <EyeIcon className="size-4" weight="bold" />
            <span className="text-medium tracking-tight">
              {formatViewsCount(data.views)} views
            </span>
          </div>
        </div>

        {/* title */}
        {/* // TODO: make it a slug not an id */}
        <Link href={`/lafda/${data.id}`}>
          <h3 className="line-clamp-2 min-h-12 text-xl leading-tight font-semibold tracking-tight">
            {data.title}
          </h3>
        </Link>

        {/* description */}
        <p className="text-muted-foreground line-clamp-3 flex-1 text-sm leading-relaxed">
          {data.description}
        </p>

        {/* footer */}
        <div className="border-border/60 bg-muted/30 -m-6 mt-auto rounded-b-2xl border-t px-6 pt-4 pb-4">
          <div className="flex items-center justify-between">
           <div className="flex flex-wrap items-center gap-2">
              {visibleTags.map((tag, index) => (
                <Badge key={`${tag}-${index}`} variant="secondary">
                    {tag}
                </Badge>
              ))}
               {!showAllTags && remainingTags > 0 && (
    <Badge
      variant="secondary"
      className="cursor-pointer hover:bg-muted"
      onClick={() => setShowAllTags(true)}
    >
      +{remainingTags} more
    </Badge>
  )}
</div>
            {/* Votes */}
            <div className="border-border bg-card flex items-center gap-0.5 overflow-hidden rounded-md border">
              <Button
                onClick={() => handleVote("up")}
                variant={"ghost"}
                size="icon"
                className={cn("h-auto p-1.5 hover:bg-transparent")}
              >
                <ArrowFatUpIcon
                  className={cn(
                    "size-4 transition-colors duration-200",
                    userVote === "up"
                      ? "text-green-500"
                      : "text-muted-foreground"
                  )}
                  weight={userVote === "up" ? "fill" : "bold"}
                />
              </Button>

              {/* Vote count */}
              <div className="min-w-8 px-2 py-1 text-center">
                <span
                  className={cn(
                    "text-xs font-semibold tracking-tight",
                    voteCount > 0 && "text-primary",
                    voteCount < 0 && "text-destructive",
                    voteCount === 0 && "text-muted-foreground"
                  )}
                >
                  {formatVoteCount(voteCount)}
                </span>
              </div>

              <Button
                onClick={() => handleVote("down")}
                variant={"ghost"}
                size="icon"
                className={cn("h-auto p-1.5 hover:bg-transparent")}
              >
                <ArrowFatDownIcon
                  className={cn(
                    "size-4 transition-colors duration-200",
                    userVote === "down"
                      ? "text-red-500"
                      : "text-muted-foreground"
                  )}
                  weight={userVote === "down" ? "fill" : "bold"}
                />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
