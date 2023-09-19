import { PrismaClient } from "@prisma/client";
import { EventType } from "@/constants/types"; // Adjust the path

const prisma = new PrismaClient();

export const createEvent = async (eventData: EventType) => {
  const {
    id,
    object,
    location,
    occurred_at,
    metadata,
    action,
    actor_id,
    actor_name,
    target_id,
    target_name,
    group,
  } = eventData;

  const createdEvent = await prisma.event.create({
    data: {
      id,
      group,
      object,
      location,
      occurred_at,
      actor_id,
      actor_name,
      target_id,
      target_name,
      metadata: {
        create: {
          x_request_id: metadata.x_request_id,
          redirect: metadata.redirect,
          description: metadata.description,
        },
      },
      action: {
        create: { id: action.id, name: action.name, object: action.object },
      },
    },
    include: {
      action: true,
      metadata: true,
    },
  });

  return createdEvent;
};

export const getAllEvents = async () => {
  const events = await prisma.event.findMany({
    include: { action: true, metadata: true },
  });

  return events;
};
