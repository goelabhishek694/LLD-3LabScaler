import { useCallback, useState } from "react"
function useVisibility(initialVisbility=false){
    const [isVisible, setIsVisible] = useState(initialVisbility);

    const show = useCallback(() => {
        setIsVisible(true);
    },[])

    const hide = useCallback(() => {
        setIsVisible(false);
    },[])

    const toggle = useCallback(() => {
        setIsVisible(prev => !prev);
    },[]);

    return {
        isVisible,
        show,
        hide,
        toggle
    }
}

export default useVisibility