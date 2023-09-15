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
  occurred_at: string; // You can use a Date object if you prefer
  metadata: Record<string, any>;
}

const mockEventData: Event[] = [
  {
    id: "evt_15B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
      id: "evt_action_PGTD81NCAOQ2",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      redirect: "/setup",
      description: "User login succeeded.",
      x_request_id: "req_W1Y13QOHMI5H",
    },
  },
  {
    id: "evt_2ndItemID",
    object: "event",
    actor_id: "user_2ndActorID",
    actor_name: "John Doe",
    group: "example.com",
    action: {
      id: "evt_action_2ndActionID",
      object: "event_action",
      name: "user.logout_succeeded",
    },
    target_id: "user_2ndTargetID",
    target_name: "john@example.com",
    location: "192.168.1.1",
    occurred_at: "2022-02-10T08:15:00.000Z",
    metadata: {
      redirect: "/home",
      description: "User logout succeeded.",
      x_request_id: "req_2ndRequestID",
    },
  },
  {
    id: "evt_3rdItemID",
    object: "event",
    actor_id: "user_3rdActorID",
    actor_name: "Jane Smith",
    group: "example.com",
    action: {
      id: "evt_action_3rdActionID",
      object: "event_action",
      name: "user.login_failed",
    },
    target_id: "user_3rdTargetID",
    target_name: "jane@example.com",
    location: "10.20.30.40",
    occurred_at: "2022-03-20T18:45:30.123Z",
    metadata: {
      redirect: "/login",
      description: "User login failed.",
      x_request_id: "req_3rdRequestID",
    },
  },
  {
    id: "evt_4thItemID",
    object: "event",
    actor_id: "user_4thActorID",
    actor_name: "Robert Johnson",
    group: "example.com",
    action: {
      id: "evt_action_4thActionID",
      object: "event_action",
      name: "user.profile_updated",
    },
    target_id: "user_4thTargetID",
    target_name: "robert@example.com",
    location: "50.60.70.80",
    occurred_at: "2022-04-15T12:00:00.000Z",
    metadata: {
      redirect: "/profile",
      description: "User profile updated.",
      x_request_id: "req_4thRequestID",
    },
  },
  {
    id: "evt_5thItemID",
    object: "event",
    actor_id: "user_5thActorID",
    actor_name: "Emily Johnson",
    group: "example.com",
    action: {
      id: "evt_action_5thActionID",
      object: "event_action",
      name: "user.password_reset",
    },
    target_id: "user_5thTargetID",
    target_name: "emily@example.com",
    location: "70.80.90.100",
    occurred_at: "2022-05-01T09:30:45.678Z",
    metadata: {
      redirect: "/reset-password",
      description: "User password reset requested.",
      x_request_id: "req_5thRequestID",
    },
  },
  {
    id: "evt_6thItemID",
    object: "event",
    actor_id: "user_6thActorID",
    actor_name: "David Brown",
    group: "example.com",
    action: {
      id: "evt_action_6thActionID",
      object: "event_action",
      name: "user.login_succeeded",
    },
    target_id: "user_6thTargetID",
    target_name: "david@example.com",
    location: "120.130.140.150",
    occurred_at: "2022-06-12T17:20:00.000Z",
    metadata: {
      redirect: "/dashboard",
      description: "User login succeeded.",
      x_request_id: "req_6thRequestID",
    },
  },
  {
    id: "evt_7thItemID",
    object: "event",
    actor_id: "user_7thActorID",
    actor_name: "Sophia Miller",
    group: "example.com",
    action: {
      id: "evt_action_7thActionID",
      object: "event_action",
      name: "user.logout_succeeded",
    },
    target_id: "user_7thTargetID",
    target_name: "sophia@example.com",
    location: "200.210.220.230",
    occurred_at: "2022-07-25T14:15:30.456Z",
    metadata: {
      redirect: "/home",
      description: "User logout succeeded.",
      x_request_id: "req_7thRequestID",
    },
  },
  {
    id: "evt_8thItemID",
    object: "event",
    actor_id: "user_8thActorID",
    actor_name: "Michael Davis",
    group: "example.com",
    action: {
      id: "evt_action_8thActionID",
      object: "event_action",
      name: "user.profile_updated",
    },
    target_id: "user_8thTargetID",
    target_name: "michael@example.com",
    location: "300.310.320.330",
    occurred_at: "2022-08-08T10:10:10.000Z",
    metadata: {
      redirect: "/profile",
      description: "User profile updated.",
      x_request_id: "req_8thRequestID",
    },
  },
];

export { mockEventData };
export type EventType = Event;
