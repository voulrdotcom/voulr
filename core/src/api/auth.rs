use super::{utils::error, Ctx, R};
use rspc::alpha::AlphaRouter;
use serde::Deserialize;
use specta::Type;

pub fn mount() -> AlphaRouter<Ctx> {
    R.router()
        .procedure("login", {
            #[derive(Deserialize, Type)]
            #[serde(rename_all = "camelCase")]
            pub struct LoginArgs {
                pub email_or_username: String,
                pub password: String,
            }
            R.mutation(|ctx, args: LoginArgs| async move {
                let email_or_username = args.email_or_username.trim();
                let password = args.password.trim();

                if email_or_username.len() < 4 {
                    return error(401, "Email or username must be at least 4 characters.");
                }
                if email_or_username.len() > 32 {
                    return error(401, "Email or username can't be more than 32 characters.");
                }
                if password.len() < 8 {
                    return error(401, "Password must be at least 8 characters.");
                }
                if password.len() > 32 {
                    return error(401, "Password can't be more than 32 characters.");
                }
                Ok(())
            })
        })
        .procedure("register", {
            #[derive(Deserialize, Type)]
            pub struct RegisterArgs {
                pub email: String,
                pub username: String,
                pub password: String,
            }
            R.mutation(|ctx, args: RegisterArgs| async move { Ok(()) })
        })
}
