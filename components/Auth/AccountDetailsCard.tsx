import React from "react";
import { Card, CardContent, Stack, Avatar, Typography } from "../ui";

import { User } from "../../types/user";

export default function AccountDetailsCard({ user }: { user?: User }) {
  if (!user) return "";

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" spacing={2} style={{ margin: "10px 0" }}>
          <Avatar alt={user?.name} src={user?.image} />
          <Stack>
            <Typography variant="body1">{user?.name}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
