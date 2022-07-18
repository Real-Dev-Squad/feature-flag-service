import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import NotificationParent, {
  NotificationHandler,
  NotificationElement,
  NotificationQue,
} from "../Components/notification";

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

  it("check that notification element gets the correct data", async () => {
    let notificationProps = { message: "Hello World", type: "success" };
    render(<NotificationElement data={notificationProps} />);

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      notificationProps.message
    );
    expect(screen.getByTestId("notification-child")).toHaveClass(
      `notification-${notificationProps.type}`
    );
  });

  it("checking the whole function cycle of the notification feature", async () => {
    render(<NotificationParent timeout={1000} />);

    let notificationProps = { message: "Hello World", type: "success" };

    act(() => {
      NotificationHandler(notificationProps);
    });

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      notificationProps.message
    );
    expect(screen.getByTestId("notification-child")).toHaveClass(
      `notification-${notificationProps.type}`
    );
  });
});
