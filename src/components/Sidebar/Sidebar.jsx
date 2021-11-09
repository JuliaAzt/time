import React, { useState } from "react";
import "./Sidebar.scss";
import ClassNames from "classnames";
import PropTypes from "prop-types";
// Icones
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { FaTv, FaUserAlt } from "react-icons/fa";
import {
  IoMdPlanet,
  IoMdRocket,
  IoMdColorPalette,
  IoMdSwitch,
} from "react-icons/io";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { BiTime } from "react-icons/bi";

const Sidebar = (props) => {
  const [collapsed, setCollapesed] = useState(true);

  const sidebarWidth = 292;
  const sidebarWidthCollapsed = 93;

  return (
    <div className="sidebar">
      <ProSidebar
        collapsed={collapsed}
        width={sidebarWidth}
        collapsedWidth={sidebarWidthCollapsed}
        onMouseEnter={() => setCollapesed(false)}
        onMouseLeave={() => setCollapesed(true)}
      >
        <SidebarHeader>
          <BiTime />
          {!collapsed && <span>Time</span>}
        </SidebarHeader>
        <SidebarContent>
          <Menu
            className={ClassNames(
              "primary-menu",
              collapsed && "primary-menu__collapsed"
            )}
          >
            <MenuItem icon={<FaTv />}>Página inicial</MenuItem>
            <MenuItem icon={<IoMdPlanet />}>Minhas publicações</MenuItem>
            <MenuItem icon={<MdOutlineFormatListBulleted />}>
              Lista de tarefas
            </MenuItem>
            <MenuItem icon={<FaUserAlt />}>Perfil do usuário</MenuItem>
          </Menu>
          <Menu className="secondary-menu">
            {!collapsed && (
              <MenuItem className="secondary-menu__title">
                NOSSOS GUIAS
              </MenuItem>
            )}
            <MenuItem icon={<IoMdRocket />}>Iniciando na plataforma</MenuItem>
            <MenuItem icon={<IoMdColorPalette />}>Ajuda e suporte</MenuItem>
            <MenuItem icon={<IoMdSwitch />}>Nossas regras</MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      {props.children}
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
};

export default Sidebar;
