use axum::{routing::get, Router as AxumRouter};
use axum_cloudflare_adapter::{to_axum_request, to_worker_response, EnvWrapper};
use tower_service::Service;
use worker::{event, Env, Request, Response, Result};

mod utils;

#[derive(Clone)]
pub struct AxumState {
    pub env_wrapper: EnvWrapper,
}

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    utils::log_request(&req);
    utils::set_panic_hook();

    let axum_state = AxumState {
        env_wrapper: EnvWrapper::new(env),
    };

    let mut _router: AxumRouter = AxumRouter::new()
        .route("/", get(|| async { "voulr server (:" }))
        .with_state(axum_state);

    let axum_request = to_axum_request(req).await.unwrap();
    let axum_response = _router.call(axum_request).await.unwrap();
    let response = to_worker_response(axum_response).await.unwrap();

    Ok(response)
}
