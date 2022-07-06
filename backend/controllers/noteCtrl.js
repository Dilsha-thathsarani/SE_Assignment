import Note from "../models/note.js";

//insert note to the system
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

//get a note
export const getNoteByID = async (req, res) => {
  let noteId = req.params.id;

  Note.findById(noteId, (err, notes) => {
    if (err) {
      return res.status(400).json({ err });
    }
    return res.status(200).json({
      notes,
    });
  });
};
