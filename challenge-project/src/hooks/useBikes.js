import { useEffect, useState } from "react";
import getBikes from '../services/getBikes'

const INITIAL_PAGE = 1;

export default function useBikes({ keywordParam, pageParam } = { keyword: 'berlin' }) {
    const [loading, setLoading] = useState(false)
    const [bikes, setBikes] = useState([])
    
    const [page, setPage] = useState(pageParam || INITIAL_PAGE)
    const [keyword, setKeyword] = useState(keywordParam || '')

    useEffect(() => {
        setLoading(true)

        getBikes({ keyword, page })
            .then(bikes => {
                setBikes(bikes)
                setLoading(false)
            })
    }, [keyword, page, setBikes])

    return { loading, bikes, page, keyword, setPage, setKeyword }
}
