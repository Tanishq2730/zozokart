import React, { useEffect, useState } from "react";
import { getNotifications } from "../../api/notificationAPI";
import { formatDistanceToNow } from "date-fns";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const data = await getNotifications();
      if (data.success) {
        setNotifications(data.data);
      }
    } catch (error) {
      console.error("Error fetching Notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="table-responsive">
      <table className="p-3 table table-striped table-bordered  text-16">
        <thead>
          <tr>
            <th className="text-18 py-5">ID</th>
            {/* <th className="text-18 py-5">User Name</th> */}
            <th className="text-18 py-5">Title</th>
            <th className="text-18 py-5">Message</th>
            <th className="text-18 py-5">Created On</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map(notification =>
            <tr key={notification._id} className="py-5">
              <td className="py-5">
                {notification._id}
              </td>
              <td className="py-5">
                {notification.title}
              </td>
              <td className="py-5">
                {notification.message}
              </td>
              <td className="py-5">
                {/* {notification.createdAt} */}
                {formatDistanceToNow(new Date(notification.createdAt), {
                  addSuffix: true
                })}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationList;
