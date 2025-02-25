module.exports = (req, res) => {
  if (req.method === 'POST') {
    const body = req.body;
    
    // You can do something with the body here, like logging or storing in a database
    // console.log('Web Vitals:', body);
    
    // Send successful response
    res.status(200).json({ success: true });
  } else {
    // Return 405 Method Not Allowed for any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 