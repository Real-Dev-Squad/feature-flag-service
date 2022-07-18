import styles from "./notification.module.css";
import { useState } from "react";

/**
 * a pubsub kinda implementation, basically it will save a function in closure with varaible called "fn"
 * when i use a function called subcribe and pass it with the function i want to save
 * then when i will call publish function with "data" parameter it will call the function present in "fn"
 * with the "data" as a arguement
 */
export const NotificationQue = () => {
  let fn = () => {};
  const subscribe = (callback) => {
    fn = callback;
  };
  const publish = (data) => {
    return fn(data);
  };
  return { subscribe, publish };
};

/**
 * now this NotificationHandler can be imported in any component and can be called to create a
 * notification
 */
export const { subscribe, publish: NotificationHandler } = NotificationQue();

/**
 * when we have decided what kind of resources we want to use for icons there also be an icon rendered according to
 * type of the notification
 *
 *
 * @param {{message : string, type : string}} data the structure of notification that has to be passed down to the NotificationHandler
 */
export const NotificationElement = ({ data }) => {
  return (
    <div
      data-testid="notification-child"
      className={
        styles.notification + " " + styles[`notification-${data.type}`]
      }
    >
      <h3>{data.message}</h3>
    </div>
  );
};

const NotificationParent = ({ timeout = 2000 }) => {
  const [notifications, setNotifications] = useState([]);

  /*
   *whenever someone call the NotificationHandler with data for the alert this function will be called from
   * the pubsub closure
   * then the data will be pushed to the ending of the notification array with state update
   * also at the same time a setTimeout will be runned which will remove the first entry from
   * the notification array after "timeout" secs
   */
  subscribe((alert) => {
    setNotifications((prev) => [...prev, alert]);

    setTimeout(() => {
      setNotifications((prev) => {
        let [firstAlert, ...data] = prev;
        return data;
      });
    }, timeout);
  });

  return (
    <div
      data-testid="notification-parent"
      className={styles.wrapper}
      //this piece of code will increase or decrease the height of the wrapper accr to the no. of notifications present
      style={{ height: `${notifications.length * 2.5}rem` }}
    >
      {notifications.map((alert, index) => (
        <NotificationElement data={alert} key={index} />
      ))}
    </div>
  );
};

export default NotificationParent;
