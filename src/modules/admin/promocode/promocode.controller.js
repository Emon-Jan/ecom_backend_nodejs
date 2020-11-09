import PromoCode from "./promocode.model";

export const getAllPromoCodes = async (req, res) => {
  try {
    const promoCodes = await PromoCode.find({});
    res.status(201).send(promoCodes);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const createPromoCode = async (req, res) => {
  try {
    const promoCode = new PromoCode(req.body);
    const savedPromoCode = await promoCode.save();
    res.status(201).send(savedPromoCode);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const editPromoCode = async (req, res) => {
  const promoCodeId = req.params.id;
  try {
    const updatedPromoCode = await PromoCode.findByIdAndUpdate(
      promoCodeId,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).send(updatedPromoCode);
  } catch (err) {
    res.status(400).send(err);
  }
};
