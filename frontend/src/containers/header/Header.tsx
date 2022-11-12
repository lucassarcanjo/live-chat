import { useUserStore } from "~/hooks";
import { Button } from "~/components/button";
import Logo from "~/assets/logo.svg";
import "./Header.scss";

export const Header = () => {
  const { setShowActiveUsers, isShowingActiveUsers } = useUserStore();

  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Button
        label="Participants"
        className="header__button"
        variant={isShowingActiveUsers ? "primary" : "secondary"}
        onClick={setShowActiveUsers}
      />
    </header>
  );
};
