import { NavHeader, LogoText, Li, Ul, Link } from "./Header.styled";
export const Header = () => {
  return (
    <header>
      <NavHeader>
        <LogoText to="/">DCR</LogoText>
        <Ul>
          <Li>
            <Link to="/">Home</Link>
          </Li>
          <Li>
            <Link to="/catalog">Catalog</Link>
          </Li>
          <Li>
            <Link to="/favorites">Favorites</Link>
          </Li>
        </Ul>
      </NavHeader>
    </header>
  );
};
