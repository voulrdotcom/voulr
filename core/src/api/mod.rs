use crate::prisma::PrismaClient;
use rspc::alpha::Rspc;
use std::sync::Arc;

pub mod auth;
pub mod utils;

pub struct Ctx {
    pub db: Arc<PrismaClient>,
}

pub const R: Rspc<Ctx> = Rspc::new();
