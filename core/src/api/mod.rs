use crate::prisma::PrismaClient;
use rspc::{alpha::Rspc, Config};
use std::sync::Arc;

pub struct Ctx {
    db: Arc<PrismaClient>, // Your database connection
}

pub(self) const R: Rspc<Ctx> = Rspc::new();
pub type Router = rspc::Router<Ctx>;

mod auth;

pub fn mount() -> Arc<Router> {
    R.router()
        .merge("auth.", auth::mount())
        .build(Config::new().export_ts_bindings("../web/src/lib/rspc/bindings.ts"))
        .arced()
}
