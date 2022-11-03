import create from "zustand";

export interface UserState {
  user: string | null;
  activeUsers: string[];
  login: (user: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  activeUsers: [],
  login: (user) =>
    set((state) => ({
      user,
      activeUsers: [...new Set(...state.activeUsers, user)],
    })),
}));
