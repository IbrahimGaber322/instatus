

interface Event {
    id: string;
    object: string;
    actor_id: string;
    actor_name: string;
    group: string;
    action_id: string;
    action_object: string;
    action_name: string;
    target_id: string;
    target_name: string;
    location: string;
    occurred_at: string; // You can use a Date object if you prefer
    metadata: Record<string, any>;
  }
  
  const mockEventData: Event[] = [
    {
      id: "1",
      object: "Event",
      actor_id: "user1",
      actor_name: "John Doe",
      group: "Group A",
      action_id: "action1",
      action_object: "Object A",
      action_name: "Create",
      target_id: "target1",
      target_name: "Target A",
      location: "Location A",
      occurred_at: "2023-09-14T08:00:00Z", // Replace with an actual date and time
      metadata: { key1: "value1", key2: "value2" },
    },
    {
      id: "2",
      object: "Event",
      actor_id: "user2",
      actor_name: "Jane Smith",
      group: "Group B",
      action_id: "action2",
      action_object: "Object B",
      action_name: "Update",
      target_id: "target2",
      target_name: "Target B",
      location: "Location B",
      occurred_at: "2023-09-14T09:30:00Z", // Replace with an actual date and time
      metadata: { key3: "value3", key4: "value4" },
    },
    {
      id: "3",
      object: "Event",
      actor_id: "user3",
      actor_name: "Alice Johnson",
      group: "Group C",
      action_id: "action3",
      action_object: "Object C",
      action_name: "Delete",
      target_id: "target3",
      target_name: "Target C",
      location: "Location C",
      occurred_at: "2023-09-14T10:45:00Z", // Replace with an actual date and time
      metadata: { key5: "value5", key6: "value6" },
    },
    // Add more mock events
    {
      id: "4",
      object: "Event",
      actor_id: "user4",
      actor_name: "Bob Johnson",
      group: "Group A",
      action_id: "action4",
      action_object: "Object D",
      action_name: "Create",
      target_id: "target4",
      target_name: "Target D",
      location: "Location D",
      occurred_at: "2023-09-14T11:15:00Z", // Replace with an actual date and time
      metadata: { key7: "value7", key8: "value8" },
    },
    {
      id: "5",
      object: "Event",
      actor_id: "user5",
      actor_name: "Eva Smith",
      group: "Group B",
      action_id: "action5",
      action_object: "Object E",
      action_name: "Update",
      target_id: "target5",
      target_name: "Target E",
      location: "Location E",
      occurred_at: "2023-09-14T12:30:00Z", // Replace with an actual date and time
      metadata: { key9: "value9", key10: "value10" },
    },
    // Add more mock events as needed
  ];
  

  export {mockEventData};
  export type EventType = Event;