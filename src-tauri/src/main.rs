// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayEvent, SystemTrayMenuItem};
use tauri::Manager;

#[derive(Clone, serde::Serialize)]
struct Payload {
  args: Vec<String>,
  cwd: String,
}

fn main() {
  let quit = CustomMenuItem::new("quit".to_string(), "끝내기");
  


  let tray_menu = SystemTrayMenu::new()

    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(quit);
    

  tauri::Builder::default()
  .plugin(tauri_plugin_single_instance::init(|app, argv, cwd| {
    println!("{}, {argv:?}, {cwd}", app.package_info().name);

    app.emit_all("single-instance", Payload { args: argv, cwd }).unwrap();
}))

    .system_tray(SystemTray::new().with_menu(tray_menu))
    .on_system_tray_event(|app, event| match event {
    
      SystemTrayEvent::DoubleClick {
        position: _,
        size: _,
        ..
      } => {
        let window = app.get_window("main").unwrap();
        window.show();
        window.unminimize();
        window.set_focus();
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