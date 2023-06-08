use super::{Ctx, R};
use rspc::alpha::AlphaRouter;
use serde::Deserialize;
use specta::Type;
use voulr_prisma::prisma::user;

#[derive(Deserialize, Type)]
pub struct User {
    id: u64,
    date_created: String,
    email: String,
    email_verified: bool,
}

pub fn mount() -> AlphaRouter<Ctx> {
    R.router()
        .procedure("login", {
            #[derive(Deserialize, Type)]
            pub struct LoginArgs {
                pub email: String,
                pub password: String,
            }

            R.mutation(|ctx, args: LoginArgs| async move {
                ctx.db
                    .user()
                    .find_first(vec![
                        user::email::equals(args.email),
                        user::password::equals(args.password),
                    ])
                    .exec()
                    .await?;
                Ok(())
            })
        })
        .procedure("register", {
            #[derive(Deserialize, Type)]
            pub struct RegisterArgs {
                pub email: String,
                pub password: String,
            }

            R.mutation(|ctx, args: RegisterArgs| async move {
                ctx.db
                    .user()
                    .create(args.email, args.password, vec![])
                    .exec()
                    .await?;
                Ok(())
            })
        })
}
