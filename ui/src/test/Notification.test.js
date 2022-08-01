import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import NotificationParent from "../Components/notification";
import { NOTIFICATION_TIMEOUT, TYPE_TO_COLOR } from "../Constant/constant";
import { NotificationContext } from "../Context/NotificationContext";
import React from "react";

const customeRender = (ui, { value, ...options }) =>
  render(
    <NotificationContext.Provider value={value}>
      {ui}
    </NotificationContext.Provider>,
    options
  );

describe("notification Functionality", () => {
  it("notification parent renders on the screen", async () => {
    render(<NotificationParent />);
    expect(screen.getByTestId("notification-parent")).toBeInTheDocument();
  });

  it("checking the whole function cycle of the notification feature", async () => {
    let notificationProps = { message: "Hello World", type: "success" };

    const contextValue = {
      notificationQue: [],
      createNotifcation(data) {
        this.notificationQue = [data, ...this.notificationQue];

        setTimeout(() => {
          let [_, ...data] = this.notificationQue;
          this.notificationQue = data;
        }, NOTIFICATION_TIMEOUT);
      },
    };

    contextValue.createNotifcation(notificationProps);
    customeRender(<NotificationParent />, { value: contextValue });

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
