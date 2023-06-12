import dbConnect from '@/lib/dbConnect';
import Sponsor from '@/models/Sponsor';

const getSponsors = async res => {
  try {
    const sponsors = await Sponsor.find({});
    res.status(200).json({ success: true, sponsorsList: sponsors });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      await getSponsors(res);
      break;

    default:
      res.status(400).json({ success: false, message: 'Invalid method' });
      break;
  }
}
