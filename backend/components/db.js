// db.js
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl:{
        rejectUnauthorized: false,
    },
});

pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1); // Exit process if client connection is lost
});

export default pool;
