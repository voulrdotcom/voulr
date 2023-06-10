use super::{Ctx, R};
use prisma_client_rust::or;
use rspc::alpha::AlphaRouter;
use serde::Deserialize;
use specta::Type;
use voulr_prisma::prisma::user;

pub fn mount() -> AlphaRouter<Ctx> {
    R.router()
        .procedure("login", {
            #[derive(Deserialize, Type)]
            #[serde(rename_all = "camelCase")]
            pub struct LoginArgs {
                pub username_or_email: String,
                pub password: String,
            }

            R.mutation(|ctx, args: LoginArgs| async move {
                //let user = ctx
                //    .db
                //    .user()
                //    .find_first(vec![
                //        or![
                //            user::email::equals(args.username_or_email.clone()),
                //            user::username::equals(args.username_or_email)
                //        ],
                //        user::password::equals(args.password),
                //    ])
                //   .exec()
                //   .await?;
                Ok("login works... (not)")
            })
        })
        .procedure("register", {
            #[derive(Deserialize, Type)]
            pub struct RegisterArgs {
                pub username: String,
                pub email: String,
                pub password: String,
            }

            R.mutation(|ctx, args: RegisterArgs| async move {
                //ctx.db
                //    .user()
                //    .create(
                //        args.username,
                //        args.email,
                //        args.password, // todo: hash
                //        vec![],
                //    )
                //    .exec()
                //  .await?;
                Ok("register works... (not)")
            })
        })
}
