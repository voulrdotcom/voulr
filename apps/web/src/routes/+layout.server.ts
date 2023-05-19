import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
    url.pathname; // hack to make this run on every url change

    return {
        user: locals.user // pass user to layout data
    };
};
