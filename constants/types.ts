interface Event {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action: {
    id: string;
    object: string;
    name: string;
  };
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string;
  metadata: { redirect: string; description: string; x_request_id: string };
}

interface FetchedEvent {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action: {
    id: string;
    object: string;
    name: string;
  }[];
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string; // You can use a Date object if you prefer
  metadata: { redirect: string; description: string; x_request_id: string }[];
}

interface Details {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action: {
    id: string;
    object: string;
    name: string;
  };
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string; // You can use a Date object if you prefer
  metadata: { redirect: string; description: string; x_request_id: string };
  filterMenuItems: { name: string; checked: boolean }[];
}

export type EventType = Event;
export type FetchedEventType = FetchedEvent;
export type DetailsProps = Details;
