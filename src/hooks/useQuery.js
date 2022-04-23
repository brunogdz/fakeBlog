import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery() {
    const {search} = useLocation()
    // function for searching is this:
    return useMemo(() => new URLSearchParams(search), [search]);
}