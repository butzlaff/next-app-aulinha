// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function user(req, res) {
  res.status(200).json({ 
    results: {
        user: 'emilio', 
        name: 'Emilio',
        lastName: 'Butzlaff',
      }
  })
}
