import Image from "next/image";
import moment from "moment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default async function Page({params}) {

  await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${params.slug}&sort=date,asc&apikey=${process.env.API_KEY}`
  );
  const data = await res.json();

  const events_list = data._embedded.events.map((event) => (
    <a key={event.id} href={event.url} target="_blank">
      <Card>
        <CardHeader className="px-0 pt-0">
          {event.images?.map((item, index) => {
            if (item.width === 1024 && item.height === 576) {
              return (
                <Image
                  className="rounded-lg"
                  key={index}
                  src={item.url}
                  height={250}
                  width={500}
                  alt={item.name}
                />
              );
            }
          })}
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-1">
          <div className="flex flex-col">
            <div>{moment(event.dates.start.dateTime).format("MMM")}</div>
            <div className="text-[1.5rem] font-bold">
              {moment(event.dates.start.dateTime).format("D")}
            </div>
            <div>{moment(event.dates.start.dateTime).format("h:mmA")}</div>
          </div>
          <CardTitle className="col-span-2">{event.name}</CardTitle>
        </CardContent>
      </Card>
    </a>
  ));

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
      {events_list}
    </div>
  );
}
