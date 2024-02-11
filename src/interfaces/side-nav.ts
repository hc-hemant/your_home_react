export interface INavlink {
    id: string;
    path: string;
    label: string;
    icon: any;
    isActive: boolean;
    isVisible: boolean;
}

export interface ISideNavProps {
    logo: string;
    navLinks: Array<INavlink>;
    onNavOptionSelected: (navLink: INavlink) => void,
    onBottomBtnClick: () => void
}