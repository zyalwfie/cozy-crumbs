import { create } from 'zustand';

type NavbarState = {
	isOpen: boolean;
	openNavbar: () => void;
	closeNavbar: () => void;
	toggleNavbar: () => void;
};

const useNavbarStore = create<NavbarState>((set) => ({
	isOpen: false,
	openNavbar: () => set({ isOpen: true }),
	closeNavbar: () => set({ isOpen: false }),
	toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useNavbarStore;
