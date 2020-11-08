import userRoutes from "./user/user.routes";
import productRoutes from "./product/product.routes";
import orderRoutes from "./order/order.routes";

export default (app) => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/products", productRoutes);
  app.use("/api/v1/order", orderRoutes);
  app.use("/api/v1/admin", orderRoutes);
};
