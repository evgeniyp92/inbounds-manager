// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const user = await User.create({ ...req.body });
        res.status(201).json({ success: true, data: user });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
