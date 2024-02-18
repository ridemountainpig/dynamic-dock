export interface DynamicDockProps {
    children: React.ReactNode;
    gapX: number;
    imageWidth: number;
    direction?: "row" | "column";
    justifyContent?:
        | "center"
        | "start"
        | "end"
        | "space-between"
        | "space-around";
    alignItems?: "center" | "start" | "end" | "stretch";
}
