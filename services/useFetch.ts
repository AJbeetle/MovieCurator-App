import {useState, useRef, useEffect} from "react"

const useFetch = <T>(fetchFunction:()=>Promise<T>, autofetch=true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try { 
            setLoading(true);
            setError(null);

            const result = await fetchFunction();

            setData(result);

        }
        catch(err) {
            // @ts-ignore
            setError(err instanceof Error ? err : new Error('An Error Occured'));
        }
        finally{
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(function(){
        if(autofetch){
            fetchData();
        }
    },[]);

    return {
        data, loading, error, refetch : fetchData, reset
    };
}

export default useFetch