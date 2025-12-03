"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex  gap-[8rem] ", className)}
      {...props} />
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "w-full flex gap-1 ",
        className
      )}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center hover:cursor-pointer w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-balance ring-offset-white transition-all disabled:not-pointer-none disabled:opacity-50 data-[state=active]:bg-green-400 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm  data-[state=active]: font-bold"
       ,

        className
      )}
      {...props} />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("min-h-[480px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
           className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
