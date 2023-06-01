use super::R;
use rspc::alpha::AlphaRouter;
use serde::Deserialize;
use specta::Type;

pub fn mount() -> AlphaRouter<()> {
    R.router()
        .procedure("login", {
            #[derive(Deserialize, Type)]
            pub struct LoginArgs {
                pub email: String,
                pub password: String,
            }

            R.mutation(|_, args: LoginArgs| async move {})
        })
        .procedure("register", {
            #[derive(Deserialize, Type)]
            pub struct RegisterArgs {
                pub email: String,
                pub password: String,
            }

            R.mutation(|_, args: RegisterArgs| async move {})
        })
}
