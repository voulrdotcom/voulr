import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
    url.pathname; // hack to make this run for every url change

    // add user to page data
    return {
        user: locals.user
    };
};
