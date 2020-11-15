import PromoCode from "./promocode.model";
import _ from "lodash";

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
  const promocode = req.body;
  try {
    const updatedPromoCode = await PromoCode.findByIdAndUpdate(
      promoCodeId,
      promocode,
      {
        new: true,
      }
    );
    res.status(201).send({ promocode: updatedPromoCode });
  } catch (err) {
    res.status(400).send(err);
  }
};

export const applyPromocode = async (req, res) => {
  const { promoCode } = req.body;
  try {
    const promcodeObj = await PromoCode.findOne({ title: promoCode });

    if (!promcodeObj) {
      return res.status(400).send({ errorMes: "Invalid Promocode!" });
    }

    const startDate = new Date(promcodeObj.startTime).getTime();
    const endDate = new Date(promcodeObj.endTime).getTime();
    const nowDate = Date.now();

    if (!promcodeObj.active) {
      return res.status(400).send({ errorMes: "Invalid Promocode!" });
    }

    if (promcodeObj.useTime === promcodeObj.usage) {
      return res
        .status(400)
        .send({ errorMes: "Sorry! This Promocode Usage Limit Exceeds!" });
    }

    if (startDate < nowDate) {
      return res.status(400).send({ errorMes: "Invalid Promocode!" });
    }

    if (endDate > nowDate) {
      return res.status(400).send({ errorMes: "This Promocode Expired!" });
    }

    const newPromocodeObj = await PromoCode.findByIdAndUpdate(
      promcodeObj._id,
      { usage: promcodeObj.usage + 1 },
      { new: true }
    );

    if (!newPromocodeObj) {
      return res
        .status(400)
        .send({ errorMes: "Something Went Wrong For Applying Promocode" });
    }

    res.status(201).send(_.pick(newPromocodeObj, ["discountRate"]));
  } catch (err) {
    res.status(400).send(err);
  }
};

export const setActive = async (req, res) => {
  const promoCodeId = req.params.id;
  const { active } = req.body;
  try {
    const promocode = await PromoCode.findByIdAndUpdate(
      promoCodeId,
      { active },
      {
        new: true,
      }
    );
    res.status(201).send({ promocode });
  } catch (err) {
    res.status(400).send(err);
  }
};
