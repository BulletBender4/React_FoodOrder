import { useEffect, useState, useCallback } from "react";


// async function httpSendReq(URL, config) {
//     const response = await fetch(URL, config);
//     const resData = response.json();

//     if (!response.ok) {
//         throw new Error(resData.message || "Something went wrong")
//     }

//     return resData;
// }


// export default function useHTTP(url, config, initialValue) {
//     const [isLoading, setIsLoading] = useState(false);
//     const [data, setData] = useState(initialValue);
//     const [error, setError] = useState();

//     const fetchData = useCallback(async function fetchData() {
//         setIsLoading(true);
//         try {
//             const resultData = await httpSendReq(URL, config);
//             setData(resultData)
//         } catch (error) {
//             setError(error.message);
//         }
//         setIsLoading(false);
//     }, [URL, config])


//     useEffect(() => {
//         if (!config || !config.method || config && config.method === "GET") { fetchData() }
//     }, [fetchData, config])


//     return {
//         isLoading, data, error, fetchData
//     }

// }




























async function httpSendRequest(URL, config) {

    // fetch('https://localhost:3000/meals')
    //     .then((data) => data.json())
    //     .then((finalData) => console.log(finalData))
    //     .catch((err) => console.log(err.message));

    const response = await fetch(URL, config);

    const finalData = await response.json();

    if (!response.ok) {
        throw new Error(finalData.message || 'something went wrong, Bad request');
    }

    return finalData;
}

export default function useHTTP(url, config, initialValue) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState();

    function clearData() {
        setData(initialValue);
    }

    const fetchingData = useCallback(
        async function fetchingData(userDetails) {
            setIsLoading(true);
            try {

                const fetchedData = await httpSendRequest(url, { ...config, body: userDetails });

                setData(fetchedData);
            }
            catch (error) {
                setError(error.message)
            }
            setIsLoading(false);
        }, [url, config])

    useEffect(
        () => {
            if (!config || !config.method || config.method === "GET") {
                fetchingData()
            }
        },
        [fetchingData, config])


    return {
        isLoading, data, error, fetchingData, clearData
    }
}

