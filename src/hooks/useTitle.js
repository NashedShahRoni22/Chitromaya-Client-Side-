import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Chitromaya`;
    },[title])
};

export default useTitle;