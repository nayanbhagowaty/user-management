import IReadController from "./interfaces/IReadController";
import IWriteController from "./interfaces/IWriteController";
import IBaseBusiness from "../app/business/IBaseBusiness";
interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {


}
export default IBaseController;