use axum::{routing::get, Router, Server};
use std::net::SocketAddr;
use tower_http::cors::{Any, CorsLayer};
use voulr_core::api;

#[tokio::main]
async fn main() {
    let router = api::mount();

    let cors = CorsLayer::new()
        .allow_methods(Any)
        .allow_headers(Any)
        .allow_origin(Any);

    let app = Router::new()
        .route("/", get(|| async { "voulr server (;" }))
        .nest("/rspc", router.endpoint(|| ()).axum())
        .layer(cors);

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));
    println!("Listening on {} \n", addr);
    Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
