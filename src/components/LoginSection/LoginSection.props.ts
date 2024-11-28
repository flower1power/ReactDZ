import { IUser } from '../../context/type';

export interface ILoginSectionProps {
  loginUser: (user: IUser) => void;
}
