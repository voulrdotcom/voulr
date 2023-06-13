use super::{Ctx, R};
use prisma_client_rust::or;
use rspc::{alpha::AlphaRouter, Error, ErrorCode};
use serde::Deserialize;
use specta::Type;
use crate::prisma::user;

pub fn mount() -> AlphaRouter<Ctx> {
    R.router()
        .procedure("login", {
            #[derive(Deserialize, Type)]
            #[serde(rename_all = "camelCase")]
            pub struct LoginArgs {
                pub username_or_email: String,
                pub password: String,
            }
            R.mutation(|Ctx { db }, LoginArgs { username_or_email, password }| async move {
                let user = db
                    .user()
                    .find_first(vec![
                        or![
                            user::email::equals(username_or_email.clone()),
                            user::username::equals(username_or_email)
                        ],
                        user::password::equals(password),
                    ])
                    .exec()
                    .await
                    .unwrap()
                    .ok_or_else(|| {
                        Error::new(
                            ErrorCode::Forbidden,
                            String::from("Username or password is incorrect.")
                        )
                    })?;

                Ok(user)
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
                let user = ctx.db
                    .user()
                    .create(
                        args.username,
                        args.email,
                        args.password, // todo: hash
                        vec![],
                    )
                    .exec()
                    .await?;

                Ok(user)
            })
        })
}
