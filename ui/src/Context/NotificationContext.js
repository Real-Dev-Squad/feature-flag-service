import { createContext, useContext, useState } from "react";
import { NOTIFICATION_TIMEOUT } from "../Constant/constant";

export const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const [notificationQue, setNotificationQue] = useState([]);

  const createNotifcation = (notificationData) => {
    setNotificationQue((prev) => [...prev, notificationData]);

    setTimeout(() => {
      setNotificationQue((prev) => {
        let [_, ...data] = prev;
        return data;
      });
    }, NOTIFICATION_TIMEOUT);
  };

  return (
    <NotificationContext.Provider
      value={{ createNotifcation, notificationQue }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
