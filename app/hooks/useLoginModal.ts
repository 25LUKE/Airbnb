import { create } from 'zustand';

interface LoginModuleStore {
    isOpen: boolean;
    onOpen: () => void
    onClose: () => void
}

const useLoginModal = create<LoginModuleStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
