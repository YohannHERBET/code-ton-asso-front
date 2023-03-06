import { userTypeEnum } from '../global/enums/userTypeEnum';

export const getUserType = (user) => {
  if (user?.associationId) {
    return userTypeEnum.association;
  }
  if (user?.developerId) {
    return userTypeEnum.developer;
  }
  return userTypeEnum.none;
};
