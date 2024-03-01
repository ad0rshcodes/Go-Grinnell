// pages/api/saveRideData.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const filePath = path.join(process.cwd(), 'data', 'rideData.json');
    const fileData = JSON.stringify(data);
    fs.writeFileSync(filePath, fileData);
    res.status(200).json({ message: 'Data stored successfully' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
