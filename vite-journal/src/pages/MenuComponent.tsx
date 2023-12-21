import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function MenuComponent() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, left: open });
    };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
          {[
            { text: "Home", link: "/" },
            { text: "Journal", link: "/Journal" },
            { text: "SWORD Drill", link: "/SWORD" },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.link}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </Box>
  );

  return (
    <div>
      
          <Button onClick={toggleDrawer( true)}>Menu</Button>
          <Drawer
            anchor='left'
            open={state.left}
            onClose={toggleDrawer( false)}
          >
            {list}
          </Drawer>
    </div>
  );
}
