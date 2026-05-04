function envString(name, fallback) {
  const v = process.env[name];
  return v !== undefined && String(v).trim() !== "" ? String(v).trim() : fallback;
}

/** Single place for env defaults (override via `.env` or process env). */
export const config = {
  port: Number(envString("PORT", "5000")) || 5000,
  publicHost: envString("PUBLIC_HOST", "wmt12-production.up.railway.app"),
  mongoUri: envString(
    "MONGODB_URI",
    "mongodb://project:neth@ac-ocepiss-shard-00-00.nx3r3lu.mongodb.net:27017,ac-ocepiss-shard-00-01.nx3r3lu.mongodb.net:27017,ac-ocepiss-shard-00-02.nx3r3lu.mongodb.net:27017/?ssl=true&replicaSet=atlas-fuocta-shard-0&authSource=admin&appName=Cluster0"
  ),
  jwtSecret: envString("JWT_SECRET", "wmt-hotel-jwt-secret-change-before-production"),
};


