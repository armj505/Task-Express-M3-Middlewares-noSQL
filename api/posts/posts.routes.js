const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/upload");
const { titleValidation } = require("../../middlewares/validation");
const validate = require("express-validation");
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  fetchOne,
} = require("./posts.controllers");

router.param("postId", async (req, res, next, postId) => {
  const post = await fetchOne(postId, next);
  req.post = post;
  next();
});

router("/")
  .get(postsGet)
  .post(
    upload.single("image"),
    validate(titleValidation, {}, {}),
    (req, res) => {
      res.json(200);
    },
    postsCreate
  );
router("/:postId").delete(postsDelete).put(upload.single("image"), postsUpdate);

module.exports = router;
