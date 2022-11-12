import create from "zustand";

export interface UserState {
  user: string | null;
  activeUsers: string[];
  login: (user: string) => void;
  userJoined: (user: string) => void;
  userLeft: (user: string) => void;

  isShowingActiveUsers: boolean;
  setShowActiveUsers: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  activeUsers: [],
  isShowingActiveUsers: false,
  login: (user) =>
    set((state) => ({
      user,
      activeUsers: [...state.activeUsers, user],
    })),
  userJoined: (user) =>
    set((state) => ({
      activeUsers: [...state.activeUsers, user],
    })),
  userLeft: (user) =>
    set((state) => ({
      activeUsers: state.activeUsers.filter((u) => u !== user),
    })),
  setShowActiveUsers: () =>
    set((state) => ({
      isShowingActiveUsers: !state.isShowingActiveUsers,
    })),
}));
