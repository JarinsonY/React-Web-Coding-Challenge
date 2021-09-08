import Content from "../../Content";
import Header from "../../Header";
import SearchForm from "../../SearchForm";
import useBikes from "../../../hooks/useBikes";
import Footer from "../../Footer";
import { useParams } from "react-router";
import { useEffect } from "react";
import Pagination from "../../Pagination";

const Home = () => {

    const { pageP } = useParams()
    const pageParam = pageP ? parseInt(pageP) : 1;

    const { bikes, page, setKeyword, setPage } = useBikes({ pageParam })

    useEffect(() => {
        console.log('Page #: ' + page)
    }, [page])

    return (
        <>
            <Header setKeyword={setKeyword} />
            <SearchForm setKeyword={setKeyword} />
            <Content reports={bikes} />

            <Pagination page={page} bikes={bikes} setPage={setPage} />
            <Footer />
        </>
    )
}

export default Home;