import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import NotificationParent from "../Components/notification";
import { NOTIFICATION_TIMEOUT, TYPE_TO_COLOR } from "../Constant/constant";
import { NotificationContext } from "../Context/NotificationContext";
import React from "react";

const customRender = (ui, { value, ...options }) =>
  render(
    <NotificationContext.Provider value={value}>
      {ui}
    </NotificationContext.Provider>,
    options
  );

let notificationContent = { message: "Hello World", type: "success" };

let mockNotificationContext = {};

beforeEach(() => {
  mockNotificationContext = {
    notificationQueue: [],
    createNotifcation(data) {
      this.notificationQueue = [data, ...this.notificationQueue];

      setTimeout(() => {
        let [_, ...data] = this.notificationQueue;
        this.notificationQueue = data;
      }, NOTIFICATION_TIMEOUT);
    },
  };
});

afterEach(() => {
  mockNotificationContext = {};
});

describe("Notification Component", () => {
  it("should check if the notification wrapper renders", async () => {
    render(<NotificationParent />);
    expect(screen.getByTestId("notificationparent")).toBeInTheDocument();
  });

  it("should check the function cycle of the notification component", async () => {
    mockNotificationContext.createNotifcation(notificationContent);
    customRender(<NotificationParent />, { value: mockNotificationContext });

    let notificationChild = await waitFor(() =>
      screen.getByTestId("notificationchild")
    );

    expect(notificationChild).toHaveTextContent(notificationContent.message);
  });

  it("should check if the color rendered is the same one as passed", async () => {
    mockNotificationContext.createNotifcation(notificationContent);
    customRender(<NotificationParent />, { value: mockNotificationContext });

    let notificationChild = await waitFor(() =>
      screen.getByTestId("notificationchild")
    );
    expect(notificationChild.style.backgroundColor).toEqual(
      TYPE_TO_COLOR[notificationContent.type.toUpperCase()]
    );
  });
  it("should check if the heading rendered as h3", async () => {
    mockNotificationContext.createNotifcation(notificationContent);
    customRender(<NotificationParent />, { value: mockNotificationContext });

    let notificationChild = await waitFor(() =>
      screen.getByTestId("notificationchild")
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      notificationContent.message
    );
  });
});
