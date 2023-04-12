const express = require("express");
const connection = require("../config/db");
const router = express.Router();
router.post("/api/message", (req, res) => {
  const { name, description } = req.body;

  const query = `INSERT INTO message ( description) VALUES ( ?)`;
  const values = [description];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting message into MySQL database: ", err);
      res
        .status(500)
        .json({ error: "Error inserting message into MySQL database" });
      return;
    }
    res.status(200).json({ success: true });
  });
});

router.get("/read", (req, res) => {
  var query = "select *from message";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  var query = "delete from message where id=?";
  connection.query(query, [id], (err, results) => {
    if (!err) {
      if (results.affectedRows == 0) {
        return res.status(404).json({ message: "message id not found" });
      }
      return res.status(200).json({ message: "message delete Successfully" });
    } else {
      return res.status(500).json(err);
    }
  });
});

module.exports = router;
