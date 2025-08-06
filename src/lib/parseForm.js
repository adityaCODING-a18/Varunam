// lib/parseForm.js
import formidable from "formidable";

export const parseForm = async (req) =>
  new Promise((resolve, reject) => {
    const form = formidable({ multiples: false });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export const config = {
  api: {
    bodyParser: false,
  },
};
