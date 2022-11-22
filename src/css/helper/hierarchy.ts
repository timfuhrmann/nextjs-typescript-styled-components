const hierarchy = ["body"] as const;

type Hierarchy = typeof hierarchy[number];

export const zIndex = hierarchy.reduce((acc, current, index) => {
    acc[current] = index;
    return acc;
}, {} as Record<Hierarchy, number>);
