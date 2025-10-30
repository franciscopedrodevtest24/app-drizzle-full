import * as schema from "./schemas/index"
import { drizzle } from 'drizzle-orm/neon-http';
const db = drizzle(process.env.DATABASE_URL!,{
    schema:schema
});

export default db