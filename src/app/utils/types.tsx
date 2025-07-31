export interface Skills {
    name: string;
    level: number;
}

export interface PageProps {
    id: string;
    setActiveSection: (section: string) => void;
}