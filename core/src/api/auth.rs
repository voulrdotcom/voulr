use super::{utils::error, Ctx, R};
use regex::Regex;
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
            R.mutation(|_ctx, args: LoginArgs| async move {
                let email_or_username = args.email_or_username.trim();
                let password = args.password.trim();

                match email_or_username {
                    len if len.len() < 1 => return error(401, "Email or username is required."),
                    len if len.len() < 4 => {
                        return error(401, "Email or username must be more than 4 characters.")
                    }
                    len if len.len() > 64 => {
                        return error(401, "Email or username can't be more than 64 characters.")
                    }
                    _ => {}
                }

                match password {
                    len if len.len() < 1 => return error(401, "Password is required."),
                    len if len.len() < 8 => {
                        return error(401, "Password must be more than 8 characters.")
                    }
                    len if len.len() > 32 => {
                        return error(401, "Password can't be more than 32 characters.")
                    }
                    _ => {}
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
            R.mutation(|_ctx, args: RegisterArgs| async move {
                let email = args.email.trim();
                let username = args.username.trim();
                let password = args.password.trim();

                match email {
                    "" => return error(400, "Email is required."),
                    len if len.len() < 4 => {
                        return error(400, "Email must be more than 4 characters.")
                    }
                    len if len.len() > 64 => {
                        return error(400, "Email can't be more than 64 characters.")
                    }
                    regex if !Regex::new(r"^[^@]+@[^@]+\.[^@]+$").unwrap().is_match(regex) => {
                        return error(400, "Email must be valid.")
                    }
                    _ => {}
                }

                match username {
                    "" => return error(400, "Username is required."),
                    len if len.len() < 8 => {
                        return error(400, "Username must be more than 4 characters.")
                    }
                    len if len.len() > 16 => {
                        return error(400, "Username can't be more than 16 characters.")
                    }
                    _ => {}
                }

                match password {
                    "" => return error(400, "Password is required."),
                    len if len.len() < 8 => {
                        return error(400, "Password must be more than 8 characters.")
                    }
                    len if len.len() > 32 => {
                        return error(400, "Password can't be more than 32 characters.")
                    }
                    _ => {}
                }

                Ok(())
            })
        })
}
