import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import NotificationParent, {
  NotificationHandler,
  NotificationQue,
} from "../Components/notification";
import { TYPE_TO_COLOR } from "../Constant/constant";

describe("notification Functionality", () => {
  it("notification parent renders on the screen", async () => {
    render(<NotificationParent timeout={1000} />);
    expect(screen.getByTestId("notification-parent")).toBeInTheDocument();
  });

  it("check that pubsub que working fine", async () => {
    const { publish, subscribe } = NotificationQue();
    subscribe((a) => a * 10);
    expect(publish(5)).toEqual(50);
  });

  it("checking the whole function cycle of the notification feature", async () => {
    render(<NotificationParent timeout={1000} />);

    let notificationProps = { message: "Hello World", type: "success" };

    act(() => {
      NotificationHandler(notificationProps);
    });

    let notificationChild = await waitFor(() =>
      screen.getByTestId("notification-child")
    );

    expect(notificationChild.style.backgroundColor).toEqual(
      TYPE_TO_COLOR[notificationProps.type]
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      notificationProps.message
    );
  });
});
