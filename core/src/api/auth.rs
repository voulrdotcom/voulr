use super::R;
use rspc::alpha::AlphaRouter;

pub fn mount() -> AlphaRouter<()> {
    R.router()
        .procedure("login", R.query(|_, _: ()| "login works... (not)"))
        .procedure("register", R.query(|_, _: ()| "register works... (not)"))
        .procedure("logout", R.query(|_, _: ()| "logout works... (not)"))
}
