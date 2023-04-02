import { useCharacterContext } from "@/context/CharacterContext";
import { ICharacter } from "@/models/character";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ModalItem from "../Modal";
import { CardContainer } from "./CardItem.styles";

interface CardProps {
  item: ICharacter;
}
export const CardItem = ({ item }: CardProps): JSX.Element => {
  const { favorites, handleFavorites, handleRemoveFavorite } =
    useCharacterContext();
  const isFavorite = favorites && hasId(favorites.data, item.id);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  function hasId(obj: ICharacter | ICharacter[], id: number): boolean {
    if (obj) {
      if (Array.isArray(obj)) {
        return obj.some((item) => item.id === id);
      } else {
        return obj.id === id;
      }
    }
    return false;
  }

  function favoriteAction() {
    isFavorite ? handleRemoveFavorite(item.id) : handleFavorites(item.id);
  }
  return (
    <>
      {item.id && (
        <CardContainer sx={{ maxWidth: 250 }} key={item.id}>
          <CardMedia
            sx={{ height: 170 }}
            image={item.image}
            title={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.species}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={favoriteAction}>
              {isFavorite ? "Unfavorite" : "Favorite"}
            </Button>
            <Button size="small" onClick={handleOpen}>
              Learn More
            </Button>
            <ModalItem
              selectedCharacter={item}
              open={open}
              handleClose={handleClose}
            />
          </CardActions>
        </CardContainer>
      )}
    </>
  );
};

export default CardItem;
