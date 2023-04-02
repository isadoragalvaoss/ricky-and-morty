import CardItem from "@/components/CardItem/CardItem";
import Cards from "@/components/Cards";
import { useCharacterContext } from "@/context/CharacterContext/CharacterContext";
import { FavoriteContent, PagesContainer } from "@/styles/Pages.styles";
import { CircularProgress } from "@mui/material";

export default function Teste() {
  const { isLoading, favorites } = useCharacterContext();

  return (
    <PagesContainer>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <FavoriteContent maxWidth="md">
            {favorites?.data && !Array.isArray(favorites.data) && (
              <CardItem item={favorites?.data} />
            )}
            {favorites?.data && Array.isArray(favorites.data) && (
              <Cards data={favorites?.data} />
            )}
          </FavoriteContent>
        </>
      )}
    </PagesContainer>
  );
}
