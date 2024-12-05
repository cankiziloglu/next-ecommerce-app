import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import path from 'path';

// Load .env.local file
config({ path: path.resolve(process.cwd(), '.env.local') });

export default defineConfig({
  out: './drizzle',
  schema: './server/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
