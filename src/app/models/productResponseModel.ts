import { ResponseModel } from './responseModel';
import { Product } from './product';
//datamdan gelen veriler bu şekilde
export interface ProductResponseModel extends ResponseModel{
    data : Product[]
}