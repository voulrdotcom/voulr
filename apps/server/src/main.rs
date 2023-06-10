use axum::{routing::get, Router, Server};
use rspc::integrations::httpz::Request;
use std::net::SocketAddr;
use std::sync::Arc;
use tower_http::cors::{Any, CorsLayer};
use voulr_core::api::{mount, Ctx};
use voulr_prisma::prisma::PrismaClient;

#[tokio::main]
async fn main() {
    let cors = CorsLayer::new()
        .allow_methods(Any)
        .allow_headers(Any)
        .allow_origin(Any);

    let router = mount();
    let prisma_client = Arc::new(PrismaClient::_builder().build().await.unwrap());

    let app = Router::new()
        .route("/", get(|| async { "voulr server (;" }))
        .nest(
            "/rspc",
            router
                .endpoint(move |req: Request| Ctx { db: prisma_client })
                .axum(),
        )
        .layer(cors);

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));
    println!("Listening on {} \n", addr);
    Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
