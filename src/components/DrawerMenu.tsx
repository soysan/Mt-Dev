import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core';
import { BubbleChart, Person, ContactMail, Menu } from '@material-ui/icons';
import React, { useState, VFC } from 'react';
import Link from 'next/link';

const DrawerMenu: VFC = () => {
  const [open, setOpen] = useState(false);

  const ToggleHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div style={{ width: '5rem', marginRight: '2rem' }}>
        <Button onClick={ToggleHandler}>
          <Menu style={{color: '#eceff1',fontSize: '60'}} />
        </Button>
        <Drawer anchor='right' open={open} onClose={ToggleHandler}>
          <Box onClick={ToggleHandler}>
            <List>
              {['Portfolio', 'Profile', 'Contact'].map((text, index) => (
                <Link
                  key={text}
                  href={index === 0 ? '/project' : index === 1 ? '/profile' : '/contact'}
                >
                  <a>
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index == 0 ? <BubbleChart /> : index == 1 ? <Person /> : <ContactMail />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </a>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default DrawerMenu;
