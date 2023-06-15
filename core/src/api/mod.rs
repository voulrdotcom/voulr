use crate::prisma::PrismaClient;
use rspc::{alpha::Rspc, Config};
use std::sync::Arc;

pub struct Ctx {
    pub db: Arc<PrismaClient>,
}
pub(self) const R: Rspc<Ctx> = Rspc::new();
pub type Router = rspc::Router<Ctx>;

pub mod auth;
pub mod utils;

pub fn mount() -> Arc<Router> {
    R.router()
        .merge("auth.", auth::mount())
        .build(Config::new().export_ts_bindings("../web/src/lib/types/bindings.ts"))
        .arced()
}
