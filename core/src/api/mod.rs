use rspc::{alpha::Rspc, Config};
use std::sync::Arc;
use voulr_prisma::prisma::PrismaClient;

pub struct Ctx {
    pub db: Arc<PrismaClient>,
}
pub(self) const R: Rspc<Ctx> = Rspc::new();
pub type Router = rspc::Router<Ctx>;

mod auth;

pub fn mount() -> Arc<Router> {
    R.router()
        .merge("auth.", auth::mount())
        .build(Config::new().export_ts_bindings("../web/src/lib/types/bindings.ts"))
        .arced()
}
