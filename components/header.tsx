import Link from "next/link";
import config from "../config";
import {
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "./ui";
import AuthContext from "../contexts/Auth";
import { useContext, useState } from "react";

export default function Header() {
  const { user, setShowLoginForm, logout } = useContext(AuthContext);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header>
      <Container>
        <Toolbar
          disableGutters
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="py-10"
        >
          <Link href="/" className="hover:underline">
            <Typography variant="h3" fontWeight={700}>
              {config.APP_NAME}.
            </Typography>
          </Link>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            {user ? (
              <>
                <Link href={`/create`}>
                  <Button variant="outlined">Create Post</Button>
                </Link>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} src={user.image} />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography>{user.name}</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logout();
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography>Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                style={{ zIndex: 100 }}
                variant="outlined"
                color="primary"
                onClick={() => setShowLoginForm(true)}
              >
                Login
              </Button>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </header>
  );
}
