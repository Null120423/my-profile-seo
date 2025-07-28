// lib/db.ts
import { Pool } from "pg";

const pool = new Pool({
  connectionString: "",
  ssl: false,
});

export default pool;
