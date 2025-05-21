import React, { useEffect, useState } from "react";
import { getNotifications } from "../../api/notificationAPI";
import { formatDistanceToNow } from "date-fns";

const dummyData = [
  {
    title: "Your Rewards",
    message: "You’ve earned 100 points for your recent purchase!",
    createdAt: new Date()
  },
  {
    title: "New Offer",
    message: "Get 20% off on your next order. Limited time offer!",
    createdAt: new Date()
  }
];

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const data = await getNotifications();
      if (data.success) {
        setNotifications(data.data);
      } else {
        // fallback to dummy data if API fails
        setNotifications(dummyData);
      }
    } catch (error) {
      console.error("Error fetching Notifications:", error);
      setNotifications(dummyData); // use dummy data on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="notification">
      {notifications.length === 0 && !loading
        ? <div className="notifyimagCard">
            <div className="notifyImg">
              <img src="assets/images/notify.png" alt="No Notifications" />
            </div>
            <h5 className="mb-5" style={{ fontSize: "18px" }}>
              All caught up!
            </h5>
            <p>There are no new notifications for you.</p>
          </div>
        : <div className="notificationCard">
            {notifications.map((item, index) =>
              <div className="notifyCard" key={index}>
                <h5>
                  {item.title}
                </h5>
                <p>
                  {item.message}
                </p>
                <small>
                  {formatDistanceToNow(new Date(item.createdAt))} ago
                </small>
              </div>
            )}
          </div>}
    </div>
  );
};

export default NotificationList;
