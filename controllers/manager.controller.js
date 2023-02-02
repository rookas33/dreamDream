const ManagerService = require("../services/manager.service");
const { Customer, Good } = require("../models");

class ManagerController {
  managerService = new ManagerService();
  // 상품 추가
  goodsEnroll = async (req, res) => {
    try {
      const { seller, goodsname, explan, quantity, price } = req.body;
      const image = req.file.path;
      const goodsEnrollData = await this.managerService.goodsEnroll(
        seller,
        goodsname,
        explan,
        image,
        quantity,
        price
      );
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "요청 실패" });
    }
  };
  // 상품 수정
  goodsModify = async (req, res) => {
    try {
      const { seller, goodsname, explan, quantity, price } = req.body;
      const image = req.file.path;
      const goodsModifyData = await this.managerService.goodsModify(
        seller,
        goodsname,
        explan,
        image,
        quantity,
        price
      );
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "요청 실패" });
    }
  };

  // 고객 정보 페이지 들어가기
  costommerGet = () => {};
  // 고객 정보 수정
  costommerModify = () => {};
  // 고객 정보 삭제
  costommerDelete = () => {};
}

module.exports = ManagerController;
