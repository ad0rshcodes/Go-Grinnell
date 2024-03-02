// pages/api/saveRideData.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newData = req.body; // New data from the form
    const filePath = path.join(process.cwd(), 'data', 'rideData.json');

    // Check if the file exists. If not, initialize with an empty array.
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }

    // Read existing data, parse it, add new data, then save it back to the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Error reading data file' });
        return;
      }

      try {
        // Parse the existing data and add the new data entry
        const existingData = JSON.parse(data.toString());
        if (!Array.isArray(existingData)) {
          // Ensure the existing data is an array to append to it
          throw new Error('Existing data is not an array');
        }
        existingData.push(newData);

        // Save the updated data back to the file
        fs.writeFile(filePath, JSON.stringify(existingData), (err) => {
          if (err) {
            res.status(500).json({ message: 'Error saving data' });
          } else {
            res.status(200).json({ message: 'Data stored successfully' });
          }
        });
      } catch (error) {
        res.status(500).json({ message: 'Error processing data' });
      }
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
