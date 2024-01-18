"use client";

import { useEffect, useState } from "react";
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

const WindowTitlebar = () => {
  const [appWindow, setAppWindow] = useState<any>();

  // Import appWindow and save it inside the state for later usage
  async function setupAppWindow() {
    const appWindow = (await import("@tauri-apps/api/window")).appWindow;
    setAppWindow(appWindow);
  }

  async function notification() {
    let permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }
    console.log(permissionGranted);
    if (permissionGranted) {
      sendNotification({
        title: "deskai",
        body: "어플리케이션이 실행되었습니다 !",
      });
    }
  }

  useEffect(() => {
    setupAppWindow();
    notification();
  }, []);

  return (
    <div data-tauri-drag-region className="flex p-2 justify-between ">
      <div className="font-bold"></div>

      <div className="flex gap-x-2">
        <div
          className="rounded-full flex justify-center cursor-pointer"
          onClick={() => {
            appWindow.minimize();
          }}
        >
          -
        </div>
        <div
          className="rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            appWindow.toggleMaximize();
          }}
        >
          +
        </div>
        <div
          className="rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            appWindow.hide();
          }}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default WindowTitlebar;
