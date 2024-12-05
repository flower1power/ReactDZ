import { IUser } from '../../context/type';

export interface ILoginFormProps {
  loginUser: (user: IUser) => void;
}
