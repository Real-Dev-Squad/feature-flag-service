import { TYPE_TO_COLOR } from "../../Constant/constant";
import { useNotificationContext } from "../../Context/NotificationContext";

const NotificationParent = () => {
  const { notificationQue } = useNotificationContext();

  return (
    <div
      data-testid="notification-parent"
      className="flex justify-center items-center flex-col-reverse fixed top-4 w-max gap-2 transition-[height] duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]"
      //this piece of code will increase or decrease the height of the wrapper accr to the no. of notifications present
      style={{ height: `${notificationQue.length * 2.5}rem` }}
    >
      {notificationQue.map((alert, index) => (
        <div
          key={index}
          data-testid="notification-child"
          className="flex justify-start items-center min-w-full w-max bg-white font-['Helvetica', 'sans-serif'] font-medium text-base capitalize rounded px-2.5 py-1.5"
          style={{ backgroundColor: `${TYPE_TO_COLOR[alert.type]}` }}
        >
          <h3>{alert.message}</h3>
        </div>
      ))}
    </div>
  );
};

export default NotificationParent;
