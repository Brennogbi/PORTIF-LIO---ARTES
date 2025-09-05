import { useState } from "react";
import PropTypes from "prop-types"; // ✅ importa o prop-types
import 'bootstrap-icons/font/bootstrap-icons.css';


import {
  HEADER,
  Titulo,
  NAV,
  UL,
  Li,
  A,
  ToggleButton,
  ToggleButtonX,
  Mobilemenu
} from "./style";

function Header({ titulo }) {
  const [open, setOpen] = useState(false);

  return (
    <HEADER>
      {/* agora o titulo vem por props */}
      <Titulo>{titulo}</Titulo>

      {/* Menu Desktop */}
      <NAV>
        <Li><A to="/">Home</A></Li>
        <Li><A to="/GALERIA">Galeria</A></Li>
        <Li><A href="#">Sobre</A></Li>
        <Li><A href="#">Comissôes</A></Li>
        <Li><A href="#">Compra</A></Li>
      </NAV>

      {/* Botão Toggle (hambúrguer aparece só quando menu está fechado) */}
      {!open && (
        <ToggleButton onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </ToggleButton>
      )}

      {/* Botão X (aparece só quando menu está aberto) */}
      {open && (
        <ToggleButtonX onClick={() => setOpen(false)}>
          <i class="bi bi-x-circle-fill"></i>
        </ToggleButtonX>
      )}

      {/* Menu Mobile */}
      <Mobilemenu open={open}>
        <UL>
          <Li><A to="/">Home</A></Li>
          <Li><A to="/GALERIA">Galeria</A></Li>
          <Li><A href="#">Sobre</A></Li>
          <Li><A href="#">Comissôes</A></Li>
          <Li><A href="#">Compra</A></Li>
        </UL>
      </Mobilemenu>
    </HEADER>
  );
}

// ✅ validação com PropTypes
Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

// ✅ valor padrão caso não receba a prop
Header.defaultProps = {
  titulo: "Breno Santos",
};

export default Header;
