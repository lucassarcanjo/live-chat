import classNames from "classnames";
import { useUserStore } from "~/hooks";
import "./Participants.scss";

export const Participants = () => {
  const { isShowingActiveUsers, activeUsers } = useUserStore();
  const userCount = activeUsers.length;

  const classes = classNames(
    "side-container",
    !isShowingActiveUsers && "side-container--hidden"
  );

  return (
    <nav className={classes}>
      <div className="side-container__wrapper">
        <p className="side-container__count">{userCount} participants</p>
        <ul className="side-container__list">
          {activeUsers.map((user) => (
            <li key={user} className="side-container__list-item">
              {user}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
