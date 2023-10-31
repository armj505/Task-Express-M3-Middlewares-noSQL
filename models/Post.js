const mongooseSlugPlugin = require("mongoose-slug-plugin");
const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  image: String,
});

PostSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=title%>" });

module.exports = model("Post", PostSchema);
