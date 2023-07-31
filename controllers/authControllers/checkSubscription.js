const { HttpError } = require("../../helpers");
const { User, schemas } = require("../../models/user");

const updateSubscription = async (req, res) => {
     const { _id } = req.user
     const { error } = schemas.updateSubscriptionSchema.validate(req.body);
    const result = await User.findOneAndUpdate({_id} ,req.body, { new: true })
  if (error) {
       throw HttpError(404, "Not found")
    }
  res.status(200).json({
    result
  });
  };

module.exports = updateSubscription



