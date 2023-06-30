import React from "react";
import Avatar from "./Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { getRelativeTime } from "../../utils/time";
import { User } from "../../types/user";
import Link from "next/link";

function AccountInfo({
  user,
  timestamp,
}: {
  user: User | null;
  timestamp?: string;
}) {
  if (!user) return null;

  return (
    <Link href={`/user/${user.username}`}>
      <Stack
        direction="row"
        spacing={2}
        style={{ margin: "10px 0", alignItems: "center" }}
      >
        <Avatar user={user} />
        <Stack style={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={700}>
            {user?.name}
          </Typography>
          {timestamp && (
            <Typography variant="caption">
              {getRelativeTime(timestamp)}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Link>
  );
}

export default AccountInfo;
