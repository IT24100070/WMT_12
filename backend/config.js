function envString(name, fallback) {
  const v = process.env[name];
  return v !== undefined && String(v).trim() !== "" ? String(v).trim() : fallback;
}

/** Single place for env defaults (override via `.env` or process env). */
export const config = {
  port: Number(envString("PORT", "5000")) || 5000,
  publicHost: envString("PUBLIC_HOST", "wmt12-production.up.railway.app"),
  mongoUri: envString("MONGODB_URI", "mongodb+srv://admin1:admin1@cluster1.fdxvjk4.mongodb.net/?appName=Cluster1"),
  jwtSecret: envString("JWT_SECRET", "wmt-hotel-jwt-secret-change-before-production"),
};
