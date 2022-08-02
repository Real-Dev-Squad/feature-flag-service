import { createContext, useContext, useState } from "react";
import { NOTIFICATION_TIMEOUT } from "../Constant/constant";

export const NotificationContext = createContext({
  createNotifcation() {},
  notificationQueue: [],
});

export const useNotificationContext = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const [notificationQueue, setNotificationQueue] = useState([]);

  /**
   *
   * @param {type : string, message : string} notificationContent
   */
  const createNotifcation = (notificationContent) => {
    setNotificationQueue((prev) => [...prev, notificationContent]);

    setTimeout(() => {
      setNotificationQueue((prev) => {
        let [_, ...data] = prev;
        return data;
      });
    }, NOTIFICATION_TIMEOUT);
  };

  return (
    <NotificationContext.Provider
      value={{ createNotifcation, notificationQueue }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
