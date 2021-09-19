import asyncHandler from "express-async-handler";
import Provider from "../models/providerModel.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    get Providers
// @route   GET /api/provider/
// @access  Public
const getProviders = asyncHandler(async (req, res) => {
  const pageSize = 5;
  const keyword =
    req.query.city && req.query.profession
      ? {
          city: req.query.city,
          "professions.name": { $eq: req.query.profession },
        }
      : req.query.profession
      ? { "professions.name": { $eq: req.query.profession } }
      : {};
  const page = Number(req.query.pageNumber) || 1;

  const count = await Provider.countDocuments(keyword);
  const providers = await Provider.find(keyword)
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  if (providers.length > 0) {
    res.json({ providers, page, pages: Math.ceil(count / pageSize) });
  } else {
    res.status(404);
    throw new Error("Nem található szakember a keresési feltételek alapján!");
  }
});

// @desc    get Provider by id
// @route   GET /api/provider/
// @access  Public
const getProviderById = asyncHandler(async (req, res) => {
  const provider = await Provider.findById(req.params.id);
  const user = await User.findById(provider.user);

  if (provider) {
    res.json({
      id: user._id,
      email: user.email,
      name: provider.name,
      image: provider.image,
      rating: provider.rating,
      bio: provider.bio,
      tel: provider.tel,
      city: provider.city,
      numReviews: provider.numReviews,
      gallery: provider.gallery,
      professions: provider.professions,
    });
  } else {
    res.status(404);
    throw new Error("A szakember nem található!");
  }
});

// @desc    Create new review
// @route   GET /api/provider/:id/reviews
// @access  Public
const createProviderReview = asyncHandler(async (req, res) => {
  const { name, email, rating, message } = req.body;

  const provider = await Provider.findById(req.params.id);
  if (provider) {
    const alreadyReviewed = provider.reviews.find((r) => r.email === email);

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Provider already reviewed");
    }

    const review = {
      name,
      email,
      rating: Number(rating),
      message,
    };

    provider.reviews.push(review);

    provider.numReviews = provider.reviews.length;

    provider.rating =
      provider.reviews.reduce((acc, item) => item.rating + acc, 0) /
      provider.reviews.length;

    await provider.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Provider not found");
  }
});

// @desc    Update provider profile
// @route   PUT /api/provider/profile
// @access  Private
const updateProviderProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const provider = await Provider.findOne({ user: user._id });

  if (provider && user) {
    user.email = req.body.email || user.email;
    provider.name = req.body.name || provider.name;
    provider.city = req.body.city || provider.city;
    provider.tel = req.body.tel || provider.tel;
    provider.bio = req.body.bio || provider.bio;
    provider.image = req.body.image || provider.image;

    const updatedUser = await user.save();
    const updatedProvider = await provider.save();

    res.json({
      _id: updatedUser._id,
      name: updatedProvider.name,
      email: updatedUser.email,
      city: updatedProvider.city,
      tel: updatedProvider.tel,
      bio: updatedProvider.bio,
      image: updatedProvider.image,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("Provider not found");
  }
});
// @desc    Add profession to provider profile
// @route   PUT /api/provider/profile/professions
// @access  Private
const AddProfessionToProvider = asyncHandler(async (req, res) => {
  const provider = await Provider.findOne({ user: req.user._id });

  if (provider) {
    const alreadyAdded = provider.professions.find(
      (r) => r.name === req.body.profession
    );

    if (alreadyAdded) {
      res.status(400);
      throw new Error("Professions already added");
    }

    const profession = {
      name: req.body.profession,
    };

    provider.professions.push(profession);

    await provider.save();
    res.status(201).json({ message: "Profession added" });
  } else {
    res.status(404);
    throw new Error("Provider not found");
  }
});

// @desc    delete profession from provider profile
// @route   PUT /api/provider/profile/professions/delete
// @access  Private

const DeleteProfessionFromProvider = asyncHandler(async (req, res) => {
  const provider = await Provider.findOne({ user: req.user._id });

  if (provider) {
    const haveProfession = provider.professions.find(
      (r) => r.name === req.body.profession
    );
    if (!haveProfession) {
      res.status(400);
      throw new Error("Nem található szakma!");
    }
    provider.professions = provider.professions.filter(
      (profession) => profession.name !== req.body.profession
    );
    await provider.save();
    res.status(201).json({ message: "Szakma törölve!" });
  } else {
    res.status(404);
    throw new Error("Szakember nem található");
  }
});

export {
  getProviders,
  getProviderById,
  createProviderReview,
  updateProviderProfile,
  AddProfessionToProvider,
  DeleteProfessionFromProvider,
};
