export const CATEGORIES = [
    { id: 'all', label: 'TẤT CẢ ✨' },
    { id: 'flex', label: 'HỆ FLEX 😎' },
    { id: 'love', label: 'TÌNH YÊU 💘' },
    { id: 'work', label: 'CÔNG SỞ 🏢' },
    { id: 'gaming', label: 'GAMING 🎮' },
    { id: 'genz', label: 'GEN Z ⚡' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];
