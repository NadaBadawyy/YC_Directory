import { Skeleton } from "@/components/ui/skeleton"

export function StartupCardSkeleton() {
  return (
    <div className="p-5 border-s-4 border-t-4 border-b-8 border-e-8 border-gray-300 rounded-4xl">
      {/* top bar */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-24 bg-gray-200" /> {/* date */}
        <Skeleton className="h-4 w-12 bg-gray-200" /> {/* views */}
      </div>

      {/* title + author */}
      <div className="flex mt-5 justify-between items-center">
        <div>
          <Skeleton className="h-4 w-28 mb-2 bg-gray-200" /> {/* author */}
          <Skeleton className="h-6 w-48 bg-gray-200" /> {/* title */}
        </div>
        <Skeleton className="h-12 w-12 rounded-full bg-gray-200" /> {/* author image */}
      </div>

      {/* description + image */}
      <div className="my-2">
        <Skeleton className="h-4 w-full mb-2 bg-gray-200" />
        <Skeleton className="h-4 w-5/6 mb-2 bg-gray-200" />
        <Skeleton className="h-[164px] w-full rounded-[10px] bg-gray-200" /> {/* image */}
      </div>

      {/* category + button */}
      <div className="flex justify-between items-center mt-5">
        <Skeleton className="h-5 w-20 bg-gray-200" /> {/* category */}
        <Skeleton className="h-8 w-24 rounded-3xl bg-gray-200" /> {/* button */}
      </div>
    </div>
  )
}
