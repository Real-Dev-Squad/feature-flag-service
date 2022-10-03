import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import NotificationContainer from "../Components/notification";
import {
  NOTIFICATION_TIMEOUT,
  NOTIFICATION_TEXT_COLOR,
} from "../Constant/constant";
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
        let [, ...data] = this.notificationQueue;
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
    render(<NotificationContainer />);
    expect(screen.getByTestId("notificationcontainer")).toBeInTheDocument();
  });

  it("should check the function cycle of the notification component", async () => {
    mockNotificationContext.createNotifcation(notificationContent);
    customRender(<NotificationContainer />, { value: mockNotificationContext });

    let notificationChild = await waitFor(() =>
      screen.getByTestId("notificationchild")
    );

    expect(notificationChild).toHaveTextContent(notificationContent.message);
  });

  it("should check if the color rendered is the same one as passed", async () => {
    mockNotificationContext.createNotifcation(notificationContent);
    customRender(<NotificationContainer />, { value: mockNotificationContext });

    let notificationChild = await waitFor(() =>
      screen.getByTestId("notificationchild")
    );
    expect(notificationChild.style.backgroundColor).toEqual(
      NOTIFICATION_TEXT_COLOR[notificationContent.type.toUpperCase()]
    );
  });
  it("should check if the heading rendered as h3", async () => {
    mockNotificationContext.createNotifcation(notificationContent);
    customRender(<NotificationContainer />, { value: mockNotificationContext });

    let notificationChild = await waitFor(() =>
      screen.getByTestId("notificationchild")
    );
    expect(screen.getByRole("alert").nodeName).toEqual('H3')
    expect(screen.getByRole("alert")).toHaveTextContent(
      notificationContent.message
    );
  });
});
