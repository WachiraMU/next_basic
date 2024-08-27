export const filterMenus = (menus, searchTerm) => {
    if (!searchTerm) {
        return menus; // ถ้าไม่มีคำค้นหา ให้แสดงผลเมนูทั้งหมด
    }

    return menus.filter(menu => {
        if (menu.submenu) {
            const filteredSubmenuItems = menu.submenuItems.filter(submenuItem =>
                submenuItem.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredSubmenuItems.length > 0) {
                return true; // ถ้าเมนูย่อยใด ๆ ตรงกับคำค้นหา ให้แสดงเมนูหลักด้วย
            }
        }

        return menu.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
};
