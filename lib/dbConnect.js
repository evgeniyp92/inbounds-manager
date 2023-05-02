import mongoose from 'mongoose';

let mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  throw new Error('URI to Mongo Instance not found, check environment config');
}

/**
 * Global is used here to maintain a cached conntection across hot reloads in
 * development. This prevents connections growing exponentially during API route
 * usage
 */

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(mongoURI, opts)
      .then(mongoose => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
