// Evita la ventana de consola en Windows en la versión de producción.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    fee_price_calculator_lib::run()
}
