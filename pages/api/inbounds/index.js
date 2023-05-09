import dbConnect from '@/lib/dbConnect';
import Inbound from '@/models/Inbound';

const createUsers = async (req, res) => {};

const getUsers = async (req, res) => {
  try {
    const users = await Inbound.find({});
    res.status(200).json({ success: true, inboundsList: users });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      await getUsers(req, res);
      break;

    default:
      res.status(400).json({ success: false, message: 'Invalid method' });
      break;
  }
}
