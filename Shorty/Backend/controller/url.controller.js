import URL from '../model/urlmodel.js'


function generateRandomNumber() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomNumber = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomNumber += chars[randomIndex];
  }
  return randomNumber;
}

export const  handleGenerateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  
  
  const small = generateRandomNumber();
  console.log(small);

  await URL.create({
    shortId: small,
    redirectURL: body.url,
  });

  return res.json({ id : small});
}



export const redirectUrl=async(req, res)=> {
    const shortId = req.params.shortId;
    const entry = await URL.findOne(shortId);
    console.log(entry)
    res.redirect(entry.redirectURL);
  };

