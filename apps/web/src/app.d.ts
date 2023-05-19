import type { User } from '@prisma/client';

/*
 * we add user type from prisma
 * schema to locals and page data
 * so we can access both fully typesafe.
 */

declare global {
    namespace App {
        interface Locals {
            user?: User;
        }
        interface PageData {
            user?: User;
        }
    }
}

export { };
