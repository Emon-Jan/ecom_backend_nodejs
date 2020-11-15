import userRoutes from "./user/user.routes";
import productRoutes from "./product/product.routes";
import orderRoutes from "./order/order.routes";
import adminRoutes from "./admin/admin.routes";
import promoCodeRoutes from "./promocode/promocode.routes";

export default (app) => {
  app.use("/api/v1/user", userRoutes);
  app.use("/api/v1/products", productRoutes);
  app.use("/api/v1/order", orderRoutes);
  app.use("/api/v1/admin", adminRoutes);
  app.use("/api/v1/apply-promocode", promoCodeRoutes);
};
