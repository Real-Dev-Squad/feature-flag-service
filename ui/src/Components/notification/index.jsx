import { useState } from "react";
import { TYPETOCOLOR } from "../../Constant/constant";

/**
 * a pubsub kind of implementation, basically it will save a function in closure with varaible called "fn"
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
      className="flex justify-start items-center min-w-full w-max bg-white font-['Helvetica', 'sans-serif'] font-medium text-base capitalize rounded px-2.5 py-1.5"
      style={{ backgroundColor: `${TYPETOCOLOR[data.type]}` }}
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
   * also at the same time a setTimeout will be run which will remove the first entry from
   * the notification array after "timeout" secs
   */
  subscribe((alert) => {
    setNotifications((prev) => [...prev, alert]);

    setTimeout(() => {
      setNotifications((prev) => {
        let [_, ...data] = prev;
        return data;
      });
    }, timeout);
  });

  return (
    <div
      data-testid="notification-parent"
      className="flex justify-center items-center flex-col-reverse fixed top-4 w-max gap-2 transition-[height] duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]"
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
