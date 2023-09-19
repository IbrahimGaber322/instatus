import { EventType } from "@/constants/types";
import { createEvent, getAllEvents } from "@/prisma/event";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const events = await getAllEvents();

    const data = JSON.stringify(events);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  try {
    const {
      id,
      group,
      object,
      action,
      location,
      occurred_at,
      metadata,
      actor_id,
      actor_name,
      target_id,
      target_name,
    }: EventType = data;

    const newEvent = await createEvent({
      id,
      group,
      object,
      action,
      location,
      occurred_at,
      metadata,
      actor_id,
      actor_name,
      target_id,
      target_name,
    });

    return NextResponse.json(newEvent);
  } catch (error) {
    console.log(error);
  }
}
