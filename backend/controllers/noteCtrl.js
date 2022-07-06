import Note from "../models/note.js";

export const createNote = async (req, res) => {
  const { email, title, note } = req.body;
  console.log(req.body);

  await Note.create({ email, title, note })
    .then(() => {
      res.json("Note Added");
    })
    .catch((err) => {
      console.log(err);
    });
};
