const pool = require("../config/database");

const sendContactMessage = async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      message: "Name, email, dan message wajib diisi",
    });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanMessage = message.trim();

  if (cleanName.length > 100) {
    return res.status(400).json({
      message: "Nama maksimal 100 karakter",
    });
  }

  if (cleanEmail.length > 150) {
    return res.status(400).json({
      message: "Email maksimal 150 karakter",
    });
  }

  if (cleanMessage.length > 1000) {
    return res.status(400).json({
      message: "Pesan maksimal 1000 karakter",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(cleanEmail)) {
    return res.status(400).json({
      message: "Format email tidak valid",
    });
  }

  console.log("RAW:", { name, email, message });
  console.log("CLEAN:", { cleanName, cleanEmail, cleanMessage });

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, message)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [cleanName, cleanEmail, cleanMessage],
    );

    console.log("Data berhasil disimpan:", result.rows[0]);

    res.status(201).json({
      message: "Pesan berhasil dikirim",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendContactMessage,
};
