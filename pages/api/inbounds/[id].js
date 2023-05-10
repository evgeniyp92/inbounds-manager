import dbConnect from '@/lib/dbConnect';
import Inbound from '@/models/Inbound';

const getOneInbound = async (req, res) => {
  try {
    const inbound = await Inbound.findById(req.query.id);
    if (!inbound) {
      throw new Error(
        'The command executed, but no inbound was found with that id'
      );
    }
    res.status(200).json({ success: true, inbound });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      await getOneInbound(req, res);
      break;

    default:
      res.status(404).json({ success: false, message: 'Invalid method' });
      break;
  }
}
