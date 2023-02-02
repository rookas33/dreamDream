const ManagerRepository = require("../repositories/manager.repository");

class ManagerService {
  managerRepository = new ManagerRepository();

  requestOrder = async (
    customer_id,
    nickname,
    phone,
    address,
    photo,
    request
  ) => {
    const newOrderData = await this.ordersRepository.requestOrder(
      customer_id,
      nickname,
      phone,
      address,
      photo,
      request
    );
    return {
      user_id: newOrderData.user_id,
      status: newOrderData.status,
      driver_id: newOrderData.driver_id,
      nickname: newOrderData.driver_id,
      phone: newOrderData.phone,
      address: newOrderData.address,
      photo: newOrderData.photo,
      request: newOrderData.request,
    };
  };
}

module.exports = ManagerService;
