import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
const masked = uri ? uri.replace(/:([^@]+)@/, ':****@') : '(not set)';
console.log('MONGODB_URI:', masked);

try {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
  console.log('✅ SUCCESS: MongoDB Atlas connected!');
  console.log('   Database:', mongoose.connection.db.databaseName);
  await mongoose.disconnect();
  console.log('   Connection closed cleanly.');
} catch (e) {
  console.error('❌ FAILED:', e.message);
}
