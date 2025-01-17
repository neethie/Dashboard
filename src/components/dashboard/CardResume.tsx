interface CardResumeProps {
    type: number;
    cant?: number;
}

function getCardResumeData(type: number) {
    switch (type) {
        case 1:
            return {
                svgCard: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#6b7280"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
                    </svg>
                ),
                nameCard: "Proyectos",
            };
        case 2:
            return {
                svgCard: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6b7280"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-checklist"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                        <path d="M14 19l2 2l4 -4" />
                        <path d="M9 8h4" />
                        <path d="M9 12h2" />
                    </svg>
                ),
                nameCard: "Tareas",
            };
        case 3:
            return {
                svgCard: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6b7280"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                        <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                        <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                    </svg>
                ),
                nameCard: "Equipos",
            };
        case 4:
            return {
                svgCard: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6b7280"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                ),
                nameCard: "Usuarios",
            };
        default:
            return {
                svgCard: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#6b7280"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
                    </svg>
                ),
                nameCard: "Indefinido",
            };
    }
}

export default function CardResume({ type, cant }: CardResumeProps) {
    const { svgCard, nameCard } = getCardResumeData(type);
    return (
        <div className="border border-opacity-20 border-gray-500 rounded-lg p-5 w-[200px]">
            <div className="flex items-center gap-1">
                {svgCard}
                <h3 className="text-sm text-gray-500">Total de {nameCard}</h3>
            </div>
            <p className="font-semibold text-lg text-gray-950">
                {cant === undefined ? "Indefinido" : cant}
            </p>
        </div>
    );
}
