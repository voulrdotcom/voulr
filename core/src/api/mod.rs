use rspc::{alpha::Rspc, Config, Router};
use std::sync::Arc;

pub(self) const R: Rspc<()> = Rspc::new();

mod auth;

pub fn mount() -> Arc<Router> {
    R.router()
        .merge("auth.", auth::mount())
        .build(Config::new().export_ts_bindings("../web/src/lib/rspc/bindings.ts"))
        .arced()
}
