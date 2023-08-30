import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Loading = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
    {Array.from({length: 12}, (_, i) => i + 1).map(id => (          
        <Card key={id}>
            <CardHeader className="pt-0">
                <Skeleton className="h-6 w-1/2 bg-gray-200 mt-2"></Skeleton>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-1">
                <div className="flex flex-col">
                    <Skeleton className="bg-gray-300 h-6 w-1/2 mb-2"></Skeleton>
                    <Skeleton className="bg-gray-300 h-6 w-1/2 mb-2"></Skeleton>
                    <Skeleton className="bg-gray-300 h-6 w-1/2 mb-2"></Skeleton>
                </div>
                <CardTitle className="col-span-2"><Skeleton className="bg-gray-300 h-6 w-1/2"></Skeleton></CardTitle>
            </CardContent>
        </Card>
        ))}
    </div>
  )
}

export default Loading