import useSWR from "swr";


async function GET_getUserInfo(user_id)
{
    let url = "";
    const fetcher = (...args) => fetch(...args).then(res => res.json);
    const {data, error, isLoading} = useSWR(url, fetcher)
    return 
    {
        data,
        error,
        isLoading
    }
}

export default GET_getUserInfo