import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

const createUsers = async (req, res) => {};

const getUsers = async (req, res) => {};

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  // switch (method) {
  //   case 'GET':
  //     try {
  //       const users = await User.find({});
  //       res.status(200).json({ success: true, data: users });
  //     } catch (err) {
  //       console.log(err);
  //       res.status(400).json({ success: false });
  //     }
  //     break;
  //   case 'POST':
  //     try {
  //       const user = await User.create({ ...req.body });
  //       res.status(201).json({ success: true, data: user });
  //     } catch (err) {
  //       console.log(err);
  //       res.status(400).json({ success: false, error: err.message });
  //     }
  //     break;
  //   default:
  //     res.status(400).json({ success: false });
  //     break;
  // }

  switch (method) {
    case 'GET':
      break;

    default:
      res.status(400).json({ success: false, message: 'Invalid method' });
      break;
  }
}
