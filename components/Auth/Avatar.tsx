import AvatarMui from "@mui/material/Avatar";
import { User } from "../../types/user";

const Avatar = ({ user, size = 50 }: { user: User; size?: number }) => {
  return (
    <AvatarMui
      style={{ width: size, height: size }}
      alt={user?.name}
      src={user?.image}
    />
  );
};

export default Avatar;
