import Cards from "@/components/Cards/Cards";
import { useCharacterContext } from "@/context/CharacterContext/CharacterContext";
import { PagesContainer } from "@/styles/Pages.styles";
import { CircularProgress, Pagination } from "@mui/material";

export default function Home() {
  const { data, page, setContextPage, isLoading, loadingFavorites } =
    useCharacterContext();

  return (
    <PagesContainer>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {loadingFavorites ? (
            <CircularProgress />
          ) : (
            data?.data && <Cards data={data.data} />
          )}
          <Pagination
            count={data?.data.info.pages}
            page={page}
            onChange={setContextPage}
          />
        </>
      )}
    </PagesContainer>
  );
}
