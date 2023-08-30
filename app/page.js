import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page() {

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
      <Link href="events/us">
        <Card>
          <CardHeader className="relative px-0 pt-0 pb-0">
            <img
              className="rounded-lg w-auto h-[500px] ease-in-out duration-500 hover:scale-105"
              src="/usa.jpg"
              alt="events in USA"
            />
            <h2 className="absolute bottom-4 left-2 tracking-widest text-gray-300 text-3xl">
              United States
            </h2>
          </CardHeader>
        </Card>
      </Link>
      <Link href="events/uk">
        <Card>
          <CardHeader className="px-0 pt-0 pb-0 relative">
            <img
              className="rounded-lg w-auto h-[500px] ease-in-out duration-500 hover:scale-105"
              src="/uk.jpg"
              alt="events in UK"
            />
            <h2 className="absolute bottom-4 left-2 tracking-widest text-gray-300 text-3xl">
              United Kingdom
            </h2>
          </CardHeader>
        </Card>
      </Link>
      <Link href="events/de">
        <Card>
          <CardHeader className="px-0 pt-0 pb-0 relative">
            <img
              className="rounded-lg w-auto h-[500px] ease-in-out duration-500 hover:scale-105"
              src="/germany.jpg"
              alt="events in USA"
            />
            <h2 className="absolute bottom-4 left-2 tracking-widest text-gray-300 text-3xl">
              Germany
            </h2>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
