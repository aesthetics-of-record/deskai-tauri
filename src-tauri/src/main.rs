// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::{Child, Command};
use tauri::Manager;
use tauri::{CustomMenuItem, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem};

#[derive(Clone, serde::Serialize)]
struct Payload {
    args: Vec<String>,
    cwd: String,
}

fn main() {
    ///////////////////////////////////////////////////////////
    // FastAPI 서버
    let mut server: Option<Child> = None;
    ///////////////////////////////////////////////////////////

    let quit = CustomMenuItem::new("quit".to_string(), "끝내기");
    let tray_menu = SystemTrayMenu::new()
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);

    tauri::Builder::default()
        .setup(|app| {
            let main_window = app.get_window("main").unwrap();

            let start = main_window.listen("start_server", |event| {
                // println!("got window event-name with payload {:?}", event.payload());
                let child =
                    Command::new("C:/Users/cho/Documents/GitHub/deskai-tauri/src-tauri/server.exe")
                        .spawn()
                        .expect("failed to start FastAPI server");
                server = Some(child)
            });

            let stop = main_window.listen("stop_server", |event| {
                println!("got window event-name with payload {:?}", event.payload());
            });
            // unlisten to the event using the `id` returned on the `listen` function
            // an `once` API is also exposed on the `Window` struct
            main_window.unlisten(start);
            main_window.unlisten(stop);

            Ok(())
        })
        .plugin(tauri_plugin_single_instance::init(|app, argv, cwd| {
            println!("{}, {argv:?}, {cwd}", app.package_info().name);

            app.emit_all("single-instance", Payload { args: argv, cwd })
                .unwrap();
        }))
        .system_tray(SystemTray::new().with_menu(tray_menu))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::DoubleClick {
                position: _,
                size: _,
                ..
            } => {
                let window = app.get_window("main").unwrap();
                let _ = window.show();
                let _ = window.unminimize();
                let _ = window.set_focus();
            }
            SystemTrayEvent::MenuItemClick { id, .. } => {
                match id.as_str() {
                    "quit" => {
                        std::process::exit(0); // 종료
                    }
                    _ => {}
                }
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
