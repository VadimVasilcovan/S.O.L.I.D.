import React from "react";
import { notification } from "./notification-messages";
import Notification from "./Notification";

const NotificationManager = () => {
  return (
    <div>
      <h2>Reusable Notification Example</h2>
      <Notification message={notification.success} type="success" />
      <Notification message={notification.error} type="error" />
      <Notification message={notification.warning} type="warning" />
      <Notification message={notification.info} type="info" />
    </div>
  );
};

export default NotificationManager;
