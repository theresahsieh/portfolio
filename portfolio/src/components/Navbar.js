import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from "../resources/logo.png";
import { Link } from "react-router-dom";
import * as myStyles from "../MyStyles";
import { Button } from '@mui/material';

const pages = [{ title: 'projects', url: "/projects" }, { title: "about", url: '/about' }];

function Navbar() {

  return (
    <AppBar position="sticky" sx={{
      width: "100%", marginLeft: "auto", marginRight: "auto", backgroundColor: "white",
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.04)",
    }}>
      <div style={{ width: "100%" }}>
        <Toolbar sx={{ justifyContent: 'space-between', overflowX: 'auto', maxWidth: '1488px', margin: "auto" }}>
          <a href="#/projects" style={{ display: "flex" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "2rem",
                height: "2rem",
                pointerEvents: "all",
              }}
            />
          </a>
          <div>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {pages.map((page) => (
                <Link
                  key={`#/${page.url}`}
                  to={page.url}
                  style={{ textDecoration: 'none', padding: "1.5rem", color: myStyles.grey.one }}
                >
                  <Button>
                    <strong> {page.title} </strong>
                  </Button>

                </Link>
              ))}
            </Box>
          </div>
        </Toolbar>
      </div>

    </AppBar>

  );
}
export default Navbar;