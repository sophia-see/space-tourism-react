import useViewportSize from "./useViewportSize";

export default function useDeviceSize() {
    const viewportSize = useViewportSize();

    const isMobile = viewportSize.width < 768;
    const isTablet = viewportSize.width < 1024;
    const isDesktop = viewportSize.width >= 1024;

    return {isMobile, isTablet, isDesktop};
}